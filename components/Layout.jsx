import Head from 'next/head'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'

export default function Layout( {children, title=null} ){
    return (
    <>
    <Head>
        <title>Blog {title}</title>
        <meta name="description" content="Blog de Jesús Martín" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    <main className="max-w-4xl mx-auto py-10 px-5">{children}</main>
    <Footer/>
    </>
    )
}