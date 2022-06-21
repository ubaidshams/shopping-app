const express = require("express");
const { getKidsProducts, getMensProducts, getWomensProducts, getBeatyProducts, findProduct } = require("../../Controller/ProductController");
const { getAllProducts } = require("../../Controller/ProductController");
const router = express.Router();

router.route("/allProduct").get(getAllProducts);
router.route("/allProduct/:id").get(findProduct);
router.route("/electronics").get();

router.route("/kids").get(getKidsProducts)
router.route("/mens").get(getMensProducts)
router.route("/women").get(getWomensProducts)
router.route("/beautyProducts").get(getBeatyProducts);

module.exports = router;