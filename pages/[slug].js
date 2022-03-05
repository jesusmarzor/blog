import { MDXRemote } from 'next-mdx-remote';
import { getFileBySlug, getFiles } from "services/mdx";
import Layout from 'components/Layout';
import { ButtonBack } from 'components/ButtonBack';

export default function PostPage({source, frontmatter}){
    return (
        <Layout title={`- ${frontmatter.title}`}>
            <ButtonBack/>
            <article className="prose mx-auto">
                <MDXRemote 
                    {...source}
                />
            </article>
        </Layout>
    );
}

export async function getStaticPaths(){
    const posts = getFiles();
    const paths = posts.map( post => ({params: {slug: post.replace('.mdx','')}}));
    return {
        paths,
        fallback: false,
    }
}
export async function getStaticProps({params}){
    const {source, frontmatter} = await getFileBySlug(params.slug);
    return {
        props: {
            source,
            frontmatter,
        }
    }
}