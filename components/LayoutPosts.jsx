import Head from 'next/head'
import { Section } from 'components/Section'
import { LayoutHome } from 'components/LayoutHome'
import { PostsList } from 'components/PostsList'
import useShowPosts from 'hooks/useShowPosts'

export function LayoutPosts ({allPosts, title}) {
    const {posts, section, NUM_MAX_POSTS, nextSection, lastSection} = useShowPosts({allPosts});
    return(
        <>
        <Head><title>Blog - {title}</title></Head>
        <LayoutHome>
            <div className="mb-10 sm:mr-20">
            <Section title="Últimos artículos">
                <PostsList posts={posts}/>
                <div className={`flex justify-between mt-5 ${(allPosts.length <= NUM_MAX_POSTS) && 'hidden'}`}>
                <button className={`${(section <= 0) && 'opacity-0 cursor-default'} text-sm text-sky-500 font-bold`} onClick={lastSection}> {'<'} más recientes </button>
                <button className={`${(section >= allPosts.length - NUM_MAX_POSTS) && 'opacity-0 cursor-default'} text-sm text-sky-500 font-bold`} onClick={nextSection}>más antiguos {'>'}</button>
                </div>
            </Section>
            </div>
        </LayoutHome>
        </>
    )
}