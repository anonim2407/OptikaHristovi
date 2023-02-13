import Head from 'next/head'
import Header from './header'
import Footer from './footer'
// import Navbar from './navbar'


export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{`Очен център Христови - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>

     <Header/>
      {children}
      <Footer />
    </>
  )
}
