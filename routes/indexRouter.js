const { Router } = require('express');

const path = require('path');
const indexRouter = Router();

let messages = [
    {
        text: "Hi there",
        user: "Amando",
        added: new Date()
    },
    {
        test: "Hello world",
        user: "Charles",
        added: new Date()
    }
];

indexRouter.get("/", (req, res) => {
    res.render("index", {});
})

indexRouter.get("/new", (req, res) => {
    res.render("new_message", {});
})
// routes here


module.exports = indexRouter;