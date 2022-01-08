import { Col, Row, Statistic, Typography } from 'antd';
import CryptoCurrencies from 'components/cryptocurrencies/CryptoCurrencies';
import { DashboardLayout } from 'components/layouts/dashboardLayout';
import News from 'components/news/News';
import millify from 'millify';
import { NextPageWithLayout } from 'models/common';
import Link from 'next/link';
import { useGetCryptosQuery } from 'services/cryptoApis';
import { useGetCryptoNewsQuery } from 'services/cryptoNewsApis';

interface Stats {
  total: number;
  total24hVolume: number;
  totalCoins: number;
  totalExchanges: number;
  totalMarketCap: number
  totalMarkets: number; 
}

const Home: NextPageWithLayout = () => {
  const {data, isFetching } = useGetCryptosQuery(10);
  const { data: newsData, isFetching: newLoading } = useGetCryptoNewsQuery({ newCategory: 'Cryptocurrency', count: 10 });
  const globalStat: Stats = data?.data?.stats;

  if (isFetching) return <div>Loading ....</div>

  return (
    <>
     <Typography.Title level={2} className="heading">
        Global Crypto Stats
     </Typography.Title>
     <Row>
       <Col span={12}>
         <Statistic title="Total Cryptocurrencies" value={globalStat.total} />
       </Col>
       <Col span={12}>
         <Statistic title="Total Exchanges" value={millify(globalStat.totalExchanges)} />
       </Col>
       <Col span={12}>
         <Statistic title="Total Market Cap" value={millify(globalStat.totalMarketCap)} />
       </Col>
       <Col span={12}>
         <Statistic title="Total 24h Volume" value={millify(globalStat.total24hVolume)} />
       </Col>
       <Col span={12}>
         <Statistic title="Total Markets" value={millify(globalStat.totalMarkets)} />
       </Col>
     </Row>

     <div className="home-heading-container">
       <Typography.Title level={2} className="home-title">
         Top 10 Cryptocurrencies in the word
       </Typography.Title>

       <Typography.Title level={2} className="home-title">
         <Link href="/cryptocurrencies">
            Show more
         </Link>
       </Typography.Title>
     </div>
     <CryptoCurrencies simplified cryptoList={data?.data?.coins} isFetching={isFetching} />

     <div className="home-heading-container">
       <Typography.Title level={2} className="home-title">
         Latest Crypto News
       </Typography.Title>

       <Typography.Title level={2} className="home-title">
         <Link href="/cryptocurrencies">
            Show more
         </Link>
       </Typography.Title>
     </div>
     <News loading={newLoading} news={newsData}  />
    </>
  );
};

Home.Layout = DashboardLayout;

export default Home;
