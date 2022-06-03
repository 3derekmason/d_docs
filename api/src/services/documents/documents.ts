import { db } from 'src/lib/db'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

export const documents: QueryResolvers['documents'] = () => {
  return db.document.findMany()
}

export const document: QueryResolvers['document'] = ({ id }) => {
  return db.document.findUnique({
    where: { id },
  })
}

export const createDocument: MutationResolvers['createDocument'] = ({
  input,
}) => {
  return db.document.create({
    data: input,
  })
}

export const updateDocument: MutationResolvers['updateDocument'] = ({
  id,
  input,
}) => {
  return db.document.update({
    data: input,
    where: { id },
  })
}

export const deleteDocument: MutationResolvers['deleteDocument'] = ({ id }) => {
  return db.document.delete({
    where: { id },
  })
}
