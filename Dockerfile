FROM mhart/alpine-node

EXPOSE 3000

WORKDIR /app
ADD . /app

RUN npm i
RUN npm run build

COPY ./src/google95ece5387926d5e6.html /app/build/public

CMD ["node", "build/bundle.js"]
