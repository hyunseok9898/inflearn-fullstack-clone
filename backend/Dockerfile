FROM node:20-slim

RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

COPY prisma/schema.prisma ./prisma/

RUN pnpm install

COPY . .

RUN pnpm prisma generate

RUN pnpm run build

EXPOSE 8000

CMD ["node", "dist/src/main.js"]