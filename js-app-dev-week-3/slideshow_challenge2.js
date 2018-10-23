const slideshow = {
  photoList: [
    'photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg',
  ],
  currentPhotoIndex: 0,
  nextPhoto: function() {
    if (this.currentPhotoIndex < this.photoList.length -1) {
      this.currentPhotoIndex += 1;
      console.log(this.photoList[this.currentPhotoIndex]);
    } else {
      this.pause();
      console.log('end of show');
    }
  },
  prevPhoto: function() {
    if (this.currentPhotoIndex < this.photoList.length - 1 || this.currentPhotoIndex > 0) {
      this.currentPhotoIndex -= 1;
      console.log(this.photoList[this.currentPhotoIndex]);
    } else {
      console.log('beginning of show');
    }
  },
  getCurrentPhoto: function() {
    console.log(this.photoList[this.currentPhotoIndex]);
    return this.photoList[this.currentPhotoIndex]
  },
  playInterval: null,
  play: function() {
    this.playInterval = setInterval(function() {this.nextPhoto()}.bind(this), 2000);// the bind needs to be on the function that is being invoked, so not the () for setInterval, the {} of the function nextPhoto inside the setInterval
  },
  pause: function() {
    clearInterval(this.playInterval);
  }
}
slideshow.getCurrentPhoto();
slideshow.play();
