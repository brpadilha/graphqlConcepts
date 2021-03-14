import { ApolloServer , gql } from 'apollo-server'

import { importSchema } from 'graphql-import'

const usuarios = [{
  id: 1,
  nome: 'Maria',
  email: 'maria@email.com',
  idade: 20,
  perfil_id:1

  },
  {
  id: 2,
  nome: 'Andreia',
  email: 'andreia@email.com',
  idade: 25,
  perfil_id:1
},
{
  id: 3,
  nome: 'Bruno',
  email: 'bruno@email.com',
  idade: 29,
  perfil_id:2
}
]

const perfis = [{id:1,nome:'comum'},{id:2,nome:'administrador'}]


const resolvers = {
  Usuario: {
    salario(usuario){
      return usuario.salario_real
    },

    perfil(usuario){
      return perfis.find(perfil => perfil.id === usuario.perfil_id)
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
        vip: true,
        perfil_id:1
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
  typeDefs: importSchema('./schema/index.graphql'),
  resolvers
})

server.listen().then(({url}) => {
  console.log(`Executando na porta ${url}`)
})