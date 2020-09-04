import { Request, Response } from 'express';
import ProductModel, { IProductModel } from '@App/model/Product/ProductModel';

class ProductContoller {
  public async Create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, description, pricing, url_image, tags } = req.body;
      const product: IProductModel = new ProductModel({
        name,
        description,
        pricing,
        url_image,
        tags,
      });
      await product.save();
      return res.status(201).send();
    } catch (err) {
      return res.status(500).json({
        message: 'Ops!!! Eu acho que ocorreu alguma coisa 💩',
      });
    }
  }
  public async Read(req: Request, res: Response): Promise<Response> {
    try {
      const { tags } = req.headers;

      if (tags) {
        const product = await ProductModel.find({ tags });
        return res.status(200).json({ product });
      }
      const product = await ProductModel.find();
      return res.status(200).json({ product });
    } catch (err) {
      return res.status(500).json({
        message: 'Ops!!! Eu acho que ocorreu alguma coisa 💩',
      });
    }
  }
  public async Update(req: Request, res: Response): Promise<Response> {
    try {
      const product = await ProductModel.findOne().where({
        _id: req.params.id,
      });
      if (!product?._id)
        return res.status(404).json({
          message: 'Produto não encontrado no sistema 💔',
        });
      await ProductModel.findByIdAndUpdate(
        product._id,
        { $set: req.body },
        { new: true }
      );
      return res.status(200).json({
        message: `Produto ${req.body.name} atualizado com sucesso! 👌`,
      });
    } catch (err) {
      return res.status(500).json({
        message: 'Ops!!! Eu acho que ocorreu alguma coisa 💩',
      });
    }
  }
  public async Delete(req: Request, res: Response): Promise<Response> {
    try {
      const product = await ProductModel.findOne().where({
        _id: req.params.id,
      });
      if (!product?._id)
        return res.status(404).json({
          message: 'Produto não encontrado no sistema 💔',
        });
      await ProductModel.findByIdAndDelete(product);
      return res.status(200).json({
        messasge: `Produto ${product.name} foi excluído do sistema 😭😭😭`,
      });
    } catch (e) {
      return res.status(500).json({
        message: 'Ops!!! Eu acho que ocorreu alguma coisa 💩',
      });
    }
  }
}
export default new ProductContoller();
