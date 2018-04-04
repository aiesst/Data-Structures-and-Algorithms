/*
 * @Author: yt.gan 
 * @Date: 2018-04-04 21:28:15 
 * @Last Modified by: yt.gan
 * @Last Modified time: 2018-04-04 21:38:47
 */

function Dictionary() {
    this.dataStore = new Array();

    this.add = function(key, value) {
        this.dataStore[key] = value;
    }

    this.find = function(key) {
        return this.dataStore[key];
    }

    this.remove = function(key) {
        delete this.dataStore[key];
    }

    this.show = function() {
        var dataKeys = Array.prototype.slice.call(Object.keys(this.dataStore));
        for (var key in dataKeys) {
            console.log(dataKeys[key] + "->" + this.dataStore[dataKeys[key]]);
        }
    }
}

var message = new Dictionary();
message.add("name", "Mick");
message.add("year", "23");
message.add("sex", "male");
message.show();