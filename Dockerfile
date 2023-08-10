#FROM node:16-alpine
#
#COPY . ./backend
#
#WORKDIR /backend
#
#
#RUN yarn install
#CMD ["yarn", "start"]
#EXPOSE 3000

FROM ubuntu

ADD https://www.nano-editor.org/dist/v7/nano-7.2.tar.gz .
RUN ls