import React  from 'react';
import Python from '../../codeExamples/graphPython';
import CodeContainer from './CodeContainer';

function Dijkstras({ codeLanguageDict }) {
    const dstr = `
    Dijkstra’s algorithm is very similar to Prim’s algorithm for minimum spanning tree. Like Prim’s MST, we generate a SPT (shortest path tree) with given source as root. We maintain two sets, one set contains vertices included in shortest path tree, other set includes vertices not yet included in shortest path tree. At every step of the algorithm, we find a vertex which is in the other set (set of not yet included) and has a minimum distance from the source.
<br>
Below are the detailed steps used in Dijkstra’s algorithm to find the shortest path from a single source vertex to all other vertices in the given graph.
Algorithm<br>
1) Create a set sptSet (shortest path tree set) that keeps track of vertices included in shortest path tree, i.e., whose minimum distance from source is calculated and finalized. Initially, this set is empty.<br>
2) Assign a distance value to all vertices in the input graph. Initialize all distance values as INFINITE. Assign distance value as 0 for the source vertex so that it is picked first.<br>
3) While sptSet doesn’t include all vertices<br>
….a) Pick a vertex u which is not there in sptSet and has minimum distance value.<br>
….b) Include u to sptSet.<br>
….c) Update distance value of all adjacent vertices of u. To update the distance values, iterate through all adjacent vertices. For every adjacent vertex v, if sum of distance value of u (from source) and weight of edge u-v, is less than the distance value of v, then update the distance value of v.<br>
    `;
    return (
        <>
            <CodeContainer syntax={codeLanguageDict.dijkstras.syntax} code={Python.dijkstras} title={'Dijkstras Depth First Search'}
                           description={dstr}
            />
        </>
    )
}

function Directed({ codeLanguageDict }) {
    const dstr = `
    This code sample contains multiple directed graph algorithms.<br> 
    Detect Cycles: Given a directed graph, check whether the graph contains a cycle or not. Your function should return true if the given graph contains at least one cycle, else return false. For example, the following graph contains three cycles 0->2->0, 0->1->2->0 and 3->3, so your function must return true.<br>
    Build Matrix: Convert a graph into a 2d array. <br>
    Breadth First Search: Similar to Breadth First Traversal of a tree. The only catch here is, unlike trees, graphs may contain cycles, so we may come to the same node again. To avoid processing a node more than once, we use a boolean visited array. For simplicity, it is assumed that all vertices are reachable from the starting vertex.<br>
    Depth First Search: Similar to Depth First Traversal of a tree. The only catch here is, unlike trees, graphs may contain cycles, so we may come to the same node again. To avoid processing a node more than once, we use a boolean visited array.
    `;
    return (
        <>
            <CodeContainer syntax={codeLanguageDict.dijkstras.syntax} code={Python.directed} title={'Directed Graph Algorithms'}
                           description={dstr}
            />
        </>
    )
}

function UnDirected({ codeLanguageDict }) {
    const dstr = `
    This code sample contains multiple undirected graph algorithms.<br> 
    Detect Cycles: Given a directed graph, check whether the graph contains a cycle or not. Your function should return true if the given graph contains at least one cycle, else return false. For example, the following graph contains three cycles 0->2->0, 0->1->2->0 and 3->3, so your function must return true.<br>
    Build Matrix: Convert a graph into a 2d array. <br>
    Count Islands: Given a boolean 2D matrix, find the number of islands. A group of connected 1s forms an island. For example, the below matrix contains 5 islands.<br>
    Depth First Search: Similar to Depth First Traversal of a tree. The only catch here is, unlike trees, graphs may contain cycles, so we may come to the same node again. To avoid processing a node more than once, we use a boolean visited array.
    `;
    return (
        <>
            <CodeContainer syntax={codeLanguageDict.dijkstras.syntax} code={Python.undirected} title={'Undirected Graph Algorithms'}
                           description={dstr}
            />
        </>
    )
}

function Flood({ codeLanguageDict }) {
    const dstr = `
    Given a matrix of size NxM where every element is either 'O' or 'X',
    replace 'O' with 'X' if surrounded by 'X'. A 'O' (or a set of 'O') is
    considered to be by surrounded by 'X' if there are 'X' at locations just
    below, just above, just left and just right of it.
    `;
    return (
        <>
            <CodeContainer syntax={codeLanguageDict.dijkstras.syntax} code={Python.flood} title={'Undirected Graph Algorithms'}
                           description={dstr}
            />
        </>
    )
}

function Weighted({ codeLanguageDict }) {
    const dstr = `
    Given a matrix of size NxM where every element is either 'O' or 'X',
    replace 'O' with 'X' if surrounded by 'X'. A 'O' (or a set of 'O') is
    considered to be by surrounded by 'X' if there are 'X' at locations just
    below, just above, just left and just right of it.
    `;
    return (
        <>
            <CodeContainer syntax={codeLanguageDict.dijkstras.syntax} code={Python.kruskal} title={'Kruskal’s Minimum Spanning Tree Algorithm'}
                           description={`Given a connected and undirected graph, a spanning tree of that graph is a subgraph that is a tree and connects all
                           the vertices together. A single graph can have many different spanning trees. A minimum spanning tree (MST) or minimum weight spanning tree
                           for a weighted, connected and undirected graph is a spanning tree with weight less than or equal to the weight of every other spanning tree.
                           The weight of a spanning tree is the sum of weights given to each edge of the spanning tree.`}
            />
            <CodeContainer syntax={codeLanguageDict.dijkstras.syntax} code={Python.prims} title={'Prim’s Minimum Spanning Tree '}
                           description={`The idea behind Prim’s algorithm is simple, a spanning tree means all vertices must be connected. So the two disjoint subsets
                           (discussed above) of vertices must be connected to make a Spanning Tree. And they must be connected with the minimum weight edge to make it a
                            Minimum Spanning Tree.`}
            />
            <CodeContainer syntax={codeLanguageDict.dijkstras.syntax} code={Python.union} title={'Union'}
                           description={''}
            />
        </>
    )
}

export default function Graphs ({ selected, codeLanguageDict }) {
    return (
        <>
            { selected === 'Dijkstras' && <Dijkstras codeLanguageDict={codeLanguageDict}/> }
            { selected === 'Directed Graphs' && <Directed codeLanguageDict={codeLanguageDict}/> }
            { selected === 'Undirected Graphs' && <UnDirected codeLanguageDict={codeLanguageDict}/> }
            { selected === 'Flood Fill' && <Flood codeLanguageDict={codeLanguageDict}/> }
            { selected === 'Weighted Graphs' && <Weighted codeLanguageDict={codeLanguageDict}/> }
        </>
    );
}


