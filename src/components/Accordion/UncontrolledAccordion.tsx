import React, { useState } from 'react'
type AccordionPropsType = {
    titleValue: string
}



function UncontrolledAccordion({ titleValue }: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(true);
    return (
        <div>
            <AccordionTitle title={titleValue} /><button onClick={() => {
                setCollapsed(!collapsed)
            }}>TOGGLE</button>
            {!collapsed && <AccordionBody />}

        </div>
    )
}
type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle({ title }: AccordionTitlePropsType) {
    return (
        <div>
            <h3>{title}</h3>
        </div>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
export default UncontrolledAccordion;
