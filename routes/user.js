const router = require("express").Router();
const {
  registerUser,
  loginUser,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

router.post("/register", registerUser);
router.post('/login', loginUser);
router.get('/current', currentUser)
// router.get("/:userId", getUser);
// router.post("/", createUser);
// router.put("/:userId", updateUser);
// router.delete("/:userId", deleteUser);

module.exports = router;
