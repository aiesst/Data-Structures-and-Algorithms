/*
 * @Author: yt.gan 
 * @Date: 2018-03-27 15:26:05 
 * @Last Modified by: yt.gan
 * @Last Modified time: 2018-03-28 11:51:38
 */


var List = function() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];

    this.append = function(element) {
        //尾部添加元素
        this.dataStore[this.listSize++] = element;
    };

    this.find = function(element) {
        //查找元素位置
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
        return -i;
    };

    this.remove = function(element) {
        //删除元素
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    };

    this.length = function() {
        //返回长度
        return this.listSize;
    };

    this.toString = function() {
        //讲数组转化成字符串
        return this.dataStore.join(" ");
    };

    this.insert = function(element, after) {
        //插入元素
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    };

    this.clear = function() {
        //清空所有元素
        delete this.dataStore;
        this.dataStore.length = 0;
        this.listSize = this.pos = 0;
    };

    this.contains = function(element) {
        //判断是否含有指定元素
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return true;
            }
        }
        return false;
    };

    this.front = function() {
        this.pos = 0;
    };

    this.end = function() {
        this.pos = this.listSize - 1;
    };

    this.prev = function() {
        --this.prev;
    };

    this.next = function() {
        if (this.pos < this.listSize) {
            ++this.pos;
        }
    };

    this.currPos = function() {
        return this.pos;
    };

    this.moveTo = function(position) {
        this.pos = position;
    };

    this.getElement = function() {
        return this.dataStore[this.pos];
    };

    this.hasNext = function() {
        return this.pos < this.listSize;
    };

    this.hasPrev = function() {
        return this.pos >= 0;
    }

};

var names = new List();

names.append("Tom");
names.append("Jame");
names.append("Davi");
names.append("Olin");

console.log(names.remove("Tom"));
console.log(names.dataStore);
console.log(names.find("Davi"));
console.log(names.toString());

for (names.front(); names.hasNext(); names.next()) {
    console.log(names.getElement());
}