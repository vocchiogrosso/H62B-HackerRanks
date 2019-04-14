const Post = require('../database/models/Post')

module.exports = async (req, res) => {
  const posts = await Post.find({"verified": true}).populate('author');
  //console.log(req.session);
  res.render("index", {
    posts
  });
}