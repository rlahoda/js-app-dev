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
    let now = this;
    now.playInterval = setInterval(function() {now.nextPhoto()}, 2000);
  },
  pause: function() {
    clearInterval(this.playInterval);
  }
}
slideshow.getCurrentPhoto();
slideshow.play();
