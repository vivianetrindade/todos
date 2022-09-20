import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import todoRoutes from './routes/todos';
import { connectToDatabase } from './controllers/db';

const app = express();


app.use(cors());
app.use(bodyParser.json());


connectToDatabase()
  .then(() => {
    
    app.use('/todos', todoRoutes);
    app.listen(8080, () => console.log('connected') );
  })
  .catch((error: Error) =>{
    console.error('Database connection failed', error);
    process.exit();
  })



// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   res.status(500).json({ message: err.message});
// })



