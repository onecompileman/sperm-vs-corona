class EnemyFollow {
  constructor(position, speed, life, size) {
    this.position = position;
    this.speed = speed;
    this.life = life;
    this.size = size;

    this.attackRate = 60;
    this.attackCooldown = this.attackRate;

    this.velocity = createVector();
    this.acceleration = createVector();
  }

  follow(sperm) {
    this.velocity = sperm.position.copy().sub(this.position);
    this.acceleration.setMag(this.speed * 0.1);
  }

  display() {
    push();

    translate(this.position.x, this.position.y);

    rotate(frameCount / 10);

    fill(color(100, 240, 100));
    rectMode(CENTER);
    rect(0, 0, this.size, this.size);

    fill(color(240, 100, 100));
    ellipseMode(CENTER);
    ellipse(0, 0, this.size - 3);

    pop();
  }

  isDead() {
    return this.life <= 0;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.speed);
    this.position.add(this.velocity);
  }

  stayAwayToOtherEnemies(enemies, index) {
    const maxDistance = this.size + 20;
    const forceStr = this.size + 80;
    let repelled = false;

    enemies.forEach((enemy, i) => {
      const dist = enemy.position.dist(this.position);
      if (!repelled && i !== index && dist < maxDistance) {
        repelled = true;

        const force = enemy.position.copy().sub(this.position);
        force.mult(-1);

        force.setMag(forceStr);

        this.velocity.add(force);
      }
    });
  }

  attack(sperm) {
    this.attackCooldown--;
    if (this.attackCooldown <= 0 && this.collide(sperm)) {
      this.attackCooldown = this.attackRate;

      return true;
    }

    return false;
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
