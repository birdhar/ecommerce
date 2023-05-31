import express from "express";
import { userSignup, userLogin } from "../controller/userController.js";
import {
  getProducts,
  getProductById,
} from "../controller/productController.js";
import {
  addPaymentGateway,
  paymentResponse,
} from "../controller/paymentController/paymentController.js";
const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/products", getProducts);
router.get("/product/:pid", getProductById);
router.post("/payment", addPaymentGateway);
router.post("/callback", paymentResponse);

export default router;
