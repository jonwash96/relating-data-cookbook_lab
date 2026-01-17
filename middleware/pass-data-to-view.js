const passDataToView = (req,res,next) => {
    res.locals.user = req.session.user ? req.session.user : null;

    res.locals.recipes = req.session.recipes ? req.session.recipes : null

    res.locals.ingredients = req.session.ingredients ? req.session.ingredients : null
    
    res.locals.message = req.session.message ? req.session.message : null;
        req.session.message && (req.session.message = null);

    res.locals.data = req.session.data ? req.session.data : null;
        req.session.data && (req.session.data = null);

    next();
}

module.exports = passDataToView;