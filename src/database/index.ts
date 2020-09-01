import { connect } from 'mongoose';
import config from '@config/mongoConfig';

export const stringConnection = connect(config.MongoDB.UrlConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .then((db) =>
    console.log(`⚡️ Database is listening on ${config.MongoDB.UrlConnection} `)
  )
  .catch((err) => console.log(err));
