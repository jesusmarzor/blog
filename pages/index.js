import { getAllFilesMetadata } from 'services/mdx'
import { LayoutPosts } from 'components/LayoutPosts'

export default function Home({posts}) {
  return <LayoutPosts allPosts={posts} title="Inicio"/>
}

export async function getStaticProps(){
  const posts = getAllFilesMetadata();
  return {
    props: {
      posts,
    }
  }
}