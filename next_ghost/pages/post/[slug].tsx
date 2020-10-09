import React, { FC, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getPost } from '../api/post'
import { Post } from '../../interfaces'
import styles from '../../styles/Home.module.scss'

const PostDetail: FC<{ post: Post }> = ({ post }) => {
  const router = useRouter()
  const [enableLoadComments, setEnableLoadComments] = useState(true)

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  function loadComment() {
    setEnableLoadComments(false)
    ;(window as any).disqus_config = function () {
      this.page.url = window.location.href
      this.page.identifier = post.slug
    }

    const script = document.createElement('script')
    script.src = 'https://blaze-blog.disqus.com/embed.js'
    script.setAttribute('data-timestamp', Date.now().toString())

    document.body.appendChild(script)
  }

  return (
    <div className={styles.container}>
      <Link href="/"><a>Go Back</a></Link>
      <h1>{post.title}</h1>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      { enableLoadComments &&
        <p className={styles.goback} onClick={loadComment}>
          Load Comments
        </p>
      }
      <div id="disqus_thread"></div>
    </div>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

// Ghost CMS Request
export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)

  return {
    revalidate: 10,
    props: { post },
  }
}

export default PostDetail