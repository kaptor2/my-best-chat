import React from 'react';

import './index.scss';


type TAudioWave = {
    tones: number[];
    _id: string,
    duration?: number,
    currentTime?: number,
    animRef: React.RefObject<SVGLinearGradientElement>
}

export const AudioWave = ({ tones, _id, animRef }: TAudioWave) => {
    
    return (
        <div className="AudioWave">
            <svg height="55px" width='185px' xmlns="http://www.w3.org/2000/svg">
                    <linearGradient ref={animRef} id={`grad${_id}`} x1="0" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#39EB83" stopOpacity="1" />
                        <stop  offset="100%" stopColor="#39EB83" stopOpacity="1" />
                        <stop  offset="100%" stopColor="#D9DBE1" stopOpacity="1" />
                        <stop offset="100%" stopColor="#D9DBE1" stopOpacity="1" />
                    </linearGradient>
          
                <g fill={`url(#grad${_id})`} stroke={`url(#grad${_id})`}>
                    {tones.map((el, i) => {
                        return <rect key={i}
                            x={`${5 * (i + 1)}px`}
                            y={`${el ? ((100 - el + 5) / 2) : (45)}%`}
                            width="1px"
                            height={`${el ? (el - 10) : (5)}%`}
                            rx="1px"
                            ry="1px"
                            strokeWidth="2"
                        />
                    })}

                </g>
            </svg>
        </div>
    )
}