export const join = (req,res) => res.send("Join")
export const login = (req, res) => res.send("Login")
export const editProfile = (req,res) => res.send("Edit Profile");
export const seeUsers = (req,res) => res.send("Users");
export const seeUser= (req,res) => {
    res.send(`See User #${req.params.id}`);
}