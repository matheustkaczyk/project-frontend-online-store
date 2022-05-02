Projeto desenvolvido durante o curso de desenvolvimento de software na Trybe. O objetivo do projeto foi em equipes, desenvolver uma landing page de uma loja, consumindo a API do mercado livre. Teve muito o foco também em botar em prática metodologias ágeis, como o Scrum e o Kanban.

Data de entrega: 15/07/2021

# Habilidades
* Entender o que são Métodos Ágeis
* Entender o que é Kanban
* Entender o que é Scrum
* Trabalhar em equipes utilizando Kanban ou Scrum de maneira eficaz

## Lista de requisitos
---
#### 1. Implemente o módulo de acesso à api do Mercado Livre

Implemente um módulo que acessa a API do Mercado Livre

#### 2. Crie uma página de listagem de produtos vazia

Criar o campo de busca da tela principal, a listagem de produtos, inicialmente vazia. A listagem vazia deve conter a mensagem "Digite algum termo de pesquisa ou escolha uma categoria".

#### 3. Crie a página do carrinho de compras

Criar o botão de carrinho de compras na tela principal, de listagem de produtos, e criar uma tela para o carrinho de compras, inicialmente vazio.

#### 4. Liste as categorias de produtos disponíveis via API na página principal

Listar filtros de categoria obtidos da API na tela principal, de listagem do produto. A requisição da API para recuperar as categorias deve ser feita uma única vez após o carregamento da tela.

#### 5. Liste os produtos buscados por termos, com os dados resumidos, associados a esses termos

Criar a listagem de produtos. Fazer a exibição resumida do produto (o "card" que aparece na listagem). A exibição deve ter título, foto e preço. Fazer requisição à API do Mercado Livre enviando os termos buscados por quem usa e usar o retorno para fazer a listagem dos produtos. Se a busca não retornar resultados, gerar a tela correspondente com o texto "Nenhum produto foi encontrado".

#### 6. Selecione uma categoria e mostre somente os produtos daquela categoria

Como pessoa usuária, eu quero clicar em uma categoria e ver a listagem de produtos ser filtrada de  acordo com os produtos daquela categoria.

#### 7. Redirecione para uma tela com a exibição detalhada ao clicar na exibição resumida de um produto

Como pessoa usuária, eu quero clicar no card do produto e visualizar a exibição detalhada do produto com nome do produto, imagem, preço e especificação técnica. A tela também deve possuir um botão que leve ao carrinho de compras.

#### 8. Adicione produtos a partir da tela de listagem de produtos

Na tela de listagem de produtos, permitir adicionar o produto ao carrinho.

#### 9. Adicione um produto ao carrinho a partir de sua tela de exibição detalhada

Na tela de exibição detalhada do produto, permitir adicionar o produto ao carrinho.

#### 10. Visualize a lista de produtos adicionados ao carrinho em sua página e permita a manipulação da sua quantidade

Adicionar lista de produtos ao carrinho, com valor total ao final. Criar botões (-) e (+) para cada produto do carrinho, permitindo alterar a quantidade desejada de cada produto. A quantidade não pode ser negativa. Criar também botão (X) para remover produtos do carrinho e botão para finalizar a compra.

#### 11. Avalie e comente acerca de um produto em sua tela de exibição detalhada

Adicionar formulário ao produto, em sua exibição detalhada, para permitir adicionar avaliações com nota de 1 a 5 estrelas e comentários (o comentário deve ser opcional, sendo possível enviar apenas a nota). Exibir a lista de avaliações já feitas. Se quem usa sai e volta da tela, a nota e as avaliações não devem ser apagadas.

#### 12. Finalize a compra vendo um resumo dela, preenchendo os seus dados e escolhendo a forma de pagamento

Implementar tela para a finalização da compra. A tela deve conter uma seção para revisão dos produtos com o valor total da compra, um formulário para ter as informações do comprador e um a seção para escolher o método de pagamento. Ao se clicar em "Comprar", deve-se validar que o formulário está preenchido e que a forma de pagamento foi escolhida e, em caso positivo, deve-se zerar o estado, redirecionar para a tela inicial (listagem de produtos). Caso algo não tenha sido preenchido, mantém-se na mesma tela com o dados sem apagar e destaca-se os campos não preenchidos em vermelho.

### Bônus

#### 13. Mostre junto ao ícone do carrinho a quantidade de produtos dentro dele, em todas as telas em que ele aparece

Adicionar ao ícone do carrinho, em todas as telas em que ele aparece, um número com a quantidade de produtos adicionados.

#### 14. Limite a quantidade de produtos adicionados ao carrinho pela quantidade disponível em estoque
Adicionar quantidade disponível do produto (disponível via chamada da API na chave "available_quantity") e limitar a compra de acordo com a quantidade em estoque. Desabilite os botões de (+) daquele produto na aplicação ao se alcançar a quantidade máxima dele no estoque.

#### 15. Mostre quais produtos tem o frete grátis

Adicionar indicador de frete grátis à exibição resumida e detalhada do produto.
