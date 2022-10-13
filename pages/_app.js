import '../styles/global.css'

export default function App({Component,pageProps}) {
  console.log('global componenet')
  return <Component {...pageProps} />
}