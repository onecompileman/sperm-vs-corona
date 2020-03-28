class Particle {
  constructor(
    position,
    size,
    velocity,
    col,
    life,
    acceleration = createVector(0, 0)
  ) {
    this.position = position;
    this.size = size;
    this.velocity = velocity;
    this.velocity.limit(9);
    this.col = col;
    this.originalLife = this.life = life;
    this.acceleration = acceleration;
  }

  display() {
    const percentage = this.life / this.originalLife;

    push();
    strokeWeight(2);
    stroke(this.col, percentage * 255);
    noFill();
    ellipseMode(CENTER);
    ellipse(
      this.position.x,
      this.position.y,
      this.size * percentage,
      this.size * percentage
    );
    pop();
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.life--;
  }

  isDead() {
    return this.life <= 0;
  }
}
