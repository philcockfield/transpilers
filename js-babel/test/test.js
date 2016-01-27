"use strict";
import { expect } from "chai";


describe("babel", () => {
  it("has a class property", () => {
    class Foo {
      static myStatic = 123;
    };
    expect(Foo.myStatic).to.equal(123);
  });
});
