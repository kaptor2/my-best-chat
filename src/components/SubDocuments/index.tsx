import React from 'react';

import './index.scss';

type TSubDocuments = {
    docs?: {
        _id: string,
        url: string
    }[]
}

export const SubDocuments: React.FC<TSubDocuments> = ({ docs }) => {
    return (
        <div className='sub-documents'>
            {docs && docs.map((el) => <div key={el._id}><img alt ='test alt'  src={el.url} /></div>)}
        </div>
    )
}