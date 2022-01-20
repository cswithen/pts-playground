import { PtsCanvas } from "./TemplateCanvas";
import { Pt, Geom, Group, Create, Line } from "pts";

export class RotatingPerpendicular extends PtsCanvas {
  pts = new Group();

  start(bound, space) {
    this.pts = Create.distributeRandom(this.space.innerBound, 400);
  }

  animate(time, ftime) {
    let perpend = new Group(
      this.space.center.$subtract(0.001),
      this.space.center.$add(0, 1000)
    ).op(Line.perpendicularFromPt);
    this.pts.rotate2D(0.0005, this.space.center);

    this.pts.forEach((p, i) => {
      let lp = perpend(p);
      const ratio = Math.min(
        1,
        1 - lp.$subtract(p).magnitude() / (this.space.size.x / 2)
      );
      this.form.stroke(`rgba(255,255,255,${ratio}`, ratio * 2).line([p, lp]);
      this.form
        .fillOnly(["#f03", "#09f", "#0c6"][i % 3])
        .point(p, 1.5, "circle");
    });
  }

  // resize(size, evt) {}

  // action(type, px, py, evt) {}
}
