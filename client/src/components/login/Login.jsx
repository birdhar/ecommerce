import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import {
  Dialog,
  TextField,
  Box,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { signupSchema } from "../../validationSchema/signup";
import { authSignUp, authLogin } from "../../services/flipkartApi";
import { DataContext } from "../../context/DataProvider";

const Container = styled(Box)`
  height: 70vh;
  width: 90vh;
  display: flex;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 82.2%;
  width: 30%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #fff;
  }
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 500;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;

  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const Formwrapper = styled("form")({
  display: "flex",
  flexDirection: "column",
  padding: "25px 35px",
  flex: 1,
  " & > *": {
    marginTop: "20px",
  },
});

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 45px;
  border-radius: 2px;
`;

const RequestOtp = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 45px;
  border-radius: 2px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.5);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccountText = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #2874f0;
  cursor: pointer;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subheading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subheading: "Sign up with your mobile number to get started",
  },
};

function Login(props) {
  const [account, setAccount] = useState(accountInitialValues.login);
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const { open, onClose } = props;
  const { acccount, setAcccount } = useContext(DataContext);
  const initialValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  };

  const signUpUser = async (values, action) => {
    const response = await authSignUp(values);

    if (!response) {
      return;
      action.resetForm();
    }
    setAccount(accountInitialValues.signup);
    onClose();
    setAcccount(values.firstname);
  };

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        signUpUser(values, action);
      },
    });

  const onInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async () => {
    let response = await authLogin(loginData);

    if (response.status === 200) {
      setAcccount(response.data.data.firstname);
      onClose();
    } else {
      setError(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={() => {
        setAccount(accountInitialValues.signup);
        setError(false);
        onClose();
      }}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Container>
        <Image>
          <Typography variant="h5">{account.heading}</Typography>
          <Typography style={{ marginTop: "20px" }}>
            {account.subheading}
          </Typography>
        </Image>

        {account.view === "login" ? (
          <Wrapper>
            <TextField
              label="Enter Username"
              variant="standard"
              name="login"
              value={loginData.login}
              onChange={(e) => onInputChange(e)}
            />
            {error && <Error>Please enter valid username or password</Error>}
            <TextField
              label="Enter Password"
              variant="standard"
              name="password"
              value={loginData.password}
              onChange={(e) => onInputChange(e)}
            />

            <Text>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Text>
            <LoginButton onClick={loginUser}>Login</LoginButton>
            <Typography style={{ textAlign: "center" }}>Or</Typography>
            <RequestOtp>Request OTP</RequestOtp>
            <CreateAccountText
              onClick={() => setAccount(accountInitialValues.signup)}
            >
              New to Flipkart? Create New Account
            </CreateAccountText>
          </Wrapper>
        ) : (
          <Formwrapper onSubmit={handleSubmit}>
            <TextField
              label="Enter Firstname"
              name="firstname"
              variant="standard"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.firstname && touched.firstname}
              helperText={
                touched.firstname && errors.firstname ? errors.firstname : null
              }
            />
            <TextField
              label="Enter Lastname"
              name="lastname"
              variant="standard"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.lastname && touched.lastname}
              helperText={
                touched.lastname && errors.lastname ? errors.lastname : null
              }
            />
            <TextField
              label="Enter Username"
              name="username"
              variant="standard"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.username && touched.username}
              helperText={
                touched.username && errors.username ? errors.username : null
              }
            />
            <TextField
              label="Enter Email"
              name="email"
              variant="standard"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email}
              helperText={touched.email && errors.email ? errors.email : null}
            />
            <TextField
              label="Enter Phone"
              name="phone"
              variant="standard"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.phone && touched.phone}
              helperText={touched.phone && errors.phone ? errors.phone : null}
            />
            <TextField
              label="Enter Password"
              name="password"
              variant="standard"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password && touched.password}
              helperText={
                touched.password && errors.password ? errors.password : null
              }
            />

            <LoginButton type="submit">Continue</LoginButton>
          </Formwrapper>
        )}
      </Container>
    </Dialog>
  );
}

export default Login;
