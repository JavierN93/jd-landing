import type { AppProps } from 'next/app'
import 'swiper/swiper.min.css';
import '../styles/globals.css'
import { DialogProvider } from '../components/ui-kit/dialog/dialog-context';

function MyApp({ Component, pageProps }: AppProps) {
  return <DialogProvider>
    <Component {...pageProps} />
  </DialogProvider>
}
export default MyApp
