## GET - pegar todos os utilizadores

/user/all

## POST - criar utilizadores, com os body-parametros[name, email]

/user/store

## GET - pequisar por filtros url-parametros[name, email]

/user/:name or
/user/:email or
/user/details/:id or
/user/:name/:email or

/user/filter?name=:name&&email==:email

## PUT - para atualizar utilizador body-paramentros[name, email] e url-parametros[id]

/user/:id

## DELETE - para deltar um utilizador url-parametro[id]

/user/:id

## NB: As Urls assim sao exemplos de como iremos trabalhar

<!-- ----------------------------------------------------------------------------------------------------------------- -->

<!-- User -->

## POST- Criar utilizador if(!promotor)=>body-parametro[Object{name,email,password,user_type};] else body-parametro[Object{name,email,password,user_type,nrBi,urlDocument,companyName,nuit}]

/user/create

## Nota Bem

<!-- Nota Bene:
Na pasta assets, existem dois arquivos:

Um arquivo para a collection do Thunder Client (que estamos a usar no VS Code).

Outro arquivo para a collection do Postman.

Ambas as collections contêm todos os endpoints já criados e testados, com o formato de objeto e os parâmetros que devem ser passados ao fazer requisições POST. -->
