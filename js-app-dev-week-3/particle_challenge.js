let time = 0;
let gravity = 0.5;

function Particle(startX, startY) {
  this.x = startX;
  this.y = startY;
  velocity = {
    x: 0,
    y: 0,
  }
}

Particle.prototype = {// the prototype needs to be above the loop where the particles are created otherwise the functions won't be recognized
  getVelocity: function() {
    return time * gravity;
  },
  move: function() {
    this.y += this.getVelocity();
    if (this.y >= 500) {
      console.log('bottom');
    }


  }
}

const particles = [];

for (let i = 0; i < 100; i++) {
  let random = Math.random()*500;
  // console.log(random);
  particles[i] = new Particle(i, random)

}
console.log(particles);



setInterval(function() {
  time++;
  if (time === 99) {
    clearInterval(this);
  }
  // console.log(typeof particles[1].move);
  for (particle of particles) {
  console.log(particle.x);
  // console.log(typeof particle.move);
  // console.log(particle.y);
  }
  particles.filter(function(p) {// finding all the particles that have a y value less than 500 then running the map over them to execute the move function
    return p.y < 500;
  }).map(function(p) {
    return p.move();
  });

// console.log(particles);

}, 100)
