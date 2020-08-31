import React from 'react';

import './index.scss';

type TSubDocuments = {
    docs?: string[]
}

export const SubDocuments = ({ docs }: TSubDocuments) => {

    if (!docs?.length) return null;

    return (
        <div className='sub-documents'>
            {docs && docs.map((el, i) => <div key={i}><img alt ='test alt'  src={el} /></div>)}
        </div>
    )
}