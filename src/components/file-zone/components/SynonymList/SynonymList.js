import React, { Fragment } from 'react';
import './SynonymList.css';

export default function SynonymList(props) {

    const clickHandler = (event) => {
        props.onSelectedSynonym(event.target.textContent);
    };

    return (
        <Fragment>
            {!!props.items.length && <span>Synonyms</span>}
            <ul className={'synonym-list'}>
                {props.items.map((item, i) => {
                    return (
                        <li key={i} className={'synonym-list__item synonym'}>
                            <button className={'synonym-list__text'} onClick={clickHandler}>{item}</button>
                        </li>
                    )
                })}
            </ul>
        </Fragment>
    )
}
