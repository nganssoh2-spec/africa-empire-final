import '../styles/globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;