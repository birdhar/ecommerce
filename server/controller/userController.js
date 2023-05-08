import User from "../model/user_schema.js";

export const userSignup = async (request, response) => {
  try {
    const existingUser = await User.findOne({
      username: request.body.username,
    });

    if (existingUser) {
      response.status(401).json({ message: "User already exists!" });
    }

    const user = request.body;
    const newUser = new User(user);
    await newUser.save();

    response.status(200).json({ message: user });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userLogin = async (request, response) => {
  try {
    const username = request.body.login;
    const password = request.body.password;

    let user = await User.findOne({
      username: username,
      password: password,
    });

    if (user) {
      return response
        .status(200)
        .json({ data: user, message: "logged in successfully" });
    } else {
      return response.status(401).json(` Log in unsuccessful`);
    }
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
// `${username} logged in successfully`
