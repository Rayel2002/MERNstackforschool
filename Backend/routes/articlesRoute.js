import express from 'express';
import { Article } from "../models/data.js";

const router = express.Router();

//Create function
router.post("/", async (req, res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.gradeOfImportance) {
        return res.status(400).send({
          message: "vul alle velden in",
        });
      }
      const newArticle = {
        title: req.body.title,
        author: req.body.author,
        gradeOfImportance: req.body.gradeOfImportance,
      };
      const article = await Article.create(newArticle);
      return res.status(201).send(article);
    } catch (error) {
      console.log(error);
    }
    res.status(500).send({ message: error.message });
  });
  
  //Read function
router.get("/", async (req, res) => {
    try {
      const articles = await Article.find({});
      return res.status(200).json({ count: articles.length, data: articles });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  
  //Detail function
router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const article = await Article.find({});
      return res.status(200).json(article);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  
  //update function
router.put("/:id", async (req, res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.gradeOfImportance) {
        return res.status(400).send({
          message: "vul alle velden in",
        })
      }
  
      const { id } = req.params;
      const result = await Article.findByIdAndUpdate(id, req.body);
      if(!result){
        return res.status(404).send({
          message: "Artikel niet gevonden",
        })
      }
      return res.status(200).send({
        message: "Artikel aangepast",
      })
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  
  //Delete function
router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Article.findByIdAndDelete(id);
      if(!result){
        return res.status(404).send({
          message: "Artikel niet gevonden",
        })
      }
      return res.status(200).send({
        message: "Artikel verwijderd",
      })
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  })
  

export default router