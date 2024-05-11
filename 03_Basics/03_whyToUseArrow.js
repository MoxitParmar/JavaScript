let hello = 1234

let obj = {
    name1: 'John',
    // this function has scope of obj object
    getName: function () {
        // but this function has scope of window object
        // console.log(this.name1);
        setTimeout(function () {
            console.log(this.name1);
        }, 1000);
    },

    // arrow function have lexical scope means the have scope of thier parent object
    // so in this case arrow function have scope of parent student object
    getName2: function ()  {
        setTimeout(() => {
            console.log(this.name1);
        }, 1000);
        
    }
};

obj.getName(); // John
obj.getName2(); // undefined

// we do use the lexical scope of the arrow function to access the methods like setTimeOut() inside a function with proper this of student object. 