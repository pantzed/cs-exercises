function Queue() {
}

Queue.prototype.enqueue = function(item) {
  Array.prototype.unshift.apply(this, arguments);
};

Queue.prototype.dequeue = function() {
  return Array.prototype.pop.apply(this);
};

function Graph(data) {
  this.data = data;
  this.vertices = {};
}

Graph.prototype.createGraph = function() {
  this.vertices = {};
  this.data.forEach((el, index) => {
    let arr = Array.from(el);
    this.vertices[index] = {edges: arr};
  });
  return this;
};

Graph.prototype.addVertexWithEdges = function(edges) {
  const index = Object.keys(this.vertices).length;
  this.vertices[index] = {edges: edges};

  let newVertex = this.vertices[index];

  for (let i=0; i<newVertex.edges.length; i++) {
    this.vertices[newVertex.edges[i]].edges.push(index);
  }
};

Graph.prototype.deleteVertex = function(vertexToDelete) {
let vertices = this.vertices;

  for (let vertex in vertices) {
    if (vertices[vertex].edges.includes(vertexToDelete)) {
      let remove = vertices[vertex].edges.indexOf(vertexToDelete);
      vertices[vertex].edges.splice(remove, 1);
    }
  }

  delete this.vertices[vertexToDelete];
};

Graph.prototype.initializeDistances = function(inputVertices) {
};

Graph.prototype.getDistances = function(source) {
};

Graph.prototype.shortestPath = function(start,end) {
};

module.exports = Graph
