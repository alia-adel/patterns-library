import React from 'react'
import { Typography } from 'antd'
import RegistrationStepper from '../components/RegistrationStepper'

const { Title } = Typography;

const RegistrationPage = () => {    
    return <article className='p-5 w-5/6 min-w-[250px] flex flex-col items-stretch my-5 mx-auto' style={{height: 'calc(100vh - 1.25rem)'}}>
        <Title level={2}>Registration</Title>
        <section className='flex-1 w-full bg-white p-8 rounded-md overflow-auto m-auto'>
            <RegistrationStepper />
        </section>
    </article>
}

export default RegistrationPage