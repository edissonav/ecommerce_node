const {Router} = require("express");

const {register, login} = require("../controllers/auth.controller");


const router = Router();

/**
 * @openapi
 * /ecommerce/auth/register:
 *   post:
 *     summary: to create a new user
 *     tags: [Auth]
 *     requestBody:
 *       description: Required fields to create a new user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/register'
 *     responses:
 *       201:
 *         decription: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user created
 *       400:
 *         description: validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: validation error
 * /ecommerce/auth/login:
 *   post:
 *     summary: login a new user into application
 *     tags: [Auth]
 *     requestBody:
 *       description: Required fields to login a user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/login'
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *             $ref: '#/components/schemas/loginResponse'
 *       400:
 *         description: user not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user not found / something wrong / not email o password provided
 */

router.post("/register", register);
router.post("/login", login);

module.exports= router;