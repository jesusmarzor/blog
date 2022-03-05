import Link from "next/link";
import Image from "next/image";

export function Post({img=null, title, date, slug}){
    return( 
        <Link key={slug} href={`/${slug}`}>
            <a className="flex justify-start items-center hover:bg-gray-100 rounded-lg overflow-hidden mb-2 sm:mr-20 group">
                <div className="flex justify-center items-center m-3 mr-4 transition duration-300 ease group-hover:scale-110">
                    <Image
                        src={img} 
                        alt={title}
                        width={45}
                        height={45}
                    />
                </div>
                <div>
                    <h2 className="text-base group-hover:text-sky-500 font-semibold">{title}</h2>
                    <p className="text-xs">{date}</p>
                </div>
            </a>
        </Link>
    )
}