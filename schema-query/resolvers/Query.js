import {usuarios, perfils } from '../data/db'

module.exports = {
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
