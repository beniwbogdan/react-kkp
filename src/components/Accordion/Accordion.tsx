import React from 'react'
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}
function Accordion({ titleValue, collapsed }: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={titleValue} />
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
export default Accordion;
