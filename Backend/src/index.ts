import express, { Application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth';

const app: Application = express();
const port: number = 3000;

app.use(cors());

app.use(express.json());
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});

mongoose.connect('mongodb+srv://ayushsanjayrawal:sSl8nGjVuWdQBprk@cluster0.fgu9moe.mongodb.net/', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() => { 
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});













