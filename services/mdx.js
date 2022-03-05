import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize"

const root = process.cwd();

export function getFiles(){
    return fs.readdirSync(path.join(root,'posts'));
}
export async function getFileBySlug(slug){
    const mdxSource = fs.readFileSync(path.join(root, 'posts', `${slug}.mdx`), 'utf-8');
    const {data, content} = matter(mdxSource);
    const source = await serialize(content, {}); //mdxprims libreria para markdown por si es un blog tecnico
    return {
        source,
        frontmatter: {
            slug,
            ...data,
        }
    }
}
export function getAllFilesMetadata(tag = null){
    const files = getFiles();
    const datos = files.reduce( (allPosts, postSlug) => {
        const mdxSource = fs.readFileSync(path.join(root, 'posts', postSlug), 'utf-8');
        const {data} = matter(mdxSource);
        return [{...data, slug: postSlug.replace('.mdx','')}, ...allPosts];
    },[]).sort((a, b) => new Date(b.date) - new Date(a.date));
    return (tag === null) ? datos : datos.filter( dato => dato.tags.includes(tag));
}