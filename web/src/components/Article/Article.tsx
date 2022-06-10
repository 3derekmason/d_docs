import { Link, routes } from '@redwoodjs/router'
import type { Document } from 'types/graphql'
import styles from 'src/components/Article/article.module.css'
interface Props {
  article: Document
}

const Article = ({ article }: Props) => {
  return (
    <Link to={routes.article({ id: article.id })}>
      <div className={styles.article}>
        <div className={styles.articleRow}>
          <h2>{article.title}</h2>
        </div>
        <div className={styles.articleRow}>
          <a href={`http://${article.url}`} target="_blank" rel="noreferrer">
            View
          </a>
          <div className={styles.description}>
            Posted:{' '}
            {new Date(Date.parse(article.createdAt)).toLocaleDateString()}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Article
