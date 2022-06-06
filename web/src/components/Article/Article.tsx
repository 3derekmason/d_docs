import { Link, routes } from '@redwoodjs/router'
import type { Document } from 'types/graphql'
import styles from 'src/components/Article/article.module.css'
interface Props {
  article: Document
}

const Article = ({ article }: Props) => {
  return (
    <div className={styles.article}>
      <div className={styles.articleRow}>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
        <div>{article.description}</div>
      </div>
      <div className={styles.articleRow}>
        <a href={`https://${article.url}`} target="_blank" rel="noreferrer">
          {article.url}
        </a>
        <div>Posted at: {article.createdAt}</div>
      </div>
    </div>
  )
}

export default Article
