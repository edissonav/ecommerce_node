const {Router}= require("express");
const { addProductsinOrder, getorderwithproducts, purchaseorder } = require("../controllers/order.controller");
const authMiddleware = require("../middlewares/auth.middleware");




const router= Router();
/**
 * @openapi
 * /ecommerce/orders/addproductstoorderbyuser/{id}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: please send a token to add products from cart into order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: userId
 *     requestBody:
 *       description: Required fields to add a product into order
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/addproducttoorder'
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
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: error
 * /ecommerce/orders/getproductsinorderbyuser/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get order from user, please send a token
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: userId
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
 * /ecommerce/orders/purchase:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: please send a token to purchase
 *     tags: [Orders]
 *     requestBody:
 *       description: Required fields to add a product into order
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/purchase'
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
 *                   example: purchased
 *       400:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: error
 */
router.post("/addproductstoorderbyuser/:id", authMiddleware,addProductsinOrder);

router.get("/getproductsinorderbyuser/:id",authMiddleware, getorderwithproducts);

router.post("/purchase",authMiddleware, purchaseorder); 


module.exports= router;
