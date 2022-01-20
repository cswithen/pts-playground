import { PtsCanvas } from "./TemplateCanvas.js";
import { Group, Line, Create } from "pts";

export class MyCanvas extends PtsCanvas {
  pts = new Group();

  start(bound) {
    this.pts = Create.distributeRandom(this.space.innerBound, 200);
  }

  animate(time, ftime) {
    let perpend = new Group(
      this.space.center.$subtract(0.1),
      this.space.pointer
    ).op(Line.perpendicularFromPt);
    this.pts.rotate2D(0.0005, this.space.center);

    this.pts.forEach((p, i) => {
      let lp = perpend(p);
      const ratio = Math.min(
        1,
        1 - lp.$subtract(p).magnitude() / (this.space.size.x / 2)
      );
      this.form.stroke(`rgba(255,255,255,${ratio})`, ratio * 2).line([p, lp]);
      this.form.fillOnly(["#f03", "#09f", "#0c6"][i % 3]).point(p, 1);
    });
  }
}
