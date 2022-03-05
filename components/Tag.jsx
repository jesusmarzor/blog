import Image from "next/image"
import Link from "next/link"

export function Tag({children, tag}){
    return (
        <Link href={(tag === 'all') ? '/' : `/tags/${tag}`}>
            <a className="flex justify-center items-center px-3 py-2 mx-2 mb-2 rounded-3xl border-2 border-gray cursor-pointer hover:border-sky-500 transition duration-300 ease">
                {
                    (tag !== 'all')
                    ?
                        <div className="flex justify-centr items-center mr-2">
                            <Image
                                src={`/img/${tag}.png`}
                                width={25}
                                height={25}
                            />
                        </div>
                    :
                        null
                }
                {children}
            </a>
        </Link>
    )
}