import express, { Express } from "express";
import * as CastService from '../services/CastService';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("casts");
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    CastService.getCastByID(parseInt(id))
    res.send("casts");
});

router.post("/", (req, res) => {
    
    res.send("casts created");
});

router.put("/:id", (req, res) => {
    res.send("casts created");
});

router.delete("/:id", (req, res) => {
    res.send("casts created");
});