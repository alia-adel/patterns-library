import React, { useState } from 'react'
import { Typography, Form, AutoComplete } from 'antd'
import { CATEGORIES, Photo } from '../models';
import { getPhotos } from '../models/PhotosModel';

const { Title } = Typography;
const PhotosList = React.lazy(() => import('../components/PhotosList'))

const SearchResultsPage = () => {
    const [searchText, setSearchText] = useState('')
    const [searchResults, setSearchResults] = useState<Photo[] | undefined>([])
    const onSearch = async (_searchText: string) => {
        setSearchText(_searchText)
        setSearchResults(await getPhotos(_searchText))
    }

    return <article className='p-5 w-5/6 min-w-[250px] flex flex-col items-stretch my-5 mx-auto'
        style={{ height: 'calc(100vh - 1.25rem)' }}>
        <Title level={2}>Search UnSplash Images</Title>
        <section className='flex-1 w-full bg-white p-8 rounded-md overflow-auto m-auto'>
            <div className='h-full flex flex-col items-stretch'>
                <Form
                    name="basic"
                    labelCol={{ span: 2 }}
                    wrapperCol={{ span: 4 }}
                    layout={'horizontal'}
                    initialValues={{ remember: false }}
                    autoComplete="on"
                >
                    <Form.Item
                        className='mb-2.5'
                        label="Search"
                        name="search"
                    >
                        <AutoComplete
                            options={CATEGORIES}
                            style={{ width: 200 }}
                            onSelect={onSearch}
                            onSearch={onSearch}
                            placeholder="input here"
                            value={searchText}
                            allowClear={true}
                        />
                    </Form.Item>
                </Form>
                <div className='flex-1 overflow-auto'>
                    <PhotosList list={searchResults} />
                </div>
            </div>
        </section>
    </article>
}

export default SearchResultsPage