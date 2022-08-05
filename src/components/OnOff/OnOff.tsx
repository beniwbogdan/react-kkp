import React, { useState } from 'react'
type OnOffType = {
    //   on: boolean
}

function OnOff(props: OnOffType) {
    let [on, setOn] = useState(false);


    const mainStyle = {
        display: "flex",
        marginTop: "5px",

    }
    const onStyle = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: on ? "green" : "red",
        border: "1px solid black"
    }



    return (
        <div style={mainStyle}>
            <div style={indicatorStyle}></div>
            <div onClick={() => {
                setOn(!on)

            }} style={onStyle}>On</div>
            <div onClick={() => {
                setOn(!on)
            }} style={offStyle}>Off</div>
        </div>
    )
}

export default OnOff