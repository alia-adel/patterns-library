import React, { useState, Suspense } from 'react'
import { Button, message, Steps } from 'antd'
import Loader from './Loader'
import UserInfoForm from './UserInfoForm'

const { Step } = Steps
const PhotosList = React.lazy(() => import('./PhotosList'))

const RegistrationStepper = () => {
    const [current, setCurrent] = useState(0)

    const steps = [
        {
            title: 'Enter user information',
            content: UserInfoForm,
        },
        {
            title: 'Select categories',
            content: PhotosList,
        },
        {
            title: 'Select sub-categoris',
            content: PhotosList,
        },
    ]

    const next = () => {
        setCurrent(current + 1)
    }

    const prev = () => {
        setCurrent(current - 1)
    }

    return <div className='h-full flex flex-col items-stretch'>
        <Steps current={current}>
            {steps.map(item => (
                <Step key={item.title} title={item.title} />
            ))}
        </Steps>
        <div className='steps-content flex-1 p-5 w-5/6 my-0 mx-auto overflow-auto mt-4'>
            <Suspense fallback={<Loader />}>
                { }
                {React.createElement(
                    steps[current].content
                )}
            </Suspense>
        </div>
        <div className='steps-action flex flex-row-reverse items-center justify-between flex-wrap mt-4'>
            {current < steps.length - 1 && (
                <Button type='primary' onClick={() => next()}>
                    Next
                </Button>
            )}
            {current === steps.length - 1 && (
                <Button type='primary' onClick={() => message.success('Processing complete!')}>
                    Done
                </Button>
            )}
            {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                    Previous
                </Button>
            )}
        </div>
    </div>
}

export default RegistrationStepper