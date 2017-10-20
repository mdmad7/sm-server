import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';

import schema from './graphql/schema';

const server = express();
mongoose.Promise = global.Promise;

const start = async () => {
  const MONGO_URL = 'mongodb://localhost:27017/school-management-db';
  const db = await mongoose.connect(MONGO_URL, { useMongoClient: true });

  server.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({
      // context: { mongo },
      schema,
    }),
  );
  server.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql',
    }),
  );
  const PORT = 4000;
  server.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
  });
};

start();
