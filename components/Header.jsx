import Link from 'next/link'
import Image from 'next/image'

export function Header(){
    return (
        <header className="bg-gray-100">
            <div className="flex justify-start items-center px-5 py-5 max-w-4xl mx-auto">
                <Link href="/">
                    <a className="cursor-pointer">
                        {/* <Image
                            src="/img/logo.png"
                            width={90}
                            height={50}
                        /> */}
                        <h1 className="text-2xl"><span className="font-bold">Jesús</span>marzor</h1>
                    </a>
                </Link>
            </div>
        </header>
    )
}