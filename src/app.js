import express from 'express';
import 'dotenv/config';
import connectDb from './DB/connect.js';
import rootRoute from './routes/index.route.js';
import logger from 'morgan';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000

app.use(logger('dev'));
app.use(
	cors({
	  origin: '*',
	  allowedHeaders: 'Content-Type, Authorization',
	  methods: 'POST, GET, PUT, PATCH, DELETE',
	  credentials: true,
	})
  );

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api', rootRoute)


app.listen(PORT, async () => {
	console.log(`Server is running on port ${PORT}`);
	await connectDb();
  });