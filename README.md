# Verificar se a linha digitada de um título como um boleto é válida

> Ao acessar a Home tem a opção de escolher entre boletos do tipo bancário ou do tipo concessionárias
 <img src="https://res.cloudinary.com/menozzi/image/upload/v1597262074/validarBoleto/Screen_Shot_2020-08-12_at_16.34.07_pzwjqo.png" width="300">
 
Ao selecionar um tipo de título, será possível digitar o seu respectivo número e fazer a validação.

<img src="https://res.cloudinary.com/menozzi/image/upload/v1597262098/validarBoleto/Screen_Shot_2020-08-12_at_16.35.41_l0ylkg.png" width="200">

É feita a validação dos digitos verificadores e é exibido:
 * número do código de barra com 44 digitos
 * data de vencimento do boleto
 * e o valor do boleto
 <img src="https://res.cloudinary.com/menozzi/image/upload/v1597262106/validarBoleto/Screen_Shot_2020-08-12_at_16.35.58_cjwgts.png" width="300">
 
## Construído com
    Node.js

Foi utilizada a documentação da FEBRABAN [Título bancário](https://www.bb.com.br/docs/pub/emp/mpe/espeboletobb.pdf) e [Título de concessionária](
https://cmsportal.febraban.org.br/Arquivos/documentos/PDF/Layout%20-%20C%C3%B3digo%20de%20Barras%20ATUALIZADO.pdf) para entendimento e estudo dos cálculos de como funcionam.

O vencimento de um boleto bancário corresponde ao número de dias decorridos entre a “data base” instituída pelo Banco Central do Brasil – BACEN e a “data de vencimento”. 
A “data base” instituída pelo BACEN é: 07/10/1997.

### :computer:   Para instalar e inicializar este projeto

```bash
# Clone esse repositório
$ git clone https://github.com/M3nozzi/challenge

# No terminal acesse o reposiório
$ cd challenge

# Instale as dependências
$ yarn install ou npm install

# Inicialize o server
$  yarn start ou npm start

# running on port 3334
Acesse no browser http://localhost:3334
```
