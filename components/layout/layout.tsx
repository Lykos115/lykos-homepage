import Head from 'next/head'
import Footer from '../footer'

interface LayoutProps {
  children: React.ReactNode
}

const Main = ({children} :LayoutProps) => {
  return(
    <div className='w-auto h-auto bg-[#2b2b2b] text-white pb-8 px-4'>
      <Head>
  
      </Head>
      
      <div className='md:w-[320px] md:h-[320px] w-auto h-auto mx-auto'> place holder logo</div>
      <div className='container max-w-md mx-auto pt-14'>
        {children}
        
        <Footer />
      </div>
    </div>
  )
}

export default Main
