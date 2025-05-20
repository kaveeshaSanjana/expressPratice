import { Router } from "express";
import { userDetails } from "./data/user-data.mjs";

export const userRouter = Router();

//get all users
userRouter.get('/all', (req, res) => {
    res.status(200).json(userDetails);
})

//get by id 
userRouter.get('/:id', (req, res) => {
    const userId = req.params.id;
    const user = userDetails.find(user => user.id === Number(userId));
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
})

//create user
userRouter.post('/create', (req, res) => {
    const newUser = req.body;
    userDetails.push(newUser);
    res.status(201).json({ message: "User created successfully", user: newUser });
})

//update user   
userRouter.put('/update/:id', (req, res) => {
    const userId = req.params.id;
    const userIndex = userDetails.findIndex(user => user.id === Number(userId));
    if (userIndex !== -1) {
        userDetails[userIndex] = { ...userDetails[userIndex], ...req.body };
        res.status(200).json({ message: "User updated successfully", user: userDetails[userIndex] });
    } else {
        res.status(404).json({ message: "User not found" });
    }
})

//delete user
userRouter.delete('/delete/:id', (req, res) => {
    const userId = req.params.id;
    const userIndex = userDetails.findIndex(user => user.id === Number(userId));
    if (userIndex !== -1) {
        userDetails.splice(userIndex, 1);
        res.status(200).json({ message: "User deleted successfully" });
    } else {
        res.status(404).json({ message: "User not found" });
    }
})