const { Router } = require('express');

const path = require('path');
const indexRouter = Router();

let messages = [
    {
        text: "Hi there",
        user: "Amando",
        added: new Date().toLocaleString()
    },
    {
        text: "Hello world",
        user: "Charles",
        added: new Date().toLocaleString()
    }
];

const links = [
    {"name": "Home", "href" : "/"},
    {"name": "Post", "href": "/new"},
    ];

indexRouter.get("/", (req, res) => {
    res.render("index", {messages : messages, links: links});
})

indexRouter.get("/new", (req, res) => {
    res.render("form", {links: links});
})

indexRouter.post("/new", (req, res) => {
    console.log(req.body.name);
    
    messages.push({
        text: req.body.msg,
        user: req.body.name,
        added: new Date().toLocaleString(),
    });
    res.redirect("/");
});

indexRouter.get("/msg/:id", (req,res) => {
    const { id } = req.params;
    const message = messages[id];

    res.render("msg", {links: links, message: message});

});



module.exports = indexRouter;