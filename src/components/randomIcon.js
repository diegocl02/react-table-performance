import React from 'react';

export const MakeIcon = (svgElement) => {
    let _props = svgElement.props

    return (props) =>
        <svg
            {...svgElement.props}

            preserveAspectRatio='xMidYMid meet'
            fill='currentColor'

            style={props.style}
            width={props.size || (props.style || {}).width}
            height={props.size || (props.style || {}).height}
            color={props.color || (props.style || {}).color}
            stroke={props.color || (props.style || {}).color}>

            {_props.children}
        </svg>

}

export const Eye = MakeIcon(
    <svg xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1" x="0px" y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100;"
        xmlSpace="preserve">
        <g>
            <path d="M50,73.5c9.2,0,19-3.9,28.5-11.2c7.1-5.5,11.5-10.9,11.7-11.1c0.6-0.7,0.6-1.8,0-2.5c-0.2-0.2-4.6-5.6-11.7-11.1   C69,30.3,59.2,26.5,50,26.5s-19,3.9-28.5,11.2C14.4,43.1,10,48.5,9.8,48.7c-0.6,0.7-0.6,1.8,0,2.5c0.2,0.2,4.6,5.6,11.7,11.1   C31,69.7,40.8,73.5,50,73.5z M14,50c4-4.5,18.8-19.5,36-19.5c17.2,0,32,15,36,19.5c-4,4.5-18.8,19.5-36,19.5   C32.8,69.5,18,54.5,14,50z"></path><path d="M68.5,50c0-10.5-8.3-19-18.5-19s-18.5,8.5-18.5,19S39.8,69,50,69S68.5,60.5,68.5,50z M35.5,50c0-8.3,6.5-15,14.5-15   s14.5,6.7,14.5,15c0,8.3-6.5,15-14.5,15S35.5,58.3,35.5,50z">
            </path>
        </g>
    </svg>
)