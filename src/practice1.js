const parseData = (input) => {
    let {data: records, column: columns} = input

    let result = [];
    
    for(let record of records) {
        let json = {};
        for(let i in columns) {
            json[columns[i].name] = record[i];
        }
        result.push(json)
    }
    return result;
}

export { parseData };
