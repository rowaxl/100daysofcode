const CONTENT_API_KEY = process.env['CONTENT_API'] ? process.env['CONTENT_API'] : ''
const API_URL = process.env['API_URL'] ? process.env['API_URL'] : ''

export const getPosts = async () => {
  const res = await fetch(`${API_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`)

  const { posts } = await res.json()

  return posts
}

export const getPost = async (slug: string) => {
  const res = await fetch(`${API_URL}/ghost/api/v3/content/posts/slug/${slug}/?key=${CONTENT_API_KEY}&fields=title,slug,html`)

  const { posts } = await res.json()

  return posts[0]
}