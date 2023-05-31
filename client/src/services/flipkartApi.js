import React from "react";
import axios from "axios";
import { baseUrl } from "./BaseUrl";

export const authSignUp = async (data) => {
  try {
    return await axios.post(`${baseUrl}/signup`, data);
  } catch (error) {
    console.log("Error while signing up", error);
  }
};

export const authLogin = async (data) => {
  try {
    return await axios.post(`${baseUrl}/login`, data);
  } catch (error) {
    console.log("Error while loging in", error);
    return error.response;
  }
};

export const payUsingPaytm = async (data) => {
  try {
    let response = await axios.post(`${baseUrl}/payment`, data);
    return response.data;
  } catch (error) {
    console.log("Error while payment", error);
    return error.response;
  }
};
