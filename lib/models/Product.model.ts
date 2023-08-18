import mongoose, { Document, Schema, Model, model } from "mongoose";

export interface IProduct extends Document {
  name: string;
  image: string;
  description: string;
  price: number;

  sizes: {
    small: number;
    medium: number;
    large: number;
    extraLarge: number;
  };

  categories: "abayas" | "modest dresses";
  totalQuantity: number;

  calculateTotalQuantity(): void;
}

const productSchema: Schema<IProduct> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    sizes: {
      small: {
        type: Number,
        default: 0,
      },

      medium: {
        type: Number,
        default: 0,
      },

      large: {
        type: Number,
        default: 0,
      },

      extraLarge: {
        type: Number,
        default: 0,
      },
    },

    totalQuantity: {
      type: Number,
      default: 0,
    },

    categories: {
      type: String,
      enum: ["abayas", "modest dresses"],
      required: true,
    },
  },

  { timestamps: true }
);

productSchema.methods.calculateTotalQuantity = function (this: IProduct) {
  this.totalQuantity =
    this.sizes.small +
    this.sizes.medium +
    this.sizes.large +
    this.sizes.extraLarge;
};
productSchema.pre("save", function (next) {
  this.calculateTotalQuantity();
  next();
});

const Product: Model<IProduct> =
  mongoose.models.Product || model<IProduct>("Product", productSchema);

export default Product;
