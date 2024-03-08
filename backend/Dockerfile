FROM node:20.11.1-alpine3.18 AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --ignore-scripts

FROM node:20.11.1-alpine3.18 AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn generate:prisma && yarn build && yarn install --production --prefer-offline --ignore-scripts

FROM node:20.11.1-alpine3.18 AS runner
RUN apk add dumb-init
WORKDIR /app
ENV NODE_ENV production

RUN addgroup -g 1001 appgroup
RUN adduser -D -u 1001 appuser -G appgroup
RUN chown -R appuser:appgroup /app
USER appuser
COPY --from=builder --chown=appuser:appgroup /app/package.json ./
COPY --from=builder --chown=appuser:appgroup /app/dist ./dist
COPY --from=builder --chown=appuser:appgroup /app/node_modules ./node_modules
COPY --from=builder --chown=appuser:appgroup /app/prisma ./prisma

CMD [ "dumb-init", "node", "dist/server.js" ]