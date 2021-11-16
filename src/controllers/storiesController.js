

export const home = (req,res) => res.render("home",{pageTitle:"Home"});
export const trending = (req,res) => res.render("trending",{pageTitle:"Trending"});
export const newStories = (req, res) => res.render("newStory",{pageTitle:"New Story"});

export const seeStory = (req, res) => {
    const id = req.params.id;
    res.render("watch", {pageTitle:"See story", id});
} 

export const editStory = (req, res) => {
    const id = req.params.id;
    res.render("editStory", {pageTitle:"Edit story", id});
}

export const deleteStory = (req, res) => {
    const id = req.params.id;
    res.render("deleteStory", {pageTitle:"Delete story", id});
}