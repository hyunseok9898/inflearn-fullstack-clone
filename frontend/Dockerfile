FROM node:20-alpine

RUN apk add --no-cache openssl && \
    ln -s /usr/lib/libssl.so.3 /usr/lib/libssl.so.1.1 && \
    ln -s /usr/lib/libcrypto.so.3 /usr/lib/libcrypto.so.1.1

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