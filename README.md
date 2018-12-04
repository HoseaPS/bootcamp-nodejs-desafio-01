# Bootcamp NodeJS Desafio 1

Configure uma aplicação utilizando **ExpressJS, Nunjucks, EditorConfig e ESLint**.

## Rotas

- `/`: Rota inicial que renderiza uma página com um formulário com um único campo `age` que representa a idade do usuário;
- `/check`: Rota chamada pelo formulário da página inicial via método POST que checa se a idade do usuário é maior que 18 e o redireciona para a rota `/major`, caso contrário o redireciona para a rota `/minor`;
- `/major`: Rota que renderiza uma página com o texto: `Você é maior de idade e possui x anos`, onde `x` deve é o valor informado no input do formulário;
- `/minor`: Rota que renderiza uma página com o texto: `Você é menor de idade e possui x anos`, onde `x` é ser o valor informado no input do formulário;

## Middlewares

Há um middleware que é chamado nas rotas `/major` e `/minor` que checa se a informação de idade não está presente nos Query Params. Se essa informação não existir o usuário é redirecionado para a página inicial com o formulário, caso contrário o middleware apenas continua com o fluxo normal.
