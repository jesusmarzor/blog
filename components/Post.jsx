import Link from "next/link";
import Image from "next/image";

export function Post({img=null, title, date, slug}){
    return( 
        <Link key={slug} href={`/${slug}`}>
            <a className="flex justify-start items-center hover:bg-gray-100 dark:hover:bg-dark-100 rounded-lg overflow-hidden mb-2 py-1 group">
                <div className="w-20 flex justify-center items-center m-2 transition duration-300 ease group-hover:scale-110">
                    <Image
                        src={img} 
                        alt={title}
                        width={45}
                        height={45}
                    />
                </div>
                <div className="w-full">
                    <h2 className="text-base group-hover:text-sky-500 font-semibold">{title}</h2>
                    <p className="text-xs">{date}</p>
                </div>
            </a>
        </Link>
    )
}