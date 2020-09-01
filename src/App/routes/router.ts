import { Router } from 'express';
import ProductContoller from '@App/controller/Product/ProductContoller';
import CommentController from '@App/controller/Comment/CommentController';

const router: Router = Router();

router.get('/healthcheck', (req, res) => {
  res.status(200).json({ message: 'OK' });
});

/* 
    Create, Read, Update, Delete [# Products #]
*/
router.post('/product', ProductContoller.Create);
router.get('/product', ProductContoller.Read);
router.put('/product/:id/update', ProductContoller.Update);
router.delete('/product/:id/delete', ProductContoller.Delete);

/* 
    Create, Read, Update, Delete [# Comments #]
*/
router.post('/product/:id/comment', CommentController.Create);
router.get('/product/:id/comment', CommentController.Read);
router.put('/product/:id/comment/:id/update', CommentController.Read);
router.delete('/product/:id/comment/:id/delete', CommentController.Read);

export default router;
