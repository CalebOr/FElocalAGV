import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import { ThemeProvider } from 'next-themes';
import awsExports from "../src/aws-exports";
import Amplify from "aws-amplify";

import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'
const progress = new ProgressBar({
  size: 4,
  color: '#0276aa',
  className: 'z-50',
  delay: 100
})
Amplify.configure({...awsExports, ssr: true, region: 'us-east-1'});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }) {
  return (<ThemeProvider enableSystem={true} attribute="class"><Component {...pageProps} /></ThemeProvider>)
}

export default MyApp
