/*
 * @Author: yt.gan 
 * @Date: 2018-04-13 08:48:02 
 * @Last Modified by: yt.gan
 * @Last Modified time: 2018-04-13 08:55:58
 */

function BinaryTree() {
    var Node = function(key) {
        this.key = key; //节点值
        this.left = null; //左孩子
        this.right = null; //右孩子
    }
    var root = null;
    //二叉树的构造
    var insertNode = function(node, newNode) {
        //如果新节点比老节点小
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                //把新节点插入老节点的左边
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                //把新节点插入老节点的右边
                insertNode(node.right, newNode);
            }
        }
    };

    this.insert = function(key) {
        //插入节点
        var newNode = new Node(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    //1.中序遍历：升序排序
    //过程:左根右 1,3，4,6,7,8,10,13,14.
    var inOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            //callback回调函数，主函数运行完了，回头调用回调函数，
            //回调函数运行完了，从调用回调函数的地方接着运行下去。
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    };
    //中序遍历：升序排序
    this.inOrderTraverse = function(callback) {
        //中序遍历接口
        inOrderTraverseNode(root, callback);
    };


    //2.前序遍历
    //过程:跟左右 8,3,1,6,4,7,10,14,13
    var preOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    };

    //前序遍历
    this.preOrderTraverse = function(callback) {
        preOrderTraverseNode(root, callback);
    };


    //3.后序遍历
    //过程：左右根 1,4,7,6,3,13,14,10,8
    var postOrderTraverseNode = function(node, callback) {
            if (node !== null) {
                postOrderTraverseNode(node.left, callback);
                postOrderTraverseNode(node.right, callback);
                callback(node.key);
            }
        }
        //后序遍历
    this.postOrderTraverse = function(callback) {
        postOrderTraverseNode(root, callback);
    }

    //4.最大值:一直右子树的查找
    //5.最小值:一直左子树的查找
    //6.给定值:比较和当前值的大小
    var minNode = function(node) {
        //查找最小值
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
    };
    this.min = function() {
        return minNode(root);
    };

    var maxNode = function(node) {
        //查找最大值
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
    };
    this.max = function() {
        return maxNode(root);
    };

    var preValueNode = function(key, node) {
        //查找给定值
        if (node === null) {
            //节点为空表示查找失败
            return false;
        };
        if (key > node.key) {
            return preValueNode(key, node.right);
        } else if (key < node.key) {
            return preValueNode(key, node.left);
        } else {
            //表示查找成功
            return true;
        }
    };

    this.preValue = function(key) {
        return preValueNode(key, root);
    };


    //删除节点
    var findMinNode = function(node) {
        //为了删除中间节点(有左右子树)
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node;
        }
        return null;
    }

    var removeNode = function(key, node) {
        if (node === null) {
            return null;
        }
        if (key > node.key) {
            node.right = removeNode(key, node.right);
        } else if (key < node.key) {
            node.left = removeNode(key, node.left);
        } else {
            //7.删除指定叶子节点
            if (node.left === null && node.right === null) {
                //删除节点
                node = null;
                return node;
            }
            //8.删除中间节点-单子树
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            //9.删除中间节点-两子树
            //找到删除节点的左子树下面的最小右子树
            //将最小右子树替换删除节点
            var aux = findMinNode(node.right); //找到最小右子树
            node.key = aux; //替换删除节点
            node.right = removeNode(node.right, aux); //删除作为替换作用的那个叶子节点
            return node;
        }
    };

    this.remove = function(key) {
        return removeNode(root, key);
    };

};

var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
var binaryTree = new BinaryTree();
nodes.forEach((key) => {
    binaryTree.insert(key);
});

//遍历
var callback = function(key) {
    //回掉函数
    console.log(key);
};

binaryTree.inOrderTraverse(callback); //中序
binaryTree.preOrderTraverse(callback); //前序
binaryTree.postOrderTraverse(callback); //后序
console.log("min node is:" + binaryTree.min());
console.log("max node is:" + binaryTree.max());
console.log(binaryTree.preValue(7) ? 'key 7 is found' : 'key 7 is not found');
console.log(binaryTree.preValue(9) ? 'key 9 is found' : 'key 9 is not found');
binaryTree.remove(1);
binaryTree.remove(10);
binaryTree.remove(3);