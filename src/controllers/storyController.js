

export const home = (req,res) => res.send("Home stories");
export const trending = (req,res) => res.send("Trending stories");
export const newest = (req, res) => res.send("The Newest stories");

export const see = (req, res) => {
    res.send(`See story #${req.params.id}`);
} 

export const edit = (req, res) => {
    res.send(`Edit a story #${req.params.id}`);
}

export const deleteStory = (req, res) => {
    res.send(`Delete Story #${req.params.id}`);
}