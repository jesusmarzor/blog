import Image from 'next/image'

export function ImageLink({name, href}){
    return(
        <a href={href} target="_blank" rel="noopener noreferrer">
            <div className="border-4 hover:border-sky-500 transition duration-300 ease group border-transparent overflow-hidden mx-auto mb-10 rounded-lg">
                <div className="group-hover:scale-105 transition duration-300 ease">
                    <Image
                        src={`/img/${name}.png`}
                        width={2018}
                        height={1085}
                    />
                </div>
                
            </div>
        </a>
    )
}