import { ApolloServer , gql } from 'apollo-server'

const typeDefs = gql`
  scalar Date

  type Usuario {
    id: String!
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean!
  }

  type Produto {
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: Float
  }

  #Pontos de entrada da API!
  type Query {
    ola: String!
    horaAtual:Date!
    usuarioLogado: Usuario
    produtoEmDestaque: Produto
  }

`

const resolvers = {
  Usuario: {
    salario(usuario){
      return usuario.salario_real
    }
  },

  Produto: {
    precoComDesconto(produto){

      return produto.desconto ? (produto.preco * (1 - produto.desconto)) : produto.preco
    }
  },

  Query: {
    ola(){
      return 'Olá para você também'
    },

    horaAtual(){
      return new Date
    },

    produtoEmDestaque(){
      return {
        nome: 'Farinha',
        preco: 12.80,
        // desconto: 0.15
      }
    },

    usuarioLogado(){
      return {
        id: '1',
        nome: 'Bruno',
        email: 'teste@email.com',
        idade: 15,
        salario_real: 2400.23,
        vip: true
      }
    }
    
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => {
  console.log(`Executando na porta ${url}`)
})