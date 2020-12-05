const { Vertex, Edge, Graph } = require('./graph.js');

describe('testing graph', ()=> {
  it('Return a breadth first traveral of the graph', ()=> {

    const graph = new Graph();

    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    const C = graph.addVertex('C');
    const D = graph.addVertex('D');
    const E = graph.addVertex('E');
    
    graph.addEdge(A, B);
    graph.addEdge(A, D);
    graph.addEdge(A, C);
    graph.addEdge(B, E);
    graph.addEdge(B, D);
    graph.addEdge(D, C);


    expect(graph.breadthFirst(A)).toEqual('ABDCE');

    

  })

  it('should return a depth first traveral of the graph', ()=> {

    const graph = new Graph();

    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    const C = graph.addVertex('C');
    const D = graph.addVertex('D');
    const E = graph.addVertex('E');
    
    graph.addEdge(A, B);
    graph.addEdge(A, D);
    graph.addEdge(A, C);
    graph.addEdge(B, E);
    graph.addEdge(B, D);
    graph.addEdge(D, C);


    expect(graph.recursiveDepthFirst(A)).toEqual('ABEDC')

    expect(graph.adjacencyList.get(A)).toBeTruthy();

  })

  it('should be able to add new vertices', ()=> {

    const graph = new Graph();

    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    const C = graph.addVertex('C');
    const D = graph.addVertex('D');
    const E = graph.addVertex('E');
    
    graph.addEdge(A, B);
    graph.addEdge(A, D);
    graph.addEdge(A, C);
    graph.addEdge(B, E);
    graph.addEdge(B, D);
    graph.addEdge(D, C);


    expect(graph.adjacencyList.get(A)).toBeTruthy();

  })

  it('should be able to add new adges', ()=> {

    const graph = new Graph();

    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    const C = graph.addVertex('C');
    const D = graph.addVertex('D');
    const E = graph.addVertex('E');
    
    let addedEdge = graph.addEdge(A,B);
    expect(addedEdge).toBeTruthy();

  })
})
