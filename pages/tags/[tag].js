import {tags} from 'services/tags'
import Head from 'next/head'
import { Section } from 'components/Section'
import { LayoutHome } from 'components/LayoutHome'
import { getAllFilesMetadata } from 'services/mdx'
import { useRouter } from 'next/router'
import { PostsList } from 'components/PostsList'

export default function TagSearchPage({posts}){
  const router = useRouter();
  return(
    <>
      <Head><title>Blog - {router.query.tag}</title></Head>
      <LayoutHome>
        <div className="mb-10">
          <Section title="Últimos artículos">
            <PostsList posts={posts}/>
          </Section>
        </div>
      </LayoutHome>
    </>
  )
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