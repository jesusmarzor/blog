import { getAllFilesMetadata } from 'services/mdx'
import Head from 'next/head'
import { Section } from 'components/Section'
import { LayoutHome } from 'components/LayoutHome'
import { PostsList } from 'components/PostsList'

export default function Home({posts}) {
  return (
    <>
      <Head><title>Blog - Inicio</title></Head>
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

export async function getStaticProps(){
  const posts = getAllFilesMetadata();
  return {
    props: {
      posts,
    }
  }
}