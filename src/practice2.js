const combineArrays = (array1, array2, start, end) => {
    for(let i = start; i < end; i+=1) {
        array1.push(array2[i])
    }
    return array1;
}

const inject = (items, sections) => {
    
    let result = [];
    let i = 0;
    for(let section of sections) {
        let {content, index} = section;
        combineArrays(result, items, i, index);
        result.push(content);
        i = index;
    }
    combineArrays(result, items, i, items.length);

    return result;
}

export { inject };
