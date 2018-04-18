class Youtube{
constructor(public title:String,public comments:string[],public views:number,public likes:number,public subscribers:number,public recommendations?:object){
 this.title=title;
 this.comments=comments;
 this.views=views;
 this.likes=likes;
 this.subscribers=subscribers;

 

}

getTitle=()=>{
    return this.title;
}
getComments=()=>{
    return this.comments;
}

getViews=()=>{
    return this.views;
}
getLikes=()=>{
    return this.likes;
}
getSubscribers=()=>{
    return this.subscribers;
}
getRecommendations=()=>{
    return this.recommendations;
}



}//end of class
//Object 1
let User=new Youtube("Web Developer BootCamp",["Worth watching it!","The simplest one","good one!","Good job,keep it up"],109,89,44);
console.log(User.title);
let __comments:string[]=User.getComments();
console.log(__comments);
let __views=User.getViews();
console.log(__views);
let __likes=User.getViews();
console.log(__likes);
//Object 2
let newUser=new Youtube("Web Developer BootCamp",["Worth watching it!","The simplest one","good one!","Good job,keep it up"],110,97,88,User);
console.log(newUser.getTitle())
console.log(newUser.getComments())
console.log(newUser.getLikes())
console.log(newUser.getViews())
console.log(newUser.getSubscribers())
console.log(newUser.getRecommendations())


