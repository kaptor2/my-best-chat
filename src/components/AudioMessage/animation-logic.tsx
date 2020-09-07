import React from 'react';
import { format, addSeconds } from 'date-fns';

type TLoop = {
    audioObj: React.RefObject<HTMLAudioElement>,
    waveRef: React.RefObject<SVGSVGElement>,
    timeRef: React.RefObject<any>,
    duration: number,
    setPlay: React.Dispatch<React.SetStateAction<boolean>>
}

export const loop = (arg: TLoop) => {

    const { audioObj, waveRef, timeRef, duration, setPlay } = arg;

    audioObj.current && !audioObj.current.paused &&
        window.requestAnimationFrame(() => loop(arg));

    const anim = audioObj.current && (audioObj.current.currentTime / audioObj.current.duration) * 100;

    switch (anim) {
        case 100: {
            setPositionWave(0, waveRef);
            setPositionTime(duration, timeRef);
            setPlay(false);
            break
        }
        default: {
            anim && setPositionWave(anim, waveRef);
            if (audioObj.current && timeRef.current.innerText !== formattedTime(audioObj.current.currentTime).toString())
                setPositionTime(audioObj.current.currentTime, timeRef);
        }
    }
}

export const setPositionWave = (precent: number | undefined, refElement: React.RefObject<any>) => {
    refElement.current?.firstElementChild?.setAttribute("x2", `${
        isNaN(Number(precent))
            ? 0
            : precent
        }%`);
}

// Меняем время
export const setPositionTime = (millisecond: number, refElement: React.RefObject<any>) => {
    refElement.current.innerText = formattedTime(millisecond).toString()
}

export const formattedTime = (seconds: number) => {
    var helperDate = addSeconds(new Date(0), seconds);
    return format(helperDate, 'mm:ss');
}

export const rewind = (
    e: React.MouseEvent,
    waveRef: React.RefObject<SVGSVGElement>,
    audioObj: React.RefObject<HTMLAudioElement>,
    timeRef: React.RefObject<any>,
) => {

    e.stopPropagation();
    const widthComponent: number = Number(waveRef.current?.parentElement?.offsetWidth);
    const percentRewind: number = (e.nativeEvent.offsetX / widthComponent);
    audioObj.current && (audioObj.current.currentTime = audioObj.current.duration * percentRewind);
    setPositionWave(percentRewind * 100, waveRef);
    audioObj.current && setPositionTime(audioObj.current.currentTime, timeRef);
}