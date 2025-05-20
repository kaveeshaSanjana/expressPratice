import express from 'express';
import { userRouter } from './src/router/user.mjs';

const server = express();

// REQUIRED for req.body to work
server.use(express.json()); 

server.use("/api/user", userRouter);

server.listen(4000, () =>{
    console.log('Server is running on port 4000');
});