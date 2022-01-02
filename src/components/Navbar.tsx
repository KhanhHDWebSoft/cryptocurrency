import React, { memo } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import Link from 'next/link';
import { BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons';
interface Props {}

export default memo(function Navbar({}: Props) {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={'https://i.ibb.co/Z11pcGG/cryptocurrency.png'} />
        <Typography.Title level={2} className="logo">
          <Link href="/">Cryptoverse</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item key={'home'} icon={<HomeOutlined />}>
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key={'crypto'} icon={<FundOutlined />}>
          <Link href="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item key={'exchange'} icon={<MoneyCollectOutlined />}>
          <Link href="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item key={'new'} icon={<BulbOutlined />}>
          <Link href="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
});
