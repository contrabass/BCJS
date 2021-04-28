// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
class Video{
    constructor (title, uploader, time) {
        // title (a string)
        this.title = title;
        // uploader (a string, the person who uploaded it)
        this.uploader = uploader;
        // time (a number, the duration of the video - in seconds)
        this.time = time;
    }
    
    // Create a method called watch() which displays a string as follows:
    watch () {
        // “uploader parameter watched all time parameter of title parameter!”
        alert (`uploader ${this.uploader} watched all ${this.time} of ${this.title}!`)
    }
}

// Instantiate a new Video instance and call the watch() method.
vid = new Video("theoretical movie", "anonymous", 6666);
vid.watch();
// Instantiate a second Video instance with different values.
vid0 = new Video("A non theoretical movie", "anonymous died in the 14th century", 7777);
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
let vidArr = [
    new Video ("lorem", "lorem uploader", 1234),
    new Video ("ipsum", "ipsum uploader", 2345),
    new Video ("dolor", "dolor uploader", 3456),
    new Video ("sit", "sit uploader", 4567),
    new Video ("amet", "amet uploader", 5678)
];

// Bonus: Loop through the array to instantiate those instances. ---instantiated from the beginninginside the array.
for (let i=0; i < vidArr.length;
     i++){
    vidArr[i].watch();
}
