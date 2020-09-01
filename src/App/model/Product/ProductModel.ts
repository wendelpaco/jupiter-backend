import { model, Schema, Document } from 'mongoose';

export interface IProductModel extends Document {
  name: string;
  description: string;
  pricing: number;
  url_image: string;
  tags: string[];
}

const ProductModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    pricing: {
      type: Number,
      required: true,
    },
    url_image: {
      type: String,
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export default model<IProductModel>('Product', ProductModel);
