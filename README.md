# node-express-micro-starter

## Purpose
node + express **_starter kit_** for developing microservice node js applications.

## Environment 
- node v12.3.1 +
- express v4.17.1 +

## Quickstart

##### On initial start up
```
$ npm i
$ npm run dev
```
##### dev start up
This command will start the application in dev mode
```
$ npm run dev
```
##### all scripts
This command will run lint, test, and outdated scripts found in package.json
```
$ npm run all
```

## "Out-of-the-box" Features
- Express is hooked-up and config
- Dockerfile
- Logging
- Unit testing framework

## Add on's

#### HTTPS server
To use and HTTPS server:

- Run the the following commands
```
openssl genrsa -out key.pem 2048
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
```

- Add the following imports to bin/www:

```
const https = require('https')
var fs = require('fs');
const path = require("path");
```
- Create a dict in bin/www with the key and cert pems created before like so:

```
var httpsOptions = {
  key: fs.readFileSync(path.resolve(__dirname,'../key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname,'../cert.pem'))
};
```

- Replace the http server creation line with https server creation code
```
var server = http.createServer(app)
```
becomes
```
var server = https.createServer(httpsOptions,app)
```
#### AWS Quick Start
- To-do
#### Azure Quick Start
- To-do
#### Google Quick Start
- To-do

