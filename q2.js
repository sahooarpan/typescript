var Facebook = /** @class */ (function () {
    function Facebook(name, birthday, gender, college, place, contact, quote, work, friends) {
        var _this = this;
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.college = college;
        this.place = place;
        this.contact = contact;
        this.quote = quote;
        this.work = work;
        this.friends = friends;
        this.getName = function () {
            return _this.name;
        };
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getAge = function (dateString) {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getCollege = function () {
            return _this.college;
        };
        this.getPlace = function () {
            return _this.place;
        };
        this.getContact = function () {
            return _this.contact;
        };
        this.getQuote = function () {
            return _this.quote;
        };
        this.getWork = function () {
            return _this.work;
        };
        this.getFriends = function () {
            return _this.friends;
        };
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.college = college;
        this.place = place;
        this.contact = contact;
        this.quote = quote;
        this.work = work;
        this.friends = friends;
    }
    return Facebook;
}());
var userOne = new Facebook("Arpan", "1996-11-28", "male", ["VVIET", "GSC"], "Delhi", "123456789", "Chase ur Dreams", ["LTI"]);
console.log(userOne.getName());
console.log(userOne.getBirthday());
console.log(userOne.getAge(userOne.getBirthday()));
console.log(userOne.getGender());
console.log(userOne.getCollege());
console.log(userOne.getPlace());
console.log(userOne.getContact());
console.log(userOne.getQuote());
console.log(userOne.getWork());
//object two
var userTwo = new Facebook("Shibanee", "1998-03-16", "female", ["SDM", "GSC"], "Puri", "123456989", "Perseverence is the hardwork you do after you get tired of doing the hardwork you already did", ["Studying"], userOne);
console.log(userTwo.getName());
console.log(userTwo.getBirthday());
console.log(userOne.getAge(userTwo.getBirthday()));
console.log(userTwo.getGender());
console.log(userTwo.getCollege());
console.log(userTwo.getPlace());
console.log(userTwo.getContact());
console.log(userTwo.getQuote());
console.log(userTwo.getWork());
console.log(userTwo.getFriends());
