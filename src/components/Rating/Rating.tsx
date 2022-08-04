import React from 'react'
type RatingType = {
    value: number
}

function Rating({ value }: RatingType) {

    if (value === 0) {
        return (
            <div>
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
            </div>);
    }
    else if (value === 1) {
        return (
            < div >
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
            </div >
        );
    }
    else if (value === 2) {
        return (
            < div >
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
            </div >
        );
    }
    else if (value === 3) {
        return (
            < div >
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />
            </div >
        );
    }
    else if (value === 4) {
        return (
            < div >
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={false} />
            </div >
        );
    }
    else if (value === 5) {
        return (
            < div >
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
            </div >
        );
    } else {
        return <div>Please write number from 0-5</div>
    }

}
type StarPropsType = {
    selected: boolean
}
function Star({ selected }: StarPropsType) {

    if (selected === true) {
        return (<b><span>star</span></b>)
    } else {
        return <span>star</span>;
    }

}



export default Rating