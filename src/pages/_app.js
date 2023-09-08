import '@/styles/globals.css'
import { Layout } from '../components'
import { StateContext } from '../../context/StateContext'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from "@mui/material"
import lightTheme from '../../utils/lightTheme'
import createEmotionCache from "../../utils/createEmotionCache"
import { CacheProvider } from "@emotion/react"



const clientSideEmotionCache = createEmotionCache();

export default function App({ Component,
  emotionCache = clientSideEmotionCache, pageProps }) {
  return (
      
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <StateContext>
          <Layout>
            <Toaster />
            <Component {...pageProps} />      
            </Layout>
            </StateContext>
        </ThemeProvider>
      </CacheProvider>


  )
  

}
