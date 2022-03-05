import { Post } from 'components/Post'

export function PostsList({posts}){
    return(
        posts.map( ({img, title, date, slug})=> {
            return (
              <Post
                key={slug}
                img={img} 
                title={title} 
                date={date} 
                slug={slug}
              />
            )
        })
    )
}