const {Router}= require("express");

const {createProducts, getProducts}= require("../controllers/products.controller");
 const authMiddleware = require("../middlewares/auth.middleware");

const router= Router();
/**
 * @openapi
 * /ecommerce/products/create:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: please send a token to  create a product  into application
 *     tags: [Products]
 *     requestBody:
 *       description: Required fields to create a product
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createproduct'
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: product created
 *       400:
 *         description: creation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: creation error
 * /ecommerce/products:
 *   get:
 *     summary: Get products and username
 *     tags: [Products]
 *     requestBody:
 *       description: no Required fields to get products
 *       required: false
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     {}
 *       401:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: data missing
 */
router.post("/products/create", authMiddleware,createProducts);

router.get("/products", getProducts);

module.exports= router;