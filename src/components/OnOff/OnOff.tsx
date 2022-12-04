import React from "react";

type PropsType = {
    on: boolean

}




function OnOff(props: PropsType) {

    const onStyle = {}
    const offStyle = {}
    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "15px",
        border: "1px solid black"
    }


    return (
        <div>
            <div></div>
            <div></div>
            <div style={indicatorStyle}></div>
        </div>
    )
}


export default OnOff