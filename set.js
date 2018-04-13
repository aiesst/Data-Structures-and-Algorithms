/*
 * @Author: yt.gan 
 * @Date: 2018-04-08 10:35:56 
 * @Last Modified by: yt.gan
 * @Last Modified time: 2018-04-08 21:24:07
 */

 
 
function Set() {
    this.dataStore = [];
    this.add = function(data) {
        //添加元素
        if (this.dataStore.indexOf(data) < 0) {
            this.dataStore.push(data);
            return true;
        } else {
            return false;
        }
    }

    this.remove = function(data) {
        //检查元素
        var pos = this.dataStore.indexOf(data);
        if (pos > -1) {
            this.dataStore.splice(pos, 1);
            return true;
        } else {
            return false;
        }
    }

    this.show = function() {
        //展示所有元素
        console.log(this.dataStore);
    }

    this.contains = function(data) {
        //判断是否包含元素
        if (this.dataStore.indexOf(data) > -1) {
            return true;
        } else {
            return false;
        }
    }

    this.union = function(set) {
        //1.执行并集操作
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; ++i) {
            //先添加本身元素
            tempSet.add(this.dataStore[i]);
        }
        for (var i = 0; i < set.dataStore.length; ++i) {
            //合并另外一个集合的元素
            if (!tempSet.contains(set.dataStore[i])) {
                //排除添加相同元素
                tempSet.dataStore.push(set.dataStore[i]);
            }
        }

        return tempSet;
    }

    this.intersect = function(set) {
        //2.执行交集操作
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; ++i) {
            //有相同的元素添加
            if (set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    }

    this.subSet = function(set) {
        //3.执行属于和不属于操作
        if (this.dataStore.length > set.dataStore.length) {

            return false;
        } else {
            // forEach用了lambda，匿名函数，闭包，return退不了主函数
            // this.dataStore.forEach(element => {
            //     if (!set.contains(element)) {
            //         return false;
            //     }
            // });
            for (var element in this.dataStore) {
                if (!set.contains(this.dataStore[element])) {
                    return false;
                }
            }
        }

        return true;
    }

    this.difference = function(set) {
        //属于第一个集合但不属于第二个集合
        var tempSet = new Set();
        for (var element in this.dataStore) {
            if (!set.contains(this.dataStore[element])) {
                tempSet.add(this.dataStore[element]);
            }
        }
        return tempSet;
    }
}

var setStr1 = new Set();
var setStr2 = new Set();

setStr1.add("A");
setStr1.add("c");
setStr2.add("D");
setStr2.add("E");
setStr2.add("A");

//并集
var union = new Set();
union = setStr1.union(setStr2);
union.show();

//交集
var intersect = new Set();
intersect = setStr1.intersect(setStr2);
intersect.show();

//是否属于
console.log(setStr1.subSet(setStr2));

//属于第一个集合但不属于第二个集合的元素
var difference = new Set();
difference = setStr1.difference(setStr2);
difference.show();