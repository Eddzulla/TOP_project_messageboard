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

indexRouter.get("/", (req, res) => {
   
    res.render("index", {messages : messages});
})

indexRouter.get("/new", (req, res) => {
    res.render("new_message", {});
})
// routes here


module.exports = indexRouter;