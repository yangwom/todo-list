# Segundo projeto para a pratica de react:

## Explicação do projeto:

Neste projeto, começaremos a aplicar eventos e a utilizar `estados` com React.

Nele você irá criar uma lista de tarefas simples, mas que ajudará a deixar mais claro esses novos conceitos do react.

---

## Objetivos:

- Aplicar eventos em react.
- Entender o que é um estado e como aplicar em nossos projetos.

---

## Requisitos:

### 1: Crie um estado para armazenar as tarefas:

Crie um estado que será responsavel por armazenar as tarefas.

para facilitar o desenvolvimento, cada tarefa deve ser armazenada em um objeto com o seguinte formato:

```js
{
    id: "deve ser um numero aleatorio",
    title: "Texto da tarefa",
    isCompleted: "estado atual da tarefa"
}
```

```js
{
    id: 032133123,
    title: "Farofa é melhor que tutu",
    isCompleted: false,
}
```

## 2: Crie um estado para armazenar o texto que será inserido na tarefa:

Assim como no desafio anterior, usaremos um estado para armazenar o texto que será inserido, pois isso irá facilitar a manipulação do mesmo.

obs: o texto deve ser salvo em formato de string.

## 3: Crie a função que será responsavel por alterar o estado do texto:

Neste desafio, você deve criar uma função para inserir no estado do texto o que o usuario inserir no campo de input.

Dica: É possivel utilizarmos o evento `onChange` para inserirmos cada caractere digitado pelo usuario no estado.

## 4: Crie a função responsavel por inserir uma nova tarefa no estado de tasks:

Agora que você já consegue salvar o texto que precisa inserir na task, crie uma função que será responsavel por criar uma nova task com a estrutura que definimos acima e a insira no nosso estado de `tasks`.

## 5: Renderize as novas tarefas dentro da ul:

Estamos cada vez mais perto do fim deste projeto, para vermos nosso progresso, agora iremos inserir as novas tarefas dentro da ul, para isso utilize a sintaxe já aprendida no bloco 11 do course e insira os novos elementos na lista.

## 6: Marque uma tarefa como completa:

Agora que já temos novos elementos sendo inseridos na nossa lista, precisamos permitir que o usuario possa marcar as tarefas como concluidas.

> A estilização para isso já está criada com a classe `isCompleted`

Então precisaremos criar uma função para alterarmos a chave `isCompleted` que estamos salvando dentro do nosso objeto de tarefa.

Dica: Para inserir a classe com mais facilidade, é possivel utilizarmos o operador ternario. 

Dica 2: Para alterar a chave é necessario alterar todo o estado responsavel pelas tarefas.

Dica 2.2: HOFs são suas melhores amigas.

## 7: Deletando uma tarefa:

Para finalizarmos o projeto, é necessario que possamos deletar alguma tarefa que já foi inserida.

Então assim como no desafio anterior, crie uma função para que seja possivel deletar alguma tarefa já existente.

---

## Bônus:

## Salve sua lista de tarefas em localStorage:

Implemente uma função que permita que sua lista de tarefas seja salva em `localStorage`.

Não se esqueça que a lista deve ser salva quando você insere um elemento e quando você remove.




