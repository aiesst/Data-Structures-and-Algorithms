/*
 * @Author: yt.gan 
 * @Date: 2018-04-06 13:18:02 
 * @Last Modified by: yt.gan
 * @Last Modified time: 2018-04-06 21:23:15
 */

var HashTable = function() {
    this.table = new Array(137);
    this.simpleHash = function(data) {
        //存在碰撞
        var total = 0;
        for (var i = 0; i < data.length; ++i) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }

    //添加
    this.put = function(data) {
        var pos = this.simpleHash(data);
        //var pos = this.betterHash(data);
        this.table[pos] = data;
    }

    //读取
    this.get = function(key) {
        return this.table[this.betterHash(key)];
    }

    this.show = function() {
        //普通的显示规则
        for (var i = 0; i < this.table.length; ++i) {
            if (this.table[i] != undefined) {
                console.log(i + ':' + this.table[i]);
            }
        }
    }

    this.betterHash = function(string) {
        //处理碰撞一：霍纳算法
        //防止碰撞，每次求和是都要乘以一个质数37
        const H = 37;
        var total = 0;
        for (var i = 0; i < string.length; ++i) {
            total += H * total + string.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        return parseInt(total);
    }

    /************开链法************** */
    this.buildChains = function() {
        //碰撞处理法二：开链法
        //创建二位数组来存值
        for (var i = 0; i < this.table.length; i++) {
            this.table[i] = new Array();
        }
    }

    this.showChain = function() {
        //开链法的显示规则
        for (var i = 0; i < this.table.length; i++) {
            if (this.table[i][0] != undefined) {
                console.log(i + ":" + this.table[i]);
            }
        }
    }

    this.putChain = function(data) {
        //开链法存放数据
        var pos = this.simpleHash(data);
        //双重保险
        //var pos = this.betterHash(data);
        var index = 0;
        if (this.table[pos][index] == undefined) {
            //当第一个位置没有数据时，放入数据
            this.table[pos][index] = data;
        } else {
            //当发生碰撞时，放入第二个位置，依次放入同一碰撞数据
            while (this.table[pos][index] != undefined) {
                ++index;
            }
            this.table[pos][index] = data;
        }
    }

    this.getChain = function(key) {
        var index = 0;
        var pos = this.simpleHash(key);
        if (this.table[pos][index] == key) {
            return this.table[pos][index];
        } else {
            while (this.table[pos][index] != key) {
                ++index;
            }
            return this.table[pos][index];
        }
        return undefined;
    }

    /*************线性探测法************** */
    this.putLinear = function(data) {
        //碰撞处理法三：线性探测法
        var pos = this.simpleHash(data);
        if (this.table[pos] == undefined) {
            this.table[pos] = data;
        } else {
            while (this.table[pos] != undefined) {
                //若发生碰撞，找到下面空的放置进去
                ++pos;
            }
            this.table[pos] = data;
        }
    }

}

//test1 开链法测试
var names = ["David", "Jemmy", "Danny", "Mike", "John", "Clayton", "Cynthia", "Raymond"];
var hashValue = new HashTable();
hashValue.buildChains();
for (var i = 0; i < names.length; ++i) {
    hashValue.putChain(names[i]);
}
for (var i = 0; i < names.length; ++i) {
    console.log("开链法获取" + i + "->" + hashValue.getChain(names[i]));
}
hashValue.showChain();

//test2 线性探测法测试
var names = ["David", "Jemmy", "Danny", "Mike", "John", "Clayton", "Cynthia", "Raymond"];
var hashValue1 = new HashTable();
for (var i = 0; i < names.length; ++i) {
    hashValue.putLinear(names[i]);
}
hashValue.showChain();

//test3 散列化整型键
//例一：随机产生九位数的键作为学生的ID和成绩
var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var genStuData = function(arr) {
    for (var i = 0; i < arr.length; ++i) {
        var num = "";
        for (var j = 1; j <= 9; ++j) {
            //九位ID
            num += Math.floor(Math.random() * 10);
        }
        //分数
        num += getRandomInt(50, 100);
        arr[i] = num;
    }
}

var numStudents = 10;
var arrSize = 97;
var idLen = 9;
var students = new Array(numStudents);
console.log("-----EXAMPLE ONE----")
genStuData(students);
for (var i = 0; i < students.length; ++i) {
    console.log("ID:" + students[i].substring(0, 8) + " Score:" + students[i].substring(9));
}
console.log("---DATA HASHTABLE---");
var studentsHash = new HashTable();
for (var i = 0; i < students.length; ++i) {
    studentsHash.put(students[i]);
}
studentsHash.show();