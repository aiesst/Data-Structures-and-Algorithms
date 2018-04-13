/*
 * @Author: yt.gan 
 * @Date: 2018-04-03 15:41:06 
 * @Last Modified by: yt.gan
 * @Last Modified time: 2018-04-04 16:18:00
 */


function Node(element) {
    //节点描述，当前节点和下一节点
    this.element = element;
    this.next = null;
}


function LList() {

    this.head = new Node("head");
    this.find = function(item) {
        //循环查找节点
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    this.insert = function(newElement, item) {
        //插入节点
        var newNode = new Node(newElement);
        //寻找节点，查入所寻节点的后面
        var current = this.find(item);
        //所寻节点后面的值赋给新节点后面的值
        newNode.next = current.next;
        //然后新节点替换掉所寻节点的后面的节点(落井下石)
        current.next = newNode;
    }

    this.display = function() {
        //显示所有节点
        var currNode = this.head;
        while (!(currNode.next == null)) {
            console.log("Display:" + currNode.next.element);
            currNode = currNode.next;
        }
    }

    this.findPrevious = function(item) {
        //遍历链表，返回所删节点的前面节点
        var currNode = this.head;
        while ((currNode.next != null) && (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;



    }

    this.remove = function(item) {
        //删除节点操作
        var preNode = this.findPrevious(item);
        console.log(preNode);
        if (preNode.next != null) {
            //将用所删节点的下个节点替换掉此节点
            preNode.next = preNode.next.next;
        }
    }


    //例一:单向链表指向顺数的第n个节点
    this.advance = function(num) {
        //移动num个节点
        var currNode = this.head;
        for (var a = 0; a < num; a++) {
            if (currNode.next != null) {
                currNode = currNode.next;
            }
        }
        return currNode.element;
    }

    //例二：单向链表快速指向倒数数第n个节点
    //方法一：遍历两次链表，第一次遍历算出链表长度，再遍历到n节点
    //方法二：遍历一次链表，一个变量指向头节点，第二个变量指向n-1节点，直到第二个变量指向到尾节点
    //快速方法选择方法二

    this.fastBackward = function(num) {
        var node1 = this.head;
        var node2 = this.head;
        for (var a = 0; a < num - 1; a++) {
            if (node2.next != null) {
                node2 = node2.next;
            }
			
        }
        while (node2.next != null) {
            node1 = node1.next;
            node2 = node2.next;
        }
        return node1.element;
    }

}

var name = new LList();
name.insert("Tom", "head");
name.insert("Tommy", "Tom");
name.insert("Dvid", "Tommy");
name.insert("James", "Dvid")
console.log("advance:" + name.advance(2));
console.log("backward:" + name.fastBackward(1));
name.display();
name.remove("Tom");
name.display();




//双向链表

function Node(element) {
    this.element = element;
    this.next = null; //后面节点
    this.previous = null; //前面节点
}

function DLList() {
    this.head = new Node("head");

    this.find = function(item) {
        //循环查找节点
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    this.insert = function(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        //不同点，需要指向前驱
        newNode.previous = current;
        current.next = newNode;
    }

    this.remove = function(item) {
        var currNode = this.find(item);
        if (currNode.next != null) {
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
        }
    }

    this.findLast = function() {
        //寻找最后节点
        //帮助反序寻找节点
        var currNode = this.head;
        while (currNode.next != null) {
            currNode = currNode.next;
        }
        return currNode;
    }

    this.dispReverse = function() {
        var currNode = this.head;
        currNode = this.findLast();
        while (currNode.previous != null) {
            console.log(currNode.element);
            currNode = currNode.previous;
        }
    }
}

console.log("DLList:");
var str = new DLList();
str.insert("A", "head");
str.insert("B", "A");
str.insert("c", "B");
str.dispReverse();

//循环链表

function Node(element) {
    this.element = element;
    this.next = null;
}

function CLList() {
    this.head = new Node("head");
    //循环列表的特点
    this.head.next = this.head;
    this.display = function() {
        var currNode = this.head;
        while ((currNode.next != null) && (currNode.next.element != "head")) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
}