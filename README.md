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

>Cálculo do fator de vencimento em título bancário

O vencimento de um boleto bancário corresponde ao número de dias decorridos entre a “data base” instituída pelo Banco Central do Brasil – BACEN e a “data de vencimento”. 
A “data base” instituída pelo BACEN é: 07/10/1997, portanto, para calcular a data do vencimento, considerei o número de dias corridos entre a "data base" e o vencimento. Por exemplo a data de vencimento em 12/08/2020, teria um fator de vencimento 8345, representando essas diferenças entre a data informada e a "data base".

>Cálculo do DV em título bancário

Neste tipo de título existem 05 campos, nos quais cada um dos 03 primeiros são subdivididos por um "." entre eles, e cada um destes 03 primeiros campos possuem um DV, já o campo número 04 é composto de um algarismo que é um DV verificador "global", pois é o DV do código de barra, e o campo 05 é composto pelo fator de vencimento e o valor do documento.

A primeira parte da subdivisão dos 03 primeiros campos, isto é, a parte anterior ao "." é composta de 05 algarismos, já a segunda parte de cada um deles tem no campo 01 também 05 algarismos, e nos campos 2 e 3 esta segunda parte é composta de 06 algarismos. O campo 4 é composto por 01 algorismo (DV do código de barras) e o campo 5 é composto por 14 algarismos.

Para calcular o DV de cada campo, deve-se fazer o seguinte cálculo
*Utilizar os números 1 e 2 intercalados, e iniciar com o número 2, sendo esta sequencia da direita para a esquerda
*Multiplicar os números dos respectivos campos com os valores entre 1 e 2.
```bash
Campo 2: 40144.81606DV
         12121.21212 <----- inicia com 2 da direita para esquerda
         ------------
         4 0 1 8 4  16 1 12 0 12  <--- resultado da multiplicação
         
        *Os número maiores do que 9 deve ter os algarismos somados para reduzi-los a um algarismo.
        16 -> 1+6 = 7 ; 12 -> 1 + 2 = 3
         4 + 0 + 1 + 8 + 4  + 7 + 1  + 3  + 0 +3  
         
         31  <--- Total da adição
         
         Dividir o Total por 10 para obter o resto da divisão
         31 / 10 = 3, resto 1
         
         Subtrair o resto pela dezena imediatamente posterior do valor Total, como era 31, então será 40
        DV = 40 -1 => 39, e o último algarismo é o DV deste campo, no caso o número 9.

       Portanto o campo 2 do exemplo será 40144.816069
       
```
O código de barras possui ao todo 44 posições, isto inclui o DV, e para calcular o campo 4, DV global do código de barras,  deve-se considerar as 43 posições do código,da posição 1 a 4 e da posição 6 a 44
*Multiplicar cada algarismo com exceção da posição 5 ( que é o próprio DV a ser calculado) com pesos de 2 a 9;
*A sequencia inicia, assim como no cálculo anterior, da direita para esquerda, inicia-se com o número 2, na sequencia o 3 e assim sucessivamente;
*Os resultados devem ser somados;
* O Total da adição deve ser dividio por 11, para obter o resto;
* O resto da divisão deve ser subtraído de 11 para se obter o DV do código
* O DV não pode ser 0, então se o resultado final for 0, ou maior do que 9, será considerado o algarismo 1.

> Para o cálculo do título de Concessionárias modifica alguns detalhes, mas a lógica é a mesma, as documentações da FEBRABAN orientam com mais detalhes.


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
