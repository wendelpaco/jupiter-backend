const API = {
  JupiterAPI: {
    Version: '1.0.1',
    Repository: 'https://github.com/wendelpaco/jupiter.git',
    Author: 'Wendel Paco',
  },

  EndPoint: 'https://jupiter-backend.herokuapp.com/',
  Routes: {
    GET: {
      '/healthcheck': 'Route para verificar o estado da API @@@@@',
      '/product': 'Route para listar os produtos cadastrados',
      '/product/:id/comment':
        'Route para listar os dados e os comentários do produto passado no params (:id)',
    },
    POST: {
      '/product': 'Route para cadastrar novos produtos',
      '/product/:id/comment':
        'Route para cadastrar comentários do produto passado no params (:id)',
    },
    PUT: {
      '/product/:id/update':
        'Route para atualiza o cadastro do produto passado no params (:id)',
      '/product/:id/comment/:id/update':
        'Route para atualizar o comentário do produto passado no params (:id) junto com o (:id) do comentário',
    },
    DELETE: {
      '/product/:id/delete':
        'Route para excluir o produto passado no params (:id)',
      '/product/:id/comment/:id':
        'Route para exlcluir o comentário do produto passado no params (:id) junto com o (:id) do comentário',
    },
  },
  QueryString: {
    '/product?tags=':
      "Usada para fltrar por produtos que possem a tag informada. Ex: /product?tags='hamburguer'",
  },
};
export { API };
