const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Get all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add sample products
router.get("/seed", async (req, res) => {
  await Product.deleteMany({});

  await Product.insertMany([
    {
      name: "Rice Bag (5kg)",
      price: 500,
      image: "images/rice.jpg",
      description: "Premium quality basmati rice",
    },
    {
      name: "Sugar (1kg)",
      price: 45,
      image: "images/sugar.jpg",
      description: "Refined white sugar",
    },
    {
      name: "Wheat Flour (5kg)",
      price: 250,
      image: "images/flour.jpg",
      description: "Fresh chakki atta",
    },
    {
      name: "Cooking Oil (1L)",
      price: 160,
      image: "images/oil.jpg",
      description: "Healthy refined oil",
    },
    {
      name: "Milk (1L)",
      price: 30,
      image: "images/milk.jpg",
      description: "Fresh dairy milk",
    },
    {
      name: "Tea Powder (500g)",
      price: 120,
      image: "images/tea-powder.jpg",
      description: "Strong and tasty tea",
    },
    {
      name: "Coffee (200g)",
      price: 180,
      image: "images/coffee.jpg",
      description: "Instant coffee powder",
    },
    {
      name: "Salt (1kg)",
      price: 20,
      image: "images/salt.jpg",
      description: "Iodized salt",
    },
    {
      name: "Biscuits Pack",
      price: 25,
      image: "images/biscuits.jpg",
      description: "Crunchy sweet biscuits",
    },
    {
      name: "Maggi Noodles",
      price: 14,
      image: "images/maggi.jpg",
      description: "2-minute noodles",
    },
    {
      name: "Toor Dal (1kg)",
      price: 110,
      image: "images/toor-dal.jpg",
      description: "Fresh toor dal",
    },
    {
      name: "Soap Bar",
      price: 35,
      image: "images/soap.jpg",
      description: "Bathing soap",
    },
  ]);

  res.send("Many Products Added Successfully!");
});
module.exports = router;
