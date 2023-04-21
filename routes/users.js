const User = require("../models/User");
const router = require("express").Router();

//get all user
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Register
router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      desc: req.body.desc,
      profilePicture: req.body.dp,
      category: req.body.category,
      score: req.body.score,
    });

    //Save user and return response
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete user
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Update Score
router.post("/:id", async (req, res) => {
  try {
    const oldUser = await User.findById(req.params.id);
    const newScore = oldUser.score + req.body.val;
    const users = await User.findByIdAndUpdate(req.params.id, {
      score: newScore,
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update category
router.post("/update", async (req, res) => {
  try {
    const user = await User.findById(
      '6382067cf746e9e9b91feb66'
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post("/:id", async (req, res) => {
//   try {
//     const oldUser = User.findByIdAndUpdate(req.params.id, {
//       score: req.body.val,
//     });
//     res.status(200).json(oldUser);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// });

module.exports = router;
