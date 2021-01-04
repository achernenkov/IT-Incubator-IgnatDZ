import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import './HW11Style.css'

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const setMinValue = (newMinValue: number) => {
        setValue1(newMinValue)
    }

    const setMaxValue = (newMaxValue: number) => {
        setValue2(newMaxValue)
    }

    let min:number = value1
    let max: number = value2
    let disabled: boolean

    if (value2 <= value1){
        setValue1(max - 1)
        if(value2 === 1){
            disabled = true
        }else {
            disabled = false
        }
    }

    return (
        <div>
            <hr/>
            homeworks 11

            <div className='HW11'>
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={setMinValue}
                    minValue = {min}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    onChangeRangeMin={setMinValue}
                    onChangeRangeMax={setMaxValue}
                    minValue = {min}
                    maxValue = {max}
                />
                <span>{value2}</span>
            </div>
        </div>
        </div>
    );
}

export default HW11;
