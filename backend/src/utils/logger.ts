import {
  createLogger,
  transports,
  format,
  Logger as LoggerType,
} from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

require("dotenv").config();
interface LoggerOption {
  route_name?: string;
  storage_status?: string;
}

class Logger {
  private logger: LoggerType;
  private log_data: any;
  private route: string;
  private storage: string;
  private viewer: any;
  constructor({ route_name, storage_status }: LoggerOption = {}) {
    this.log_data = null;
    this.route = route_name || process.env.LOGGER_ROUTE_NAME || "";
    this.storage = storage_status || process.env.LOGGER_ROUTE_STORAGE || "";

    this.viewer = [new transports.Console()];
    if (process.env.NODE_ENV === "production" && this.storage === "true") {
      this.viewer.push(
        new DailyRotateFile({
          filename: `./logs/${this.route}-%DATE%.log`,
          datePattern: "YYYY-MM-DD-HH",
          zippedArchive: true,
          maxSize: "20m",
          maxFiles: "30d",
          level: "error",
        }),
      );
    }

    this.logger = createLogger({
      exitOnError: false, // do not exit on handled exceptions
      transports: this.viewer,
      format: format.combine(
        format.timestamp({
          format: "YYYYMMDD-HH:mm:ss:SSS",
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json(),
        format.printf((info: any) => {
          let message = `[${info.timestamp}] | ${this.route}.log | ${info.level} | ${info.message}`;
          message = info.obj
            ? `${message} | data:${JSON.stringify(info.obj)}`
            : message;
          message = this.log_data
            ? `${message} | log_data:${JSON.stringify(this.log_data)}`
            : message;
          return message;
        }),
      ),
    });
  }

  setLogData(log_data: any) {
    this.log_data = log_data;
  }

  async info(message: string, obj?: any) {
    this.logger.log("info", message, {
      obj,
    });
  }

  async debug(message: string, obj?: any) {
    this.logger.log("debug", message, {
      obj,
    });
  }

  async warn(message: string, obj?: any) {
    this.logger.log("warn", message, {
      obj,
    });
  }

  async error(text: string, error: any, additionalData?: any) {
    let message = error;
    // Error-like
    if (error && error.message && error.stack) {
      message = [error.message, "---", JSON.stringify(error.stack)].join("\n");
    }

    if (typeof message !== "string") {
      message = JSON.stringify(error);
    }

    if (additionalData) {
      message = [message, "---", JSON.stringify(additionalData)].join("\n");
    }
    return this.logger.error([text, "###", message, "###"].join("\n"));
  }
}

export default Logger;
