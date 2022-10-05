import { buildSchema } from 'graphql'

var schema = buildSchema(`
  type Query {
    hello: String,
  }
  type User {
    id: Int
    last_name: String!
    name: String!
    is_military: Int!
    is_temporal: Int!
    user_name: String!
    password: String!
    email: String!
    email_verified: String!
    verification_token: String!
    address: String!
    country_id: Int!
    city: String!
    phone: String!
    cellphone: String!
    emergency_name: String!
    emergency_phone: String!
    document: String!
    type_document_id: Int!
    placeexpedition: String!
    dateexpedition: String!
  }
  type Mutation {
    createUser(
        last_name: String!,
        name: String!,
        is_military: Int!,
        is_temporal: Int!,
        user_name: String!,
        password: String!,
        email: String!,
        email_verified: String!,
        verification_token: String!,
        address: String!,
        country_id: Int!,
        city: String!,
        phone: String!,
        cellphone: String!,
        emergency_name: String!,
        emergency_phone: String!,
        document: String!,
        type_document_id: Int!,
        placeexpedition: String!,
        dateexpedition: String!
        ): User,
  }

`);

export {
  schema
}