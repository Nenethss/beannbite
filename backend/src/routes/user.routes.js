import express from "express";
import {
  getAllUsers,
  createNewUser,
  deleteUser,
  updateUser,
  loginUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/login", loginUser);
router.get("/", getAllUsers);
router.post("/", createNewUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;
