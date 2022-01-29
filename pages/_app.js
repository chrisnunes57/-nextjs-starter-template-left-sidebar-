import '../styles/globals.scss'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <>
    <div className="app-wrapper">
      <Navigation />

      <div className="container main">
        <Component {...pageProps} />
      </div>
    </div>
  </>
}

export default MyApp
