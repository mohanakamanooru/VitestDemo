import palindrome from "../src/palindrome";

describe("palindrome", () => {
    it("should return true for palindrome", () => {
        expect(palindrome("abba")).toBe(true);
    });
})