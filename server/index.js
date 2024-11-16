const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./authRouter");
<<<<<<< HEAD
const PORT = process.env.PORT || 5002;
=======
const PORT = process.env.PORT || 5089;
>>>>>>> 21021add340308af98893f4c0d91a816204c166f

const app = express();

app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://stweeeezy:7aZUIwlDz9BAF4hg@cluster0.6j7h5.mongodb.net/todo_list?retryWrites=true&w=majority&appName=Cluster0`
    );
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
