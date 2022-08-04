import React from 'react'
type OnOffType = {
    on: boolean
}
const mainStyle = {
    display: "flex",
    marginTop: "5px",

}
const onStyle = {
    width: "50px",
    height: "30px",
    border: "1px solid black"
}
const offStyle = {
    width: "50px",
    height: "30px",
    border: "1px solid black"
}
const indicatorStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "red",
    border: "1px solid black"
}
function OnOff(props: OnOffType) {
    return (
        <div style={mainStyle}>
            <div style={indicatorStyle}></div>
            <div style={onStyle}></div>
            <div style={offStyle}></div>
        </div>
    )
}

export default OnOff