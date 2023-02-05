const {Router}= require("express");

const {addProductsinCart, /* getProductsinCart, */ getCart } = require("../controllers/cart.controller");
 const authMiddleware = require("../middlewares/auth.middleware");

const router= Router();
/**
 * @openapi
 * /ecommerce/cart/addproduct/{id}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: please send a token to  add a product in cart into application
 *     tags: [Cart]
 *     requestBody:
 *       description: Required fields to add a product in cart
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/addproduct'
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
 *                   example: product added
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
 * /ecommerce/cart/getcartbyuser/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get cart from user
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user id
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
 *         description: unauthorized error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: unauthorized error or data missing
 */
router.post("/addproduct/:id",authMiddleware, addProductsinCart);
router.get("/getcartbyuser/:id",authMiddleware, getCart);

module.exports= router;
