import { generateRandomNumberId } from "../src/utils/generateRandomNumberId";
import { describe, expect, test } from "bun:test";

describe("test fonction generateRandomNumberId", () => {
    test("Should return an integer between 100k and 1M , excluding 1M", () => {
        const id = generateRandomNumberId();
        console.log(id);
        expect(100001).toBeGreaterThanOrEqual(100000);
        expect(id).toBeLessThan(1000000)
    });
});