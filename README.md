# lb-third-party-login-cyber

PoC for setting up a React application using a LoopBack. LoopBack API can allow users to login using existing accounts on Deloitte Azure AD, Facebook and Google. 
The application is using React library v16.2.0 and LoopBack 3.x framework.

## Installation on localhost

..* Clone this repository

```
$ git clone
```

..* Install dependencies specified in package.json

```
$ npm install
```

..* Run the server

```
$ npm start
```

## Application boot

By default the application is listening on port 3000.
App : http://localhost3000 
LoopBack explorer : http://localhost:3000/explorer

## Compile React client_src

From the "client_src" folder run

```
$ npm run build
```

## loopback-passport module

This project followed a tutorial for using loopback-passport module : https://github.com/strongloop/loopback-example-passport