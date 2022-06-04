import { Link, routes } from '@redwoodjs/router'

import type { Document } from 'types/graphql'

interface Props {
  article: Document
}

const Article = ({ article }: Props) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div>{article.description}</div>
      <div>{article.url}</div>
      <div>Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article