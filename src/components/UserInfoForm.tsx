import React, { useContext } from 'react'
import { Form, Input } from 'antd'
import { RegistrationWizardContext } from '../context/AppContext'


const UserInfoForm = () => {
    const context = useContext(RegistrationWizardContext)
    return <div>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            layout={'vertical'}
            initialValues={{ remember: false }}
            autoComplete="off"
        >
            <Form.Item
                className='mb-2.5'
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input value={context.form.userName}/>
            </Form.Item>

            <Form.Item
                className='mb-2.5'
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password value={context.form.userName}/>
            </Form.Item>
            <Form.Item
                className='mb-2.5'
                label="Confirm-password"
                name="confirm-password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                className='mb-2.5'
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input type='email' />
            </Form.Item>
        </Form>

    </div>
}

export default UserInfoForm