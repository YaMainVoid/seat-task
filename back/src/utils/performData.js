import culcAdaptiveContainer from './culcAdaptiveContainer';

export default function performData(components) {
    if (!components.length) {
        return null;
    }

    let data = [];

    let { width, height, shiftX, shiftY } = culcAdaptiveContainer(components);
    data.push({
        type: 'container',
        width,
        height
    })

    components.forEach(component => {
        data.push(component);
        data[data.length - 1].top  = data[data.length - 1].top - shiftY;
        data[data.length - 1].left = data[data.length - 1].left - shiftX;
    });
    return data;
}