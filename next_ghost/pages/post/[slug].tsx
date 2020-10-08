import React, { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getPost } from '../api/post'
import { Post } from '../../interfaces'
import styles from '../../styles/Home.module.scss'

const PostDetail: FC<{ post: Post }> = ({ post }) => {
  const router = useRouter()

  console.log(post)

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <div className={styles.container}>
      <Link href="/"><a>Go Back</a></Link>
      <h1>{post.title}</h1>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)

  return {
    props: {
      post
    }
  }
}

export default PostDetail