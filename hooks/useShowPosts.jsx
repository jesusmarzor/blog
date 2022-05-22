import { useEffect, useState } from 'react'

const NUM_MAX_POSTS = 5;

export default function useShowPosts ({allPosts}) {
    const [section, setSection] = useState(0);
    const [posts, setPosts] = useState([]);
    useEffect( () => {
        setPosts(allPosts.slice(section,section + NUM_MAX_POSTS));
    }, [section, allPosts])
    const nextSection = () => {
        setSection( prevSection => (prevSection < allPosts.length - NUM_MAX_POSTS) ? prevSection + NUM_MAX_POSTS : prevSection);
    }
    const lastSection = () => {
        setSection( prevSection => (prevSection > 0) ? prevSection - NUM_MAX_POSTS : prevSection);
    }
    return({posts, section, NUM_MAX_POSTS, nextSection, lastSection});
}