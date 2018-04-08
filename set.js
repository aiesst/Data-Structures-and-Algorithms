/*
 * @Author: yt.gan 
 * @Date: 2018-04-08 10:35:56 
 * @Last Modified by: yt.gan
 * @Last Modified time: 2018-04-08 11:53:30
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
        //执行并集操作
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
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; ++i) {
            //有相同的元素添加
            if (set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    }

}

var setStr1 = new Set();
var setStr2 = new Set();

setStr1.add("A");
setStr1.add("B");
setStr1.add("C");

setStr2.add("D");
setStr2.add("E");
setStr2.add("A");

var union = new Set();
union = setStr1.union(setStr2);
union.show();

var intersect = new Set();
intersect = setStr1.intersect(setStr2);
intersect.show();