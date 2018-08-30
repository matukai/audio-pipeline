module.exports = {
  isAuthenticated
}

function isAuthenticated (req,res,next) {
  if (req.isAuthenticated()) {
    next();
  }else {
    res.redirect('/');
  }
}
