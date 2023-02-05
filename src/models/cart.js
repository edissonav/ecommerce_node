const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return cart.init(sequelize, DataTypes);
}
/**
 * @openapi
 * components:
 *   schemas:
 *     addproduct:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           example: 3
 *         cartId:
 *           type: int
 *           example: 8
 *         productId:
 *           type: int
 *           example: 4
 *         quantity:
 *           type: int
 *           example: 4
 *         price:
 *           type: int
 *           example: 20
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5
 */
class cart extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    totalPrice: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cart',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cart_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
