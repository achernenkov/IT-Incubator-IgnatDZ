import React from "react";

type SuperDoubleRangePropsType = {
    onChangeRangeMin: (value: number) => void
    onChangeRangeMax: (value: number) => void
    minValue:number
    maxValue:number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRangeMin, onChangeRangeMax, minValue ,maxValue
    }
) => {
    // сделать самому, можно подключать библиотеки
    return (
        <>
            <input type="range" min="0" max="100" value={minValue} className="slider" id="lower" onChange={(event => onChangeRangeMin(+event.currentTarget.value))}/>
            <input type="range" min="0" max="100" value={maxValue} className="slider" id="higher" onChange={(event => onChangeRangeMax(+event.currentTarget.value))}/>
        </>
    );
}

export default SuperDoubleRange;
