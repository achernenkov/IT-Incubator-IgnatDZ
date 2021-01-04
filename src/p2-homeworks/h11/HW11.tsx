import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import './HW11Style.css'

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const onChangeRange = (newMinValue: number) => {
        setValue1(newMinValue)
    }

    return (
        <div>
            <hr/>
            homeworks 11

            <div className='HW11'>
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>
        </div>
        </div>
    );
}

export default HW11;
