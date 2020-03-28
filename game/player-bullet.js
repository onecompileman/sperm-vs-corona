class PlayerBullet {
  constructor(position, velocity, col, size, damage = 2) {
    this.position = position;
    this.velocity = velocity;
    this.col = col;
    this.size = size;
    this.damage = 4;

    this.collided = false;
  }

  display() {
    push();
    translate(this.position.x, this.position.y);
    ellipseMode(CENTER);
    fill(this.col);
    noStroke();
    ellipse(0, 0, this.size, this.size);
    pop();
  }

  update() {
    this.position.add(this.velocity);
  }

  isDead() {
    return this.collided || this.isOutside();
  }

  isOutside() {
    return (
      this.position.x < 0 + this.size ||
      this.position.x > width - this.size ||
      this.position.y < 0 + this.size ||
      this.position.y > height - this.size
    );
  }

  collide(target) {
    return (
      this.position.x < target.position.x + target.size &&
      this.position.x + this.size > target.position.x &&
      this.position.y < target.position.y + target.size &&
      this.position.y + this.size > target.position.y
    );
  }
}
