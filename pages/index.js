import { getAllFilesMetadata } from 'services/mdx'
import Layout from 'components/Layout'
import { Section } from 'components/Section'
import { LayoutHome } from 'components/LayoutHome'
import { PostsList } from 'components/PostsList'

export default function Home({posts}) {
  return (
    <Layout title="- Inicio">
      <LayoutHome>
        <div className="mb-10">
          <Section title="Últimos artículos">
            <PostsList posts={posts}/>
          </Section>
        </div>
      </LayoutHome>
    </Layout>
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