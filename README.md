**Install Dependencies**\
npm init -y\
npm install typescript\
npx tsc --init\
npm install express @types/express\
npm install nodemon @types/nodemon\
npm install @aws-sdk/client-dynamodb\
npm install @aws-sdk/lib-dynamodb\
npm install --save-dev concurrently\
in package.json to run multiple command concurrently:\
  "scripts": {\
    "start": "concurrently \"npm run start:server\" \"npm run start:watch\"",\
    "start:server": "nodemon --watch 'src/**/*.ts' --exec ts-node src/app.ts",\
    "start:watch": "tsc --watch"
  }

**Start application**\
1. go to postman\
2. post to endpoint created in AWS\