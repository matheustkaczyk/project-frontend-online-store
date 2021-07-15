import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductReview from './ProductReview';

export default class Infos extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {},
      loaded: false,
    };

    this.createProduct = this.createProduct.bind(this);
    this.finishedLoading = this.finishedLoading.bind(this);
  }

  componentDidMount() {
    this.createProduct();
  }

  // Faz a chamada da API passando os parametros, e com o find encontra o elemento com o id utilizado.
  async createProduct() {
    const { match } = this.props;
    const { params } = match;
    const { category, id, product } = params;
    const data = await getProductsFromCategoryAndQuery(category, product);
    const result = data.results.find((item) => item.id === id);
    this.setState({
      product: result,
    }, () => this.finishedLoading());
  }

  finishedLoading() {
    this.setState({
      loaded: true,
    });
  }

  render() {
    const { count } = this.props;
    const { product, loaded } = this.state;
    const { shipping } = product;
    const { addToCartItem } = this.props;
    // Mostra o elemento h1 dizendo loading caso não tenha carregado a página ainda.
    if (!loaded) {
      return (
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1
            .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607
            1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5
            12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7
            1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              />
            </svg>
            <span data-testid="shopping-cart-size">{`${count}`}</span>
          </div>
          <h1>Loading</h1>
        </div>
      );
    }
    return (
      <div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1
            .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607
            1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5
            12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7
            1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            />
          </svg>
          <span data-testid="shopping-cart-size">{`${count}`}</span>
        </div>
        <h2 data-testid="product-detail-name">{product.title}</h2>
        <h3>{`R$ ${product.price}`}</h3>
        { shipping.free_shipping && <img data-testid="free-shipping" src="https://cdn.awsli.com.br/511/511886/arquivos/frete-gratis-1.png" alt="Frete Gratis" width="100px" /> }

        <div>
          <img src={ product.thumbnail } alt="thumbnail" />
          <div>
            <h4>Especificações Técnicas</h4>
            <ul>
              { product.attributes
                .map((item, index) => (
                  <p key={ index }>{`${item.name}: ${item.value_name}`}</p>)) }
            </ul>
            <div>
              <button
                type="button"
                data-testid="product-detail-add-to-cart"
                onClick={ () => addToCartItem(product) }
              >
                Adicionar ao carrinho
              </button>
            </div>
            <Link data-testid="shopping-cart-button" to="/cart">Ir para o carrinho</Link>
          </div>
        </div>
        <ProductReview />
      </div>
    );
  }
}

Infos.propTypes = {
  addToCartItem: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string,
      id: PropTypes.string,
      product: PropTypes.string,
    }),
  }).isRequired,
};

Infos.propTypes = {
  count: PropTypes.number.isRequired,
};
