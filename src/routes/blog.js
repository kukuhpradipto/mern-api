const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const blogControllers = require("../controllers/blogControllers");

// [POST] : /v1/blog/post
// router untuk melakukan post data
router.post(
  "/post",
  [
    body("title")
      .isLength({ min: 4 })
      .withMessage("jumlah huruf yang ada masukan masih kurang "),
    body("body").isLength({ min: 10 }).withMessage("dibanyakin lagi ya"),
  ],
  blogControllers.createBlogPost
);

//router untuk mengambil data secar keseluruhan
router.get("/posts", blogControllers.getAllBlogPost);

//router untuk mengambil data sberdasarkan id
router.get("/post/:postId", blogControllers.getBlogPostById);

router.put(
  "/post/:postId",
  [
    body("title")
      .isLength({ min: 4 })
      .withMessage("jumlah huruf yang ada masukan masih kurang "),
    body("body").isLength({ min: 10 }).withMessage("dibanyakin lagi ya"),
  ],
  blogControllers.updateBlogPost
);

router.delete("/post/:postId", blogControllers.deleteBlogPost);

module.exports = router;
