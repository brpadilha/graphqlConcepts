const usuarios = [{
  id: 1,
  nome: 'Maria',
  email: 'maria@email.com',
  idade: 20,
  perfil_id:1,
  status: 'ATIVO'

  },
  {
  id: 2,
  nome: 'Andreia',
  email: 'andreia@email.com',
  idade: 25,
  perfil_id:1,
  status: 'BLOQUEADO'
},
{
  id: 3,
  nome: 'Bruno',
  email: 'bruno@email.com',
  idade: 29,
  perfil_id:2,
  status: 'INATIVO'
}
]

const perfis = [{id:1,nome:'comum'},{id:2,nome:'administrador'}]

module.exports = {usuarios, perfis}