// import React from 'react';
import View1 from './view1';
import React, { useContext } from 'react'
// import { useState } from 'react'

function OutputTest() {

    let count = 333;

    // const [countValue, setCountValue] = useState();

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>OutputTest1</h1>
            <UserCount.Provider value={count}>
                <View1 />
            </UserCount.Provider>
        </div>
    );
}

export default OutputTest;

export const UserCount = React.createContext(223);