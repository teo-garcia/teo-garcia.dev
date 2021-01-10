import type { AppProps } from 'next/app'
import { GlobalProviders } from 'components/GlobalProviders/GlobalProviders'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProviders>
      <Component {...pageProps} />
    </GlobalProviders>
  )
}

export default MyApp
