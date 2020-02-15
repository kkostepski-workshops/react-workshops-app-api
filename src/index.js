import express from 'express';
import bodyParser from 'body-parser';

import connectToDB from './connectToDB';
import routes from './routes';

connectToDB();

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use('/api', routes);
app.get('/', (req, res) => res.send('React workshops API'));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Running React workshops API on port ${port}`);
});
