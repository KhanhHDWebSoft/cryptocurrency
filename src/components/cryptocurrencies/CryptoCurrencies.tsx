import { Card, Col, Input, Row } from 'antd';
import millify from 'millify';
import Link from 'next/link';
import React, { useState } from 'react';

export interface CryptoProps {
  simplified: boolean;
  cryptoList: any;
  isFetching: boolean
}

export default function CryptoCurrencies ({ simplified, cryptoList, isFetching }: CryptoProps) {
  const [cryptos, setCryptos] = useState(cryptoList);
  const [search, setSearchItem] = useState<string>('');

  React.useEffect(() => {
    const filteredData = cryptoList?.filter(coin => coin.name.toLowerCase().includes(search));
    setCryptos(filteredData)
  }, [cryptoList, search])

  if (isFetching) return <div>Loading...</div>;


  return (
    <> 
      { !simplified && 
        (<div className="search-crypto">
          <Input placeholder="Search Cryptocurrency" onChange={e => setSearchItem(e.target.value)} />
        </div>)
      }
      <Row gutter={[16,16]} className="crypto-card-container">
        {
          cryptos && cryptos.map((currency) => (
            <Col className="crypto-card" key={currency.id} xs={24} sm={12} lg={6}>
              <Link href={`/crypto/${currency.id}`}>
                <Card 
                  title={`${currency.rank}. ${currency.name} `} 
                  extra={<img className="crypto-image" src={currency.iconUrl} />}
                  hoverable
                >
                  <p>Price: { millify(currency.price) }</p>
                  <p>Market Cap: { millify(currency.marketCap) }</p>
                  <p>Daily Change: { millify(currency.change) }</p>
                </Card>
              </Link>
            </Col>
          ))
        }
      </Row>
    </>
  );
}
