export const join = (req,res) => res.send("Join")
export const login = (req, res) => res.send("Login")
export const edit = (req,res) => res.send("Edit Profile");
export const see = (req,res) => {
    res.send(`See User #${req.params.id}`);
}