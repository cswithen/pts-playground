import { Group, Circle } from "pts";
import { PtsCanvas } from "./TemplateCanvas";

export class GroupTest extends PtsCanvas {
  constructor() {
    super();
    this.group = [];
  }

  animate(time, ftime, space) {
    let lastPt = this.group[this.group.length - 1];

    // record last 50 pointer positions
    if (!lastPt.equals(space.pointer)) {
      this.group.push(space.pointer.clone());
      if (this.group.length > 50) this.group.shift();
    }

    // drawing
    if (this.group.length >= 3) {
      // get segments from the group to generate circle position and size
      let cs = this.group
        .segments(2, 5)
        .map((g) =>
          Circle.fromCenter(
            g[0],
            Math.min(50, g[1].$subtract(g[0]).magnitude())
          )
        );
      this.form.strokeOnly("#123", 10, "round");
      this.form.line(this.group);
      this.form.fill("#fff").circles(cs);
      this.form.fillOnly("#f05").point(lastPt, 10, "circle");
    }
  }

  start(bound, space) {
    let c = space.center;
    this.group = new Group(c.$subtract(20, 0), c.clone(), c.$add(20, 0));
  }

  // action(type, x, y, event) {}

  // resize(size, event) {}
}
