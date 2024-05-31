// packages/webapp/src/pages/_app.tsx
import '../styles/globals.css'; // Path to your global CSS file
import type { AppProps } from 'next/app';

// The custom App component receives the Component and pageProps
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
