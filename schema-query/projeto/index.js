import { ApolloServer , gql } from 'apollo-server'

const usuarios = [{
  id: 1,
  nome: 'Maria',
  email: 'maria@email.com',
  idade: 20,
  },
  {
  id: 2,
  nome: 'Andreia',
  email: 'andreia@email.com',
  idade: 25,
},
{
  id: 3,
  nome: 'Bruno',
  email: 'bruno@email.com',
  idade: 29,
}
]

const perfis = [{id:1,nome:'Comum'},{id:2,nome:'Administrador'}]

const typeDefs = gql`
  scalar Date

  type Usuario {
    id: Int!
    nome: String!
    email: String!
    idade: Int!
    salario: Float
    vip: Boolean
  }

  type Perfil {
    id: Int!
    nome: String
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
    numerosMegaSena: [Int!]!
    usuarios: [Usuario]!
    usuario(id: Int): Usuario
    perfis:[Perfil]
    perfil(id: Int): Perfil
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
    },

    numerosMegaSena(){
      const crescente = (a,b) => a-b;

      return Array(6).fill(0).map(numero => parseInt(Math.random() * 60 + 1)).sort(crescente)
    },

    usuarios(){
      return usuarios
    },

    usuario(_,{id}){
      const usuarioFiltrado = usuarios.find(usuario => usuario.id === parseInt(id))
      
      return usuarioFiltrado
    },

    perfis(){
      return perfis
    },
    perfil(_,{id}){
      return perfis.find(perfil => perfil.id === id)
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