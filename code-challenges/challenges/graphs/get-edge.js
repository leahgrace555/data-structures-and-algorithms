const { Vertex, Edge, Graph } = require('./graph.js');


'use strict';
function getEdge(graph, array){
    let edgeArray = [];
    graph.adjacencyList.forEach((value, key, map) => {
        for(let j = 0; j < value.length; j++){
            edgeArray.push({key: key.value, value: value[j].vertex.value, vertex: key, edge: value[j].weight})
        }
    })
    console.log(edgeArray)
    let totalCost = 0;
    let arrayIndex = 0;
    let count = 0;
    for(let i = 0; i < edgeArray.length; i++){
        // console.log(array[arrayIndex], edgeArray[i].key)
        // console.log(array[arrayIndex+1], edgeArray[i].value)
        if(array[arrayIndex] === edgeArray[i].key && array[arrayIndex+1] === edgeArray[i].value){
            totalCost += edgeArray[i].edge
            arrayIndex++;
            count++;
            console.log(arrayIndex, array.length);
            if(arrayIndex === (array.length-1)){
                break;
            }
        }
    }
    if(!totalCost || count !== array.length-1){
        totalCost = 0;
        return {totalCost, false: false}
    }
    return {totalCost, true: true};
}



module.exports = getEdge;