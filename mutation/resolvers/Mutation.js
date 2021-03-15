import { proximoId, usuarios } from '../data/db'

module.exports = {
  novoUsuario(_,{ nome, email, idade }){

    const emailExiste = usuarios.find(usuario => usuario.email === email)

    if(emailExiste) throw new Error('Email cadastrado')

    const novoUsuario = {
      id: proximoId(),
      nome,
      email,
      idade,
      perfil_id: 1,
      status: 'ATIVO'
    }

    usuarios.push(novoUsuario)

    return novoUsuario
  },

  excluirUsuario(_,{id}){
    const indexUsuarioAExcluir = usuarios.findIndex(usuario => usuario.id === id)
    if(indexUsuarioAExcluir < 0) return null
    const usuarioExcluido = usuarios.splice(indexUsuarioAExcluir, 1)
    
    return usuarioExcluido ? usuarioExcluido[0] : null
  }
}