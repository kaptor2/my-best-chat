import React from 'react';
import { Button } from './components';

export const App: React.FC = () => {
    return (
        <div className='App'>
            <Button type='primary' size="large" >This's button from antd</Button>
        </div>
    )
}