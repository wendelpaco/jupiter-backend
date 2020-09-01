interface MongoDBConfnig {
  UrlConnection: string;
  ApiKey: string;
  Port: string;
}

interface MongoConfig {
  MongoDB: MongoDBConfnig;
  Token: MongoDBConfnig;
  Server: MongoDBConfnig;
}

export default {
  MongoDB: {
    UrlConnection: process.env.MONGODB_URL,
  },
  Token: {
    ApiKey: process.env.TOKEN_APIKEY,
  },
  Server: {
    Port: process.env.PORT,
  },
} as MongoConfig;
