import React from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean

}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion render")

    const collapsed = false

    return <div>
        <AccordionTitle title={props.titleValue} /><button>TOGLE</button>
        {!collapsed && <AccordionBody/>}
    </div>
}


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType)  {
    console.log("AccordionTitle YEAP")
    return (
        <h3>--- {props.title} ---</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody YEAP")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;