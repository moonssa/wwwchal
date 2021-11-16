export const join = (req,res) => res.render("join",{pageTitle:"Join"});
export const login = (req, res) => res.render("login",{pageTitle:"Login"});

export const editProfile = (req,res) => {
    res.render("userEdit", {pageTitle:"haha"});
}
export const seeUsers = (req,res) => res.render("users",{pageTitle:"Users"});
export const seeUser= (req,res) => {
    const id = req.params.id;
    res.render("user",{pageTitle:"User", id});
}