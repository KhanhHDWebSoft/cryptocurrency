import { Card, Col, Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import moment from 'moment';
import * as React from 'react';

export interface NewsProps {
  loading: boolean;
  news: any;
}

const demoImage = "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

export default function News ({loading, news}: NewsProps) {

  if (loading) return <>Loading...</>

  return (
    <Row gutter={[24, 24]}>
      {
        news.value.map((item, i) => {
          return (
            <Col xs={24} sm={12} lg={12} key={i}>
              <Card hoverable className="news-card">
                <a href={item.url} target="_blank">
                  <div className="news-image-container">
                    <Title level={4} className="news-title">
                      {item.name.length > 30 ? `${item.name.substring(0,30)}...` : item.name}
                    </Title>
                    <img src={item?.image?.thumbnail?.contentUrl || demoImage} alt="new img" />
                  </div>
                  <p>{item.description.length > 100 ? `${item.description.substring(0, 100)}...` : item.description}</p>
                  <div className="provider-container">
                    <div>
                      <Avatar className="mr-5" src={item.provider[0]?.image?.thumbnail?.contentUrl || demoImage}  alt="news"/>
                      <Text className="provider-name">{item.provider[0]?.name}</Text>
                    </div>
                    <Text>{moment(item.dataPublished).startOf('second').fromNow()}</Text>
                  </div>
                </a>
              </Card> 
            </Col>
          )
        })
      }
    </Row>
  );
}
