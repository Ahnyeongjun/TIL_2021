import React from 'react';

const Counter = ({ number, onIncrease, onDecrease }) => {
    return (
        <div>
            <h1>
                {number}
            </h1>
            <div>
                <buttom onClick={onIncrease}>+1</buttom>
                <buttom onClick={onDecrease}>-1</buttom>
            </div>
        </div>
    );
};
export default Counter;