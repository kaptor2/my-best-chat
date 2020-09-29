import React from 'react';

import './index.scss';

type TAvatar = {
    fullName: string,
    src?: string
}

export const Avatar: React.FC<TAvatar> = ({ fullName, src }) => {

    const genCalcColor = (text: string): number => {
        return ((text.charCodeAt(0) - 1040) * 6) + ((text.charCodeAt(1) - 1040) * 6);
    }

    const gradientAvatar = (fullName: string): JSX.Element => {
        const upFullName = fullName ? fullName.toUpperCase() : "Неизвестный пользователь";
        const hOfHslaColor = genCalcColor(upFullName);
        const cssText = `linear-gradient(
            315deg, 
            hsla( ${hOfHslaColor}, 72%, 65%, 1) 0%,
            hsla( ${hOfHslaColor}, 72%, 65%, 0.3) 100%)`
        return <div className='avatar'
            style={{ background: cssText }}>
            {`${upFullName[0]}${upFullName[1]}`}
        </div>
    }

    return (
        src
            ? <img className='avatar' src={src} alt={`avatar - ${fullName}`}></img>
            : gradientAvatar(fullName)
    )
}