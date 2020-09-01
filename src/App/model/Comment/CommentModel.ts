import { model, Schema, Document } from 'mongoose';

export interface ICommentModel extends Document {
  name: string;
  description: string;
  rating: number;
  recommend: boolean;
}

const CommentModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  rating: {
    type: Number,
    required: true,
  },
  recommend: {
    type: Boolean,
    required: true,
  },
  product_id: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
});

export default model<ICommentModel>('Comment', CommentModel);
