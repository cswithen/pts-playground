import { Create, Pt, Line } from "pts";
import { PtsCanvas } from "./TemplateCanvas";

export class OpTest extends PtsCanvas {
  constructor() {
    super();
    this.pts = [];
  }

  animate(time, ftime, space) {
    // //* STATIC POINT MAP
    // // make 100 pts and pointer
    // if (!this.pts[0]) this.pts = Create.distributeRandom(space.innerBound, 100);
    // let t = space.pointer;
    // // sort the points
    // this.pts.sort(
    //   (a, b) => a.$subtract(t).magnitudeSq() - b.$subtract(t).magnitudeSq()
    // );
    // // draw the points
    // this.form.fillOnly("#123").points(this.pts, 2, "circle");
    // this.form.fill("#f03").point(this.pts[0], 5, "circle");
    // this.form.strokeOnly("#f03", 2).line([this.pts[0], space.pointer]);
    // //* RADIUS CHANGING ON PROXIMITY
    // // make the points
    // if (!this.pts[0]) this.pts = Create.distributeRandom(space.innerBound, 100);
    // // sort the points based on pointer location
    // let t = space.pointer;
    // this.pts.sort(
    //   (a, b) => a.$subtract(t).magnitudeSq() - b.$subtract(t).magnitudeSq()
    // );
    // //draw
    // this.form.fillOnly("#123", 1);
    // this.pts.forEach((p, i) =>
    //   this.form.point(p, 20 - (20 * i) / this.pts.length, "circle")
    // );
    // this.form.fillOnly("#fff").points(this.pts, 2, "circle");
    // let three = this.pts.slice(0, 3);
    // let threeLines = three.map((p) => [p, space.pointer]);
    // this.form.strokeOnly("#f05", 2).lines(threeLines);
    // this.form.fillOnly("#f05").points(three, 3, "circle");
    // //* POINTS WITH PERPENDICULAR LINES
    if (!this.pts[0]) this.pts = Create.distributeRandom(space.innerBound, 100);
    let path = [new Pt([50, 50]), space.pointer];
    let perpends = this.pts.map((p) => [p, Line.perpendicularFromPt(path, p)]);
    this.form.strokeOnly("#42e", 5).line(path);
    this.form.strokeOnly("#123", 1).lines(perpends);
    this.form.fillOnly("#123").points(this.pts, 2, "circle");
  }
  // start(bound, space) {}
  // action(type, x, y, event) {}
  // resize(size, event) {}
}
