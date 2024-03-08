import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import { createServer } from "http";
import resolvers from "./graphql/resolvers";
import schema from "./graphql/schema";
import permissions from "./graphql/shields";
import { createApolloServer } from "./utils/apollo-server";
import Logger from "./utils/logger";
dotenv.config();
const { graphqlUploadExpress } = require("graphql-upload-minimal");

const logger = new Logger();
const whitelist = (process.env.SERVER_WHITE_LIST || "").split(",") || [];
const corsEnabled = process.env.ENABLE_CORS === "true";

import { OAuth2Client } from "google-auth-library";
const nodemailer = require("nodemailer");
// import nodemailer from 'nodemailer';

const myOauth2Client = new OAuth2Client(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
);

myOauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_MAILER_REFRESH_TOKEN,
});

// Initializes application
const app = express();
app.use(compression());
// Enable cors
const corsOptions: any = {
  credentials: true,
  origin: function (origin: string, callback: any) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed access"));
    }
  },
};

app.use(express.json());

app.post("/email/send", async (req, res) => {
  try {
    const { email, subject, content } = req.body;

    if (!email || !subject || !content)
      throw new Error("Please provide email, subject and content!");

    const myAccessTokenObject = await myOauth2Client.getAccessToken();

    const myAccessToken = myAccessTokenObject?.token;

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.ADMIN_EMAIL_ADDRESS,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refresh_token: process.env.GOOGLE_MAILER_REFRESH_TOKEN,
        accessToken: myAccessToken,
      },
    });

    const mailOptions = {
      to: email, // Gửi đến ai?
      subject: subject, // Tiêu đề email
      html: `<h3>${content}</h3>`, // Nội dung email
    };

    await transport.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ errors: (error as Error).message });
  }
});

const loggingMiddleware = (req: any, res: any, next: any) => {
  if (process.env.APOLLO_PLAYGROUND === "false") return next();

  if (
    req?.body?.operationName &&
    !["IntrospectionQuery"].includes(req.body.operationName)
  ) {
    const getIP =
      (
        req.headers["X-Forwarded-For"] ||
        req.headers["x-forwarded-for"] ||
        ""
      ).split(",")[0] || req.client.remoteAddress;
    const ip = (getIP.length < 15 && getIP) || getIP.slice(7) || req.ip;
    const { ...body } = req.body; // query
    logger.info(`[GraphQL.request] ${ip}`, body);
  }

  return next();
};
app.use(loggingMiddleware);
app.use(
  helmet({
    contentSecurityPolicy:
      process.env.APOLLO_PLAYGROUND === "true" ? false : undefined,
  }),
);

app.get("/healthcheck", (req, res) => {
  res.json({
    ...req.headers,
    date: new Date().toISOString(),
    status: "UP",
  });
});

app.use(cors(corsEnabled ? corsOptions : {}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: any, req: any, res: any, next: any) => {
  res.status(err.status || 500);
  res.json({ message: "Permission denied!" });
});

app.use(graphqlUploadExpress());

// Create a Apollo Server

let server: any;
async function startServer() {
  server = createApolloServer(schema, resolvers, permissions);
  await server.start();
  server.applyMiddleware({ app, path: "/graphql", cors: false });
}
startServer();

// Create http server and add subscriptions to it
const httpServer = createServer(app);
// server.installSubscriptionHandlers(httpServer);

// Listen to HTTP and WebSocket server
const PORT = process.env.PORT || process.env.API_PORT;

httpServer.listen({ port: PORT }, () => {
  logger.info(`server ready at http://localhost:${PORT}${server?.graphqlPath}`);
});
