import { main } from "../main";

describe("main", () => {
  test("that return value is correct", () => {
    const str = main({
      foo: "bar",
      bar: "baz",
    });

    expect(str).toBe("bar + baz");
  });
});
