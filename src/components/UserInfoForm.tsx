import React, { useContext, useEffect, useState, useRef } from 'react'
import { Form, Input } from 'antd'
import { RegistrationWizardContext } from '../context/AppContext'


const UserInfoForm = () => {
    const context = useContext(RegistrationWizardContext)
    const { wizardData, setWizardData, setDisableNextFinishBtn } = context
    const [form, setForm] = useState<any>()
    const wizardDataRef = useRef<any>()
    wizardDataRef.current = wizardData

    const onFormChange = (e: any) => {
        setForm(e.currentTarget)
    }

    useEffect(() => {
        if (form) {
            let clonedWizardData = wizardDataRef.current ? { ...wizardDataRef.current } : {}
            clonedWizardData.form = Array.from(form).map((_elem: any) => {
                return { [_elem.name]: _elem.value }
            })
            if (setWizardData) {
                setWizardData(clonedWizardData)
                wizardDataRef.current = clonedWizardData
            }
            if (setDisableNextFinishBtn) {
                setDisableNextFinishBtn(Array.from(clonedWizardData.form).filter((_elem: any) => _elem.value !== '').length !== Array.from(clonedWizardData.form).length)
            }
        }
    }, [form, setWizardData, setDisableNextFinishBtn])
    return <div>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            layout={'vertical'}
            initialValues={{ remember: false }}
            autoComplete="off"
            onChange={onFormChange}
        >
            <Form.Item
                className='mb-2.5'
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input name="username" value={wizardData?.form?.userName} />
            </Form.Item>

            <Form.Item
                className='mb-2.5'
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password name="password" value={wizardData?.form?.userName} />
            </Form.Item>
            <Form.Item
                className='mb-2.5'
                label="Confirm-password"
                name="confirm-password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password name="confirm-password" />
            </Form.Item>
            <Form.Item
                className='mb-2.5'
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input name="email" type='email' />
            </Form.Item>
        </Form>
    </div>
}

export default UserInfoForm