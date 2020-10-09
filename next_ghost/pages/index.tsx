import React, { FC } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

import { Post } from '../interfaces'
import { getPosts } from './api/post'

const Home: FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <h2>Blaze Blog</h2>
      
      <ul>
      { posts.map(post => (
        <li key={post.id}>
          <Link href="/post/[slug]" as={`/post/${post.slug}`}>
            <a>
              {post.title}
            </a>
          </Link>
        </li>
      )) }
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = await getPosts()

  return {
    props: {
      posts
    }
  }
}


export default Home