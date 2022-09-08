import React, { useState, Suspense } from 'react'
import { Button, message, Steps } from 'antd'
import Loader from './Loader'
import UserInfoForm from './UserInfoForm'
import { RegistrationWizard } from '../models'
import { RegistrationWizardContext } from '../context/AppContext'
import { getCategoriesPhotos, getSubCategoriesPhotos } from '../models/PhotosModel'

const { Step } = Steps
const PhotosList = React.lazy(() => import('./PhotosList'))
const RegistrationStepper = () => {
    const [currentStep, setCurrentStep] = useState(0)
    const [wizardData, setWizardData] = useState<RegistrationWizard>()
    const [disableNextFinishBtn, setDisableNextFinishBtn] = useState<boolean>(true)

    const steps = [
        {
            title: 'Enter user information',
            content: UserInfoForm,
            property: 'form'
        },
        {
            title: 'Select categories',
            content: PhotosList,
            fnCall: async (): Promise<any> => {
                try {
                    const response = await getCategoriesPhotos()
                    return response
                } catch (error) {
                    console.error(error)
                }
                return Promise.resolve([])
            },
            property: 'categories',
        },
        {
            title: 'Select sub-categoris',
            content: PhotosList,
            fnCall: async (): Promise<any> => {
                try {
                    const response = wizardData?.categories ? await getSubCategoriesPhotos(wizardData.categories) : []
                    return response
                } catch (error) {
                    console.error(error)
                }
                return Promise.resolve([])
            },
            property: 'subCategories',
        },
    ]

    const next = () => {
        setCurrentStep(currentStep + 1)
        setDisableNextFinishBtn(false)
    }

    const prev = () => {
        setCurrentStep(currentStep - 1)
    }

    return <RegistrationWizardContext.Provider value={{
        wizardData: wizardData,
        setWizardData: setWizardData,
        currentStep: steps[currentStep],
        setDisableNextFinishBtn: setDisableNextFinishBtn
    }}>
        <div className='h-full flex flex-col items-stretch'>
            <Steps current={currentStep}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className='steps-content flex-1 p-5 w-5/6 my-0 mx-auto overflow-auto mt-4'>
                <Suspense fallback={<Loader />}>
                    { }
                    {React.createElement(
                        steps[currentStep].content
                    )}
                </Suspense>
            </div>
            <div className='steps-action flex flex-row-reverse items-center justify-between flex-wrap mt-4'>
                {currentStep < steps.length - 1 && (
                    <Button type='primary' onClick={() => next()} disabled={disableNextFinishBtn}>
                        Next
                    </Button>
                )}
                {currentStep === steps.length - 1 && (
                    <Button type='primary' onClick={() => message.success('Processing complete!')} disabled={disableNextFinishBtn}>
                        Done
                    </Button>
                )}
                {currentStep > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </div>
    </RegistrationWizardContext.Provider>

}

export default RegistrationStepper