FROM node:20-alpine

RUN apk add --no-cache openssl

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

ENV NODE_ENV=production

ARG CLOUDFRONT_DOMAIN
ENV CLOUDFRONT_DOMAIN=$CLOUDFRONT_DOMAIN

RUN pnpm prisma generate

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "run", "start"]