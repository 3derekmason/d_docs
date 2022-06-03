export const schema = gql`
  type Document {
    id: Int!
    title: String!
    description: String!
    url: String!
    createdAt: DateTime!
  }

  type Query {
    documents: [Document!]! @requireAuth
    document(id: Int!): Document @requireAuth
  }

  input CreateDocumentInput {
    title: String!
    description: String!
    url: String!
  }

  input UpdateDocumentInput {
    title: String
    description: String
    url: String
  }

  type Mutation {
    createDocument(input: CreateDocumentInput!): Document! @requireAuth
    updateDocument(id: Int!, input: UpdateDocumentInput!): Document!
      @requireAuth
    deleteDocument(id: Int!): Document! @requireAuth
  }
`
