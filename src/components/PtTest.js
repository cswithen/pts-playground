import { Pt, Geom, Group } from "pts";
import { PtsCanvas } from "./TemplateCanvas";

export class PtTest extends PtsCanvas {
  animate(time, ftime, space) {
    //* Creating a PT
    // // this stores last mouse or touche position
    // let m = space.pointer;

    // //drawing
    // this.form.strokeOnly("#123", 5).line([new Pt(m.x, 0), m, new Pt(0, m.y)]);
    // this.form.stroke("#42e").line([new Pt(0, 0), m]);
    // this.form.stroke("#fff", 5).fill("#42e").point(m, 10, "circle");
    // this.form.fill("#123").font(14, "bold").text(m.$add(20, 5), m.toString());

    // //* ANGLES
    let m = space.pointer;
    let c = space.center;
    let p = m.$subtract(c);
    let lengthP = p.magnitude();

    let ang = p.angle();
    let angText = Geom.boundRadian(ang);

    // drawing
    this.form.strokeOnly("#0ca", 10, "round", "round").line([c, m]);
    this.form.stroke("#fff").line([c, new Pt(c.x + lengthP, c.y)]);
    this.form.stroke("#42e", 10).arc(c, lengthP, 0, ang);
    // position
    let pos = c.$add(p.toAngle(angText / 2, lengthP / 2)).add(10, 5);
    this.form
      .fill("#123")
      .font(18, "bold")
      .text(pos, Math.floor(Geom.toDegree(angText)) + "°");

    // //* REFLECTION GEOM
    // let c = space.center;
    // let m = space.pointer;
    // let reflectLine = [m, c];

    // // group of points
    // let g1 = new Group(
    //   c.$add(0, -50),
    //   c.$add(50, -50),
    //   c.$add(50, 50),
    //   c.$add(0, 50)
    // );

    // // scale each one using Pt's scale functions
    // let s = 0.75 + m.$subtract(c).magnitude() / space.width;
    // let g2 = g1.map((p) => p.scale(s));

    // // alternatively, just use the Geom.reflect2D to reflect a group of Pt
    // let g3 = g2.clone();
    // Geom.reflect2D(g3, reflectLine);

    // // drawing
    // this.form.strokeOnly("#fff", 20, "miter").line(g1).stroke("#123").line(g3);
    // this.form.stroke("#42e", 10).line(reflectLine);
  }

  // start(bound, space) {}

  // action(type, x, y, event) {}

  // resize(size, event) {}
}
