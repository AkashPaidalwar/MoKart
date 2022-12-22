const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        color: {
          type: String,
        },
        size: {
          type: String,
        },
        price: {
          type: Number,
        },
        productName: {
          type: String,
        },
        image: {
          type: String,
        },
        userId: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
