import { Request, Response } from 'express';
import CommentModel, { ICommentModel } from '@App/model/Comment/CommentModel';

class CommentController {
  public async Create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, description, rating, recommend } = req.body;
      const comment: ICommentModel = new CommentModel({
        name,
        description,
        rating,
        recommend,
        product_id: req.params.id,
      });
      await comment.save();

      return res.status(201).send();
    } catch (err) {
      return res.status(500).json({
        message: 'Ops!!! Eu acho que ocorreu alguma coisa 💩',
      });
    }
  }
  public async Read(req: Request, res: Response): Promise<Response> {
    try {
      const comments = await CommentModel.find()
        .where({ product_id: req.params.id })
        .populate('product_id', 'name description pricing url_image tags');

      return res.status(200).json({ comments });
    } catch (err) {
      return res.status(500).json({
        message: 'Ops!!! Eu acho que ocorreu alguma coisa 💩',
      });
    }
  }
}
export default new CommentController();
