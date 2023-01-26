import '@/styles/reset.css';
import '@/styles/globals.css';

import Navbar from 'components/Navbar'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className='h-screen'>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
