var Youtube = /** @class */ (function () {
    function Youtube(title, comments, views, likes, subscribers, recommendations) {
        var _this = this;
        this.title = title;
        this.comments = comments;
        this.views = views;
        this.likes = likes;
        this.subscribers = subscribers;
        this.recommendations = recommendations;
        this.getTitle = function () {
            return _this.title;
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getSubscribers = function () {
            return _this.subscribers;
        };
        this.getRecommendations = function () {
            return _this.recommendations;
        };
        this.title = title;
        this.comments = comments;
        this.views = views;
        this.likes = likes;
        this.subscribers = subscribers;
    }
    return Youtube;
}()); //end of class
//Object 1
var User = new Youtube("Web Developer BootCamp", ["Worth watching it!", "The simplest one", "good one!", "Good job,keep it up"], 109, 89, 44);
console.log(User.title);
var __comments = User.getComments();
console.log(__comments);
var __views = User.getViews();
console.log(__views);
var __likes = User.getViews();
console.log(__likes);
//Object 2
var newUser = new Youtube("Web Developer BootCamp", ["Worth watching it!", "The simplest one", "good one!", "Good job,keep it up"], 110, 97, 88, User);
console.log(newUser.getTitle());
console.log(newUser.getComments());
console.log(newUser.getLikes());
console.log(newUser.getViews());
console.log(newUser.getSubscribers());
console.log(newUser.getRecommendations());
