import { Group, Line, Create, Vec, Const, Pt } from "pts";
import { PtsCanvas } from "./TemplateCanvas.js";

export class MattCanvas extends PtsCanvas {
  constructor() {
    super();
    this.pts = [];
    this.colors = ["#30588C", "#6FA8BF", "#F2AF5C", "#273b82"];
  }

  animate(time, ftime, space) {
    let center = space.size.$divide(1.8);
    let angle = (window.innerWidth * 0.5 * Math.PI) / 180;
    let count = window.innerWidth * 0.05;
    // const line = new Line([0, 0], [10, 100]);
    // let line = new Line.fromAngle([0, 0], angle, 100);
    let mouse = center.clone();

    let r = Math.min(space.size.x, space.size.y) * 1;
    // for (let i = 0; i < count; i++) {
    //   const p = new Pt([
    //     [
    //       Math.random() * r - Math.random() * r,
    //       Math.random() * r - Math.random() * r,
    //     ],
    //   ]);
    //   p.moveBy(center).rotate2D((i * Math.PI) / count, center);
    //   p.brightness = 0.1;
    //   this.pts.push(p);
    // }

    if (!this.pts[0]) this.pts = Create.distributeRandom(space.innerBound, 200);

    for (let i = 0; i < this.pts.length; i++) {
      let pt = this.pts[i];

      pt.rotate2D(Const.one_degree / 30, center);
      this.form.fillOnly(this.colors[i % 3]).point(pt, 1.5, "circle");

      // let ln = new Line(pt).to(line.getPerpendicularFromPoint(pt));

      // let opacity = Math.min(
      //   1,
      //   1 - Math.abs(line.getDistanceFromPoint(pt)) / r
      // );
      // let distFromMouse = Math.abs(ln.getDistanceFromPoint(mouse));

      // if (distFromMouse < 50) {
      //   if (this.pts[i].brightness < 0.3) this.pts[i].brightness += 0.015;
      // } else {
      //   if (this.pts[i].brightness < 0.1) this.pts[i].brightness -= 0.01;
      // }

      let color = "rgba(255,255,255," + this.pts[i].brightness + ")";
      this.form.strokeOnly("#fff").line([pt, [0, 0]]);
      // this.form.stroke(color).line(ln);
    }
    // this.form.fillOnly("#fff").points(this.pts, 2, "circle");
  }
}

export default MattCanvas;
