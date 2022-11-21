import { AppProps } from 'next/app';
import Head from 'next/head';
import useApolloClient from 'hooks/useApolloClient';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/globals.css';

const MyApp = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  const { client } = useApolloClient();
  return (
    <>
      <Head>
        <title>Page Name</title>
        <meta name='description' content='content' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
        <ToastContainer />
      </ApolloProvider>
    </>
  );
};

export default MyApp;
