import { toSlug } from "../src/utils/toSlug";
import { describe, expect, test } from "bun:test";

describe("test toSlug", () => {
    test(`Should return a slug of "Hello, World !"`, () => {
        expect(toSlug("Hello, World !")).toBe("hello-world");
    })
});