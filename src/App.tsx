import React from 'react'
import { Layout } from 'antd'
import './assets/styles/main.css'
import RegistrationPage from './pages/RegistrationPage'

function App() {
  const { Content } = Layout
  return <Layout className="layout h-screen">
    <Content className='h-full p-10'>
      <RegistrationPage />
    </Content>
  </Layout>
}

export default App;
