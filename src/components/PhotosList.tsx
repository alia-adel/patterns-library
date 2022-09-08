import React, { Suspense, useContext, useEffect, useRef, useState } from 'react'
import { Checkbox } from 'antd'
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import { RegistrationWizardContext } from '../context/AppContext'
import { Photo } from '../models'
import Loader from './Loader'


const PhotoCard = React.lazy(() => import('./PhotoCard'))
const CheckboxGroup = Checkbox.Group;

const PhotosList = () => {
    const wizardContext = useContext(RegistrationWizardContext)
    const { wizardData, currentStep, setDisableNextFinishBtn } = wizardContext
    const [list, setList] = useState<any>()
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);
    const checkedListRef = useRef(checkedList)
    useEffect(() => {
        async function getList() {
            const response: Photo[] = await currentStep.fnCall()
            if (response.length) {
                setList([...response])
            }
        }
        getList()
    }, [currentStep])

    useEffect(() => {
        if(setDisableNextFinishBtn) {
            setDisableNextFinishBtn(checkedList.length === 0)
        }        
    }, [checkedList, setDisableNextFinishBtn])

    const onChange = (list: CheckboxValueType[]) => {
        setCheckedList(list);
        checkedListRef.current = list
        let clonedWizardData = wizardData?{ ...wizardData }:{}
        clonedWizardData[wizardContext.currentStep.property] = list
        if (wizardContext.setWizardData) {
            wizardContext.setWizardData(clonedWizardData)
        }
    };

    const ListItem = ({ photo, index }: { photo: Photo, index: number }) => {
        return <li key={`${photo.caption}_${index}`} className='list-item flex col items-stretch h-full w-full'>
            <Checkbox value={photo.caption} key={index} className='h-full w-full'>
                <PhotoCard photo={photo} />
            </Checkbox>
        </li>
    }

    return <Suspense fallback={<Loader />}>
        <ul>
            {list?.length > 0 && <CheckboxGroup value={checkedList} onChange={onChange} className='list-group grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {list.map((_photo: Photo, index: number) =>
                    <ListItem photo={_photo} index={index} />
                )}
            </CheckboxGroup>
            }
        </ul>
    </Suspense>
}

export default PhotosList