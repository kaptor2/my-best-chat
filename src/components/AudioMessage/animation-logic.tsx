import React from 'react';
import { format, addSeconds } from 'date-fns';

type TLoop = {
    audioObj: HTMLAudioElement,
    waveRef: React.RefObject<SVGSVGElement>,
    timeRef: React.RefObject<any>,
    duration: number,
    setPlay: React.Dispatch<React.SetStateAction<boolean>>
}

export const loop = (arg: TLoop) => {

    const { audioObj, waveRef, timeRef, duration, setPlay } = arg;

    !audioObj?.paused &&
        window.requestAnimationFrame(() => loop(arg));

    const anim = audioObj && (audioObj.currentTime / audioObj.duration) * 100;

    switch (anim) {
        case 100: {
            setPositionWave(0, waveRef);
            setPositionTime(duration, timeRef);
            setPlay(false);
            break
        }
        default: {
            setPositionWave(anim, waveRef)
            if (audioObj && timeRef.current?.innerText !== formattedTime(audioObj.currentTime).toString())
                setPositionTime(audioObj.currentTime, timeRef);
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
    audioObj: HTMLAudioElement,
    timeRef: React.RefObject<any>,
) => {

    e.stopPropagation();
    const WidthComponent: number = Number(waveRef.current?.parentElement?.offsetWidth);
    const percentRewind: number = (e.nativeEvent.offsetX / WidthComponent);
    audioObj.currentTime = audioObj.duration * percentRewind;
    setPositionWave(percentRewind * 100, waveRef);
    setPositionTime(audioObj.currentTime, timeRef);

}