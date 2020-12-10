const { Vertex, Edge, Graph } = require('./graph.js');
const getEdge = require('./get-edge.js')

// describe('testing challenge 37', ()=> {
//   it('should be able to get a vertex neighbors', ()=> {

//     const graph = new Graph();

//     const A = graph.addVertex('Pandora');
//     const B = graph.addVertex('Metroville');
//     const C = graph.addVertex('Narnia');
//     const D = graph.addVertex('Naboo');

//     graph.addEdge(A, B, weight=82);
//     graph.addEdge(B,C, weight=37);
//     graph.addEdge(C,D,weight=250);
//     graph.addEdge(B,D,weight = 26);

    

//     // graph.getNeighbors(A).forEach(thing => {
//     //   console.log(thing.vertex.value)
//     // })

//     //console.log(graph.depthFirst(A))

//     // graph.depthFirst(A).forEach( thing => {
//     //   console.log(thing.value)
//     // })


//     getEdge(graph,[1,2])


//       //console.log(graph.adjacencyList.Map)
//   })
// })

const graph = new Graph();
    const A = graph.addVertex('Pandora');
    const B = graph.addVertex('Metroville');
    const C = graph.addVertex('Narnia');
    const D = graph.addVertex('Naboo');
    const E = graph.addVertex('Corresant');
    graph.addEdge(A, B, weight=82);
    graph.addEdge(B,C, weight=37);
    graph.addEdge(C,D, weight=250);
    graph.addEdge(B,D, weight = 26);
    graph.addEdge(A,E, weight = 50000);
    const cities = ['Pandora', 'Metroville']
describe('getEdge', () => {
    it('happy path', () => {
        expect(getEdge(graph, cities)).toEqual({totalCost: 82, true: true});
        expect(getEdge(graph, ['Pandora', 'Metroville', 'Naboo'])).toEqual({totalCost: 108, true: true})
        expect(getEdge(graph, ['Pandora', 'Naboo'])).toEqual({totalCost: 0, false: false})
        expect(getEdge(graph, ['Pandora', 'Metroville', 'Corresant'])).toEqual({totalCost: 0, false: false})
    })
})