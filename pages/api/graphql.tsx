// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {ApolloServer ,gql} from 'apollo-server-micro'
import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

const typeDefs = gql `

input CardInput { 
  name: String!
  email: String!
  phone: String!
  biography: String!
  twitter: String!
  github: String!
  website: String!
} 

type Card { 
  id: Int!
  name: String!
  email: String!
  phone: String!
  biography: String!
  cardId: String! 
  twitter: String!
  github: String!
  website: String!
}


type Query {
  getAllCards: [Card]
  getCard(id: String!): Card
}

type Mutation {
  addCard(input: CardInput!): Card
  deleteCard(id: String!): Card
}

`;


const resolvers = {
  Query: {
    getAllCards: async ()=> {
      return prisma.card.findMany()
    },
    getCard: async (_, args)=> {
      return prisma.card.findFirst({
        where: {
          cardId: args.id
        }
      })
    },
  },


  Mutation: {
    addCard: async(_, args) => {
      return prisma.card.create({
        data: { ...args.input,  cardId: uuidv4() },
      });
    },
    deleteCard: async(_, args) => {
      return prisma.card.delete({
        where: {
        id: Number(args.id) ,
        },
      })
    }
  }
}

export const config = {
  api: {
    bodyParser: false,
  },

};

const apolloServer = new ApolloServer({
  typeDefs, resolvers
})

const handler = apolloServer.createHandler({
  path: "/api/graphql"
})

export default handler;