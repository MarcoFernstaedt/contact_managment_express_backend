const router = require("express").Router();
const {
  registerUser,
  loginUser,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const validateToken = require("../middleware/validateToken");

router.post("/register", registerUser);
router.post('/login', loginUser);
router.get('/current', validateToken,currentUser)
// router.get("/:userId", getUser);
// router.post("/", createUser);
// router.put("/:userId", updateUser);
// router.delete("/:userId", deleteUser);

module.exports = router;
