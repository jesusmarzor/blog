import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

export function Tag({children, tag}){
    const router = useRouter();
    return (
        <Link href={(tag === 'all') ? '/' : `/tags/${tag}`}>
            <a className={`flex justify-center items-center px-3 py-2 mx-2 mb-2 rounded-3xl border-2 border-gray cursor-pointer hover:border-sky-500 transition duration-300 ease ${(tag === 'all' && !router.query.tag) && 'border-sky-500'} ${(router.query.tag === tag) && 'border-sky-500'}`}>
                {
                    (tag !== 'all')
                    &&
                        <div className="flex justify-centr items-center mr-2">
                            <Image
                                src={`/img/${tag}.png`}
                                alt={`Imagen de ${tag}`}
                                width={25}
                                height={25}
                            />
                        </div>
                }
                {children}
            </a>
        </Link>
    )
}