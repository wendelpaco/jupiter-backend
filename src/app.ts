import 'dotenv/config';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from '@App/routes/router';
import { API as Data } from '@config/ConfigurationAPI';
import { stringConnection } from '@database/index';

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(routes);
stringConnection;

app.get('/', (req: express.Request, res: express.Response) => {
  try {
    return res.status(200).json({
      Message: 'Seja Bem Vindo(a) JupiterAPI 👽',
      Data,
    });
  } catch (err) {
    return err.status(500).json({
      message: 'Ops!!! Eu acho que ocorreu alguma coisa 💩',
    });
  }
});

export default app;
