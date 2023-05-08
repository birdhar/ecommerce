import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb+srv://birat8979:MaXT74Dykiba94nL@cluster0.k3pt1.mongodb.net/ecommerce?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Oops! Cannot connect to database", error.message);
  }
};

export default Connection;
