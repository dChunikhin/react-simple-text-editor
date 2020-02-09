import React from 'react';
import ActionButton from "./ActionButton";
import './Controls.css';

export default function Controls(props) {
    return (
        <div className={'controls'}>
            <ActionButton action={'bold'} onAction={props.onAction}><b>B</b></ActionButton>
            <ActionButton action={'italic'} onAction={props.onAction}><i>I</i></ActionButton>
            <ActionButton action={'underline'} onAction={props.onAction}><u>U</u></ActionButton>
        </div>
    )
};


