import {
  Pt,
  Group,
  Line,
  Create,
  Sound,
  Triangle,
  Const,
  Geom,
  Num,
  Rectangle,
} from "pts";
import { PtsCanvas } from "./TemplateCanvas";

export class GetStarted extends PtsCanvas {
  animate(time, ftime, space) {
    // // PULSATING CURSOR
    // let radius = Num.cycle((time % 1000) / 1000) * 20;
    // this.form.fill("#09f").point(space.pointer, radius, "circle");

    // MOVING RECTANGLE
    // rectangle
    const rect = Rectangle.fromCenter(space.center, space.size.$divide(2));
    const poly = Rectangle.corners(rect);
    poly.shear2D(Num.cycle((time % 2000) / 2000) - 0.5, space.center);

    // drawing
    this.form.fillOnly("#123").polygon(poly);
    this.form.strokeOnly("#fff", 3).rect(rect);

    // // WAK MOVING RECTANGLE WITH TRIANGLE DRAW
    // // rectangle
    // const rect = Rectangle.fromCenter(space.center, space.size.$divide(2));
    // const poly = Rectangle.corners(rect);
    // poly.shear2D(Num.cycle((time % 5000) / 5000) - 0.5, space.center);

    // // triangle
    // const tris = poly.segments(2, 1, true);
    // tris.map((t) => t.push(space.pointer));

    // // drawing
    // this.form.fillOnly("#123").polygon(poly);
    // this.form.strokeOnly("#fff", 3).polygons(tris);
    // this.form.fill("#123").point(space.pointer, 5);

    // // WAK MOVING RECTANGLE WITH TRIANGLE DRAW AND CIRCLES
    // // rectangle
    // const rect = Rectangle.fromCenter(space.center, space.size.$divide(2));
    // const poly = Rectangle.corners(rect);
    // poly.shear2D(Num.cycle((time % 5000) / 5000) - 0.5, space.center);

    // // triangle
    // const tris = poly.segments(2, 1, true);
    // tris.map((t) => t.push(space.pointer));

    // // circle
    // const circles = tris.map((t) => Triangle.incircle(t));

    // // drawing
    // this.form.fillOnly("#123").polygon(poly);
    // this.form.fill("#f03").circles(circles);
    // this.form.strokeOnly("#fff", 3).polygons(tris);
    // this.form.fill("#123").point(space.pointer, 5);
  }

  // start(bound, space) {}

  // action(type, x, y, event) {}

  // resize(size, event) {}
}
