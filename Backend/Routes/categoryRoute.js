const express = require('express');
const { categories, categoriesById, updateCategory, addNewCategory, deleteCategory } = require('../controllers/categoryController');
const router = express.Router();

router.get("/",categories)

router.get("/:categoryId",categoriesById)

router.post("/",addNewCategory)

router.patch("/:categoryId",updateCategory)

router.delete("/:categoryId",deleteCategory)

module.exports = router; 