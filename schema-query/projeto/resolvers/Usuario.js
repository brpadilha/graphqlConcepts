import { perfis } from '../data/db'

module.exports = {
  salario(usuario){
      return usuario.salario_real
    },

  perfil(usuario){
    return perfis.find(perfil => perfil.id === usuario.perfil_id)
  }
}