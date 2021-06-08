// var relationship1 = {
//     name: 'zero',
//     friends: ['nero', 'hero', 'xero'],
//     logFriends: function () {
//         var that = this;
//         this.friends.forEach(function (friend) {
//             console.log(that.name, friend);
//         });
//     },
// };
// relationship1.logFriends();


// const relationship2 = {
//     name: 'zero',
//     friends: ['nero', 'hero', 'xero'],
//     logFriends() {
//         this.friends.forEach(friend => {
//             console.log(this.name, friend);
//         });
//     },
// };
// relationship2.logFriends();


// var candyMachine = {
//     status: {
//         name: 'node',
//         count: 5,
//     },
//     getCandy: function () {
//         this.status.count--;
//         return this.status.count;
//     },
// };
// var getCandy = candyMachine.getCandy;
// var count = candyMachine.status.count;


// function Person() { }

// var joon = new Person();
// var jisoo = new Person();

// Person.getType = function () {
//     return "인간";
// };

// console.log(joon.getType());
// console.log(jisoo.getType());

// var Human = function (type) {
//     this.type = type || 'human'
// };

// Human.isHuman = function (human) {
//     return human instanceof Human;
// }
