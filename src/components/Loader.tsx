import { Space, Spin } from 'antd'
import React from 'react'

const Loader = () => {
    return <Space size="middle" className='h-full w-full flex items-center justify-center'>
    <Spin size="large" />
  </Space>
}

export default Loader