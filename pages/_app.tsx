import '../styles/globals.css'
import { Provider, NETWORKS } from '@web3-ui/hooks';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider network={NETWORKS.mainnet}><Component {...pageProps} /></Provider>
}

export default MyApp
