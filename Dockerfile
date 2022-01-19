FROM node:14

COPY features ./features
COPY package.json .

RUN npm install --dev

CMD npm test
