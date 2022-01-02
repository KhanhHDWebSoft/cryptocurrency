import '../styles/globals.css';
import { EmptyLayout } from 'components/layouts/emptyLayout';
import { AppPropsWithLayout } from 'models/common';
import { Provider } from 'react-redux';
import store from 'store/store';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
