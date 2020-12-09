const { Vertex, Edge, Graph } = require('./graph.js');

describe('testing challenge 37', ()=> {
  it('should be able to get a vertex neighbors', ()=> {

    const graph = new Graph();

    const A = graph.addVertex('Pandora');
    const B = graph.addVertex('Metroville');
    const C = graph.addVertex('Narnia');
    const D = graph.addVertex('Naboo');

    graph.addEdge(A, B, weight=82);
    graph.addEdge(B,C, weight=37);
    graph.addEdge(C,D,weight=250);
    graph.addEdge(B,D,weight = 26);

    console.log(graph.getNeighbors(A));

    graph.getNeighbors(A).forEach(thing => {
      console.log(thing.vertex.value)
    })

  })
})