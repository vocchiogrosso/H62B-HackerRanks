const User = require('../database/models/User')
const path = require('path')

module.exports = (req, res) => {
  /*
    let image = req.files['uploads[]'];

    image.mv(path.resolve(__dirname, '..', 'public/posts', image.name), (error) => {
        Post.create({
          ...req.body,
          image: `/posts/${image.name}`,
          verified: false,
          author: req.session.userId
        }, (error, post) => {
          res.redirect("/");
        });
      })
*/
    User.create(req.body, (error, user) => {
        if(error){
            const registrationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('registrationErrors',registrationErrors)
            req.flash('data',req.body)
            return res.redirect("/auth/register")
        }
        res.redirect('/')
    })
}