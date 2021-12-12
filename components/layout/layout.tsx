import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode
}

const Main = ({children} :LayoutProps) => {
  return(
    <div className='w-screen bg-[#362222]'>
      <Head>
  
      </Head>
      
      <div className='container max-w-md mx-auto'>
        {children}
        
      </div>

    </div>
    )
}

export default Main
