import React from 'react';

export default function FooterIconos(props) {
    return (
        <a className="fb-ic text-light fa-2x py-sm-1 mx-3" href={props.item.iconoLink}>
            <i className={props.item.iconoClass}></i>
        </a>
    )
}

