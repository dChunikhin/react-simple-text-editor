import React from 'react';

export default function ActionButton(props) {
    const clickHandler = () => props.onAction(props.action) ;
    return <button onClick={clickHandler}>{props.children}</button>
};


