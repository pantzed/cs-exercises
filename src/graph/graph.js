'use strict';

let GraphEdge = require('./graph-edge');
let GraphNode = require('./graph-node');

//This represents an undirected Graph
function Graph() {

  this.nodes = [];
  this.edges = [];

  // Helper function to find a node in nodes
  this.findNode = function (value) {
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].value === value) {
        return this.nodes[i];
      }
    }
    return null;
  };

  // Add a node to the list of nodes
  this.addNode = function(value) {
    if (this.findNode(value) !== null) {
      return;
    }
    this.nodes.push(new GraphNode(value));
  };

  // Add an edge between 2 nodes and give it a weight
  this.addEdge = function(source, destination, weight) {
    let first = this.findNode(source);
    let second = this.findNode(destination);
    if (first === null || second === null) {
      return;
    }
    this.edges.push(new GraphEdge(first, second, weight));
  };

  // Get the size of the graph by returning how many nodes are in the graph
  this.size = function() {
    if (this.nodes) {
      return this.nodes.length;
    }
    return -1;
  };

  // Find the total number of edges in the graph
  this.numEdges = function() {
    if (this.edges) {
      return this.edges.length;
    }
    return -1;
  };

  // Find the total weight of the graph by adding up the weights of each edge
  this.weight = function() {
    let totalWeight = 0;
    if (this.edges) {
      this.edges.forEach((edge) => {
        totalWeight += edge.weight;
      });
      return totalWeight;
    }
    return -1;
  };

  // Find all node values a node is connected to.
  // Return all node values at the other side of an edge of the target node
  // Remember that edges are not directional: A -> B also implies B -> A
  this.findNeighbors = function(value) {
    let neighbors = [];
    this.edges.forEach((edge) => {
      if (edge.first.value === value && edge.second.value) {
        neighbors.push(edge.second.value);
      }
      else if (edge.second.value === value && edge.first.value) {
        neighbors.push(edge.first.value);
      }
    });
    return neighbors;
  };

  // Stretch!
  // Find the optimal route from start to finish
  // Return each edge required to traverse the route
  // Remember that edges are not directional: A -> B also implies B -> A
  this.findPath = function(start, finish) {
    const visited = [];
    const queue = [[[start], 0]];
    let found = false;

    while (queue.length > 0) {

      let path = queue.shift();
      let index = path[0].length - 1;
      let current = path[0][index];

      visited.push(current);

      for (let i=0; i<this.edges.length; i++) {

        let first = this.edges[i].first;
        let second = this.edges[i].second;

        if (first.value === current && second.value === finish) {
          let newPath = path[0].concat([second.value]);
          let newWeight = path[1] + this.edges[i].weight;
          let next = [newPath, newWeight];
          path = [{first: {value: next[0][1]}, second: {value: next[0][0]}, weight: 0}, {first: {value: finish}, second: {value: next[0][1]}, weight: next[1]}];
          this.nodes = path;
          return this.nodes;
        }
        if (second.value === current && first.value === finish) {
          let newPath = path[0].concat([first.value]);
          let newWeight = path[1] + this.edges[i].weight;
          let next = [newPath, newWeight];
          path = [{first: {value: next[0][1]}, second: {value: next[0][0]}, weight: 0}, {first: {value: finish}, second: {value: next[0][1]}, weight: next[1]}];
          this.nodes = path;
          return this.nodes;
        }
        else {
          if (first.value === current) {
            let newPath = path[0].concat([second.value]);
            let newWeight = path[1] + this.edges[i].weight;
            let next = [newPath, newWeight];
            queue.push(next);
          }
          else if (second.value === current) {
            let newPath = path[0].concat([first.value]);
            let newWeight = path[1] + this.edges[i].weight;
            let next = [newPath, newWeight];
            queue.push(next);
          }
        } 
      }
    }
  };

  // Return a list of any nodes that are orphans.
  // An orphan is any node with no edges.
  this.findOrphans = function() {

    let orphans = this.nodes.map((node) => {
      return node.value;
    });

    for (let i=0; i<this.nodes.length; i++) {
      let current = this.nodes[i].value;
      for (let j=0; j<this.edges.length; j++) {
        if (current === this.edges[j].first.value || current === this.edges[j].second.value) {
          let index = orphans.indexOf(current);
          orphans.splice(index, 1);
        }
      }
    }

    return orphans;

  };

  this.print = function() {
    for (let i = 0; i < this.edges.length; i++) {
      let edge = this.edges[i];
      // console.log(edge.first.value, '->', edge.second.value, edge.weight, 'mi');
    }
  };

}

Graph.prototype.pathWeight = function(path) {
  let sum = 0;
  for (let i = 0; i < path.length; i++) {
    sum += path[i].weight;
  }
  return sum;
};

/* BFS for Graph that returns a list of node values of a shortest path */
this.bfsFindPath = function(start, finish) {
  const visited = [];
  const queue = [[start]];
  let found = false;

  while (queue.length > 0 && found === false) {

    let path = queue.shift();
    visited.push(path);

    this.edges.forEach((edge) => {
      if (found === false) {
        if (edge.first.value === finish || edge.second.value === finish) {
          path.push(finish);
          found = true;
          return;
        }
        else {
          if (edge.first.value === path[path.length-1]) {
            if (!visited.includes(path) || !queue.includes(path)) {
              path.push(edge.second.value)
              queue.push(path);
            }
          }
          else if (edge.second.value === path[path.length-1]) {
            if (!visited.includes(path) || !queue.includes(path)) {
              path.push(edge.first.value)
              queue.push(path);
            }
          }
        }
      }
    });
    if (found === true) {
      return path; 
    }
  }
};

module.exports = Graph;
