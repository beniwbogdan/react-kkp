import React, { useState } from 'react'
// type RatingType = {
//     //  value: number
//     onClick: () => void
// }

function Rating() {
    let [value, setValue] = useState(0);

    return (
        <>
            <Star selected={value > 0} /> <button onClick={() => {
                setValue(1);
            }}> 1</button>
            <Star selected={value > 1} /> <button onClick={() => {
                setValue(2);
            }}> 2</button>
            <Star selected={value > 2} /> <button onClick={() => {
                setValue(3);
            }}>3 </button>
            <Star selected={value > 3} onClick={setValue(4)} />
            <Star selected={value > 4} /> <button onClick={() => {
                setValue(5);
            }}>5 </button>
        </>
    );
}

type StarPropsType = {
    selected: boolean
}
function Star({ selected }: StarPropsType) {
    return selected ? <b><span>star</span></b> : <span>star</span>
}



export default Rating;