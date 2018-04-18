class Facebook{
    constructor(public name:String,public birthday:String,public gender:string, public college:string[],public place:string,public contact:string,public quote:string,public work:string[],public friends?:object){
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
    getName = () => {
        return this.name
    }

getBirthday = () => {
        return this.birthday
        }

getAge = (dateString) => {
let today = new Date();
let birthDate = new Date(dateString);
let age = today.getFullYear() - birthDate.getFullYear();
let m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
age--;
}
return age
}
            


getGender = () => {
        return this.gender
      }

getCollege = () => {
        return this.college
        }

getPlace = () => {
        return this.place
     }

getContact = () => {
        return this.contact
       }
getQuote = () => {
        return this.quote
     }

getWork = () => {
        return this.work
    }

getFriends = () => {
        return this.friends
        }

}
let userOne = new Facebook("Arpan","1996-11-28","male",["VVIET","GSC"],"Delhi","123456789","Chase ur Dreams",["LTI"]);
console.log(userOne.getName())
console.log(userOne.getBirthday())
console.log(userOne.getAge(userOne.getBirthday()))
console.log(userOne.getGender())
console.log(userOne.getCollege())
console.log(userOne.getPlace())
console.log(userOne.getContact())
console.log(userOne.getQuote())
console.log(userOne.getWork())

//object two

let userTwo = new Facebook("Shibanee","1998-03-16","female",["SDM","GSC"],"Puri","123456989","Perseverence is the hardwork you do after you get tired of doing the hardwork you already did",["Studying"],userOne);
console.log(userTwo.getName())
console.log(userTwo.getBirthday())
console.log(userOne.getAge(userTwo.getBirthday()))
console.log(userTwo.getGender())
console.log(userTwo.getCollege())
console.log(userTwo.getPlace())
console.log(userTwo.getContact())
console.log(userTwo.getQuote())
console.log(userTwo.getWork())
console.log(userTwo.getFriends())