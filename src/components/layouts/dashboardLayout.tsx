import { Layout } from 'antd';
import Navbar from 'components/Navbar';
import { LayoutProps } from 'models/common';
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
      </div>
    </div>
  );
}
