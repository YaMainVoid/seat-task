function getTopLeftPoint(components) {
    let smallerX = components[0].left;
    let smallerY = components[0].top;

    components.forEach(component => {
        let x = component.left;
        let y = component.top;

        if (x < smallerX) {
            smallerX = x;
        }

        if (y < smallerY) {
            smallerY = y;
        }
    })

    return {
        smallerX,
        smallerY
    }
}

function getBottomRightPoint(components) {
    let higherX = components[0].left;
    let higherY = components[0].top;

    components.forEach(component => {
        let x = component.left + component.width;
        let y = component.top + component.height;

        if (x > higherX) {
            higherX = x;
        }

        if (y > higherY) {
            higherY = y;
        }
    })

    return {
        higherX,
        higherY
    }
    
}

export default (components) => {
    let { smallerX, smallerY } = getTopLeftPoint(components);
    let { higherX, higherY } = getBottomRightPoint(components);

    let width = higherX - smallerX;
    let height = higherY - smallerY;

    return {
        shiftX: smallerX,
        shiftY: smallerY,
        width,
        height
    }
}