FROM node:16.14.2-alpine3.15

RUN apk add --no-cache libc6-compat

RUN npm i -g npm
RUN npx husky install

ENV ENV_FILE qa
ENV PORT 3000

EXPOSE 3000

WORKDIR /home/nextjs/app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY package.json .
COPY package-lock.json .

RUN chown -R nextjs:nodejs /home/nextjs

USER nextjs

RUN npm install --force --no-optional 
RUN npm install --force -D @swc/cli @swc/core

RUN npx --force browserslist@latest --update-db
RUN npx next telemetry disable

COPY --chown=nextjs:nodejs . .

RUN npm run copy:env -- ${ENV_FILE}
RUN npm run build-prod

CMD [ "npm", "start" ]
