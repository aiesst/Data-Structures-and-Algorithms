/*
 * @Author: yt.gan 
 * @Date: 2018-04-13 10:19:13 
 * @Last Modified by:   yt.gan 
 * @Last Modified time: 2018-04-13 10:19:13 
 */

 
function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
    }


    this.addEdge = function(v, w) {
        //添加两个点和一个边
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    this.showGraph = function() {
        for (var i = 0; i < this.vertices; ++i) {
            console.log(i + "->");
            for (var j = 0; j < this.vertices; ++j) {
                if (this.adj[i][j] != undefined) {
                    console.log(this.adj[i][j] + ' ');
                }
            }
        }
    }

    //一 深度优先
    //访问标志位
    this.marked = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }

    this.depthFirst = function(v) {
        this.marked[v] = true;
        if (this.adj[v] != undefined) {
            console.log("Depth First：" + v);
        }
        for (var w in this.adj[v]) {
            //从0开始，然后搜索0下面的顶点，依次下去
            if (!this.marked[this.adj[v][w]]) {
                this.depthFirst(this.adj[v][w]);
            }
        }
    }

    //二 广度优先
    //1.查找与当前顶点相邻的未访问顶点，添加到已访问队列中去；
    //2.从图中取下个顶点，继续添加；
    //3.将所有添加到队列中去；

    this.breadthFirst = function(s) {
        var queue = [];
        this.marked[s] = true;
        //添加到队尾
        queue.push(s);
        while (queue.length > 0) {
            //从队首开始移除
            var v = queue.shift();
            if (this.adj[v] != undefined) {
                console.log("Breadth First:" + v);
            }
            for (var w in this.adj[v]) {
                if (!this.marked[this.adj[v][w]]) {
                    this.marked[this.adj[v][w]] = true;
                    queue.push(this.adj[v][w]);
                }
            }
        }
    }

    //广度优先搜索最短路径
    this.edgeTo = [];
    this.pathTo = function(v) {
        var source = 0;
        if (!this.marked[v]) {
            return undefined;
        }
        var path = [];
        for (var i = v; i != source; i = this.edgeTo[i]) {
            path.push(i);
        }
        path.push(source);
        return path;
    }



}

var myGraph = new Graph(5);
myGraph.addEdge(0, 1);
myGraph.addEdge(0, 2);
myGraph.addEdge(1, 3);
myGraph.addEdge(2, 4);


/******************************* */
myGraph.breadthFirst(0);
// Breadth First:0
// Breadth First:1
// Breadth First:2
// Breadth First:3
// Breadth First:4

/******************************* */
//myGraph.showGraph();
// 0->1 2 0和1 2相连
// 1->0 3 1和0相连
// 2->0 4 
// 3->1 
// 4->2


/****************************** */
//显示一个顶点到另外一个顶点的最短路径
var paths = myGraph.pathTo(3);

while (paths.length > 0) { //将路径循环找出
    if (paths.length > 1) {
        console.log(paths.pop() + "-");
    } else {
        console.log(paths.pop());
    }
}
//0-2-4


/******************************* */
//console.log(myGraph.adj);
//[ [ 1, 2 ], [ 0, 3 ], [ 0, 4 ], [ 1 ], [ 2 ] ]


/******************************* */
//myGraph.depthFirst(0);
// Depth First：0
// Depth First：1
// Depth First：3
// Depth First：2
// Depth First：4