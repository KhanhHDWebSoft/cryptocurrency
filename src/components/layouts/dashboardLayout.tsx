import { Layout, Space, Typography } from 'antd';
import Navbar from 'components/Navbar';
import { LayoutProps } from 'models/common';
import Link from 'next/link';
import * as React from 'react';

export function DashboardLayout({ children }: LayoutProps) {
  return (
    <div className="dashboard-layout app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">{children}</div>
        </Layout>
     
        <div className="footer">
          <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
            Cryptoverse <br />
            All rights reserverd
          </Typography.Title>

          <Space>
            <Link href="/">Home</Link>
            <Link href="/exchanges">Exchanges</Link>
            <Link href="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}
