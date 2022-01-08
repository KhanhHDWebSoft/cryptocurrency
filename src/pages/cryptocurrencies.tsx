import CryptoCurrencies from 'components/cryptocurrencies/CryptoCurrencies';
import { DashboardLayout } from 'components/layouts/dashboardLayout';
import { NextPageWithLayout } from 'models/common';
import { useGetCryptosQuery } from 'services/cryptoApis';

const Cryptocurrencies: NextPageWithLayout = () => {
  const {data, isFetching } = useGetCryptosQuery(100);
  return (
    <>
        <CryptoCurrencies simplified={false} cryptoList={data?.data?.coins} isFetching={isFetching} />
    </>
  );
};

Cryptocurrencies.Layout = DashboardLayout;

export default Cryptocurrencies;
