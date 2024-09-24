const express = require("express");
const router = express.Router();

const addUser = require("../controllers/user/addUser");
const getUser = require("../controllers/user/getUser");
const updateUser = require("../controllers/user/updateUser");
const deleteUser = require("../controllers/user/deleteUser");
const getAllUsers = require("../controllers/user/getAllUsers");

router.post("/user/", addUser);
router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.get("/users", getAllUsers);

module.exports = router;
