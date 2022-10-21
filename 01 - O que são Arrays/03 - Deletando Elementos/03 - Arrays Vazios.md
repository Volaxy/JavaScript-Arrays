Ao declarar um array sem nenhum valor na lista:

```javascript
const arrayVazia = [];

console.log(arrayVazia)
console.log(arrayVazia.length)
```

Executando este código com `node script.js` o resultado é:

```javascript
[]
0
```

No exemplo acima, podemos ver que o JavaScript criou o array e a guardou na variável `arrayVazia`, mas seu `length` é 0.

Vamos então ver o que acontece se usarmos a notação de colchetes para tentar acessar o índice 0 do array (lembrando que o índice zero se refere à primeira posição):

```javascript
const arrayVazia = [];
console.log(arrayVazia[0])
```

Desta vez, o resultado é:

```javascript
undefined
```

Vamos executar mais um teste e ver o que acontece:

```javascript
const arrayVazia = [,,,];
console.log(arrayVazia.length)
console.log(arrayVazia[0])
console.log(arrayVazia[1])
console.log(arrayVazia[2])
```

O resultado é:

```javascript
3
undefined
undefined
undefined
```

Criamos um array com 3 posições, porém em nenhuma dessas posições existe um valor. De certa forma, podemos pensar que este array foi criado como um gaveteiro com três gavetas e todas elas estão “vazias”, sem nenhum valor de dado guardado.

Para finalizar, faça um último teste. Vamos usar o método `push()` visto anteriormente para adicionar um valor - lembrando que este método sempre vai adicionar o valor no final do array!

```javascript
const arrayVazia = [,,,];
console.log(arrayVazia.length)
arrayVazia.push(50)
console.log(arrayVazia)
console.log(arrayVazia.length)
```

O resultado foi:

```javascript
3
[ <3 empty items>, 50 ]
4
```
O JavaScript manteve as posições vazias e adicionou o `50` ao final do array. Após a execução, ele passou a ter 4 posições, mas somente um elemento (o número `50`). Chamamos este tipo de estrutura de **array esparso** e é importante lembrar deste comportamento dos arrays em JavaScript enquanto trabalhamos.