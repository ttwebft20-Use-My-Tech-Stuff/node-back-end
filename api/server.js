const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// Routers
const authRouter = require("./auth/auth-router.js");

server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
    res.json({
        api: "Up and running!"
    });
});

server.use((err, req, res, next) => {
    return res.status(500).json({
        error: "Communication problem with the server",
        message: err.message
    });
});

module.exports = server;