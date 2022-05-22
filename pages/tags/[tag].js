import {tags} from 'services/tags'
import { getAllFilesMetadata } from 'services/mdx'
import { useRouter } from 'next/router'
import { LayoutPosts } from 'components/LayoutPosts'

export default function TagSearchPage({posts}){
  const router = useRouter();
  return <LayoutPosts allPosts={posts} title={router.query.tag}/>
}

export async function getStaticPaths(){
  const paths = tags.map( tag => {
    return {
      params : {
        tag: tag.toLowerCase()
      }
    }
  })
  return {
    paths,
    fallback: false,
}
}

export async function getStaticProps({params}){
    const posts = getAllFilesMetadata(params.tag);
    return {
      props: {
        posts,
      }
    }
  }