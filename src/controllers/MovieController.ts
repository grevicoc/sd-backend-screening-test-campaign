import express, { Express } from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("movies");
});

router.post("/", (req, res) => {
    res.send("movies created");
});

router.put("/:id", (req, res) => {
    res.send("movies created");
});

router.delete("/:id", (req, res) => {
    res.send("movies created");
});