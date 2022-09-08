import React from 'react'
import { Layout } from 'antd'
import './assets/styles/main.css'
import SearchResultsPage from './pages/SearchResultsPage'

function App() {
  const { Content } = Layout
  return <Layout className="layout h-screen">
    <Content className='h-full'>
      <SearchResultsPage />
    </Content>
  </Layout>
}

export default App;
