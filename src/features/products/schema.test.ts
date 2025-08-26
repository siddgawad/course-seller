import { describe, it, expect } from "vitest";
import { ProductCreate } from "./schema";

describe("ProductCreate", () => {
  it("rejects negative,zero and decimal price", () => {
    expect(() =>
      ProductCreate.parse({ title: "X", slug: "x", priceInCents: -5 }),
    ).toThrow(); // should fail now because schema doesn't enforce > 0
    expect(() =>
      ProductCreate.parse({ title: "X", slug: "x", priceInCents: 0 }),
    ).toThrow();
    expect(() =>
      ProductCreate.parse({ title: "X", slug: "x", priceInCents: 0.03 }),
    ).toThrow();
  });

  it("accepts valid data with default isActive", () => {
    const out = ProductCreate.parse({
      title: "Course C",
      slug: "course-c",
      priceInCents: 9999,
    });
    expect(out.isActive).toBe(true);
  });
});
