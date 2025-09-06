const express = require('express');
const router = express.Router();
const {handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser, handleGetUserList} = require("../controllers/index.js")

router.get('/users',handleGetUserList)

//REST API

router.get('/api/users',handleGetAllUsers)

// :id this is for variable or dynamic. can be anything according to the user needs
router.route("/api/users/:id")
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)

router.post("/api/users", handleCreateNewUser)

module.exports = router;