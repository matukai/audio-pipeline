module.exports = {
  isAuthenticated
}

function isAuthenticated (req,res,next) {
  // console.log('iisssss', req,res,next)
  if (req.isAuthenticated()) {
    next();
  }else {
    res.redirect('/');
  }
}
