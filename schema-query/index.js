import { ApolloServer , gql } from 'apollo-server'

import { importSchema } from 'graphql-import'
import resolvers from './resolvers'
const SchemaPath = './schema/index.graphql'

const server = new ApolloServer({
  typeDefs: importSchema(SchemaPath),
  resolvers
})

server.listen().then(({url}) => {
  console.log(`Executando na porta ${url}`)
})