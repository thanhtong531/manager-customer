import React from 'react'
import { Layout, Menu } from 'antd'

import Content from './Content'
import { Head } from './Header'
import { SearchLayout } from './Search'

export default function Customer() {
  const { Sider, Header } = Layout
  return (
    <div>
      <Layout>
        <Sider>
          <Menu theme='dark' mode='inline'>
            <Menu.Item>Trang chu</Menu.Item>
            <Menu.Item>Trang chu</Menu.Item>
            <Menu.Item>Trang chu</Menu.Item>
            <Menu.Item>Trang chu</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className='flex items-center justify-end' style={{ padding: '20px', background: '#fff' }}>
            <Head></Head>
          </Header>
          <SearchLayout></SearchLayout>
          <Content></Content>
        </Layout>
      </Layout>
    </div>
  )
}
