import add from "../src/add";
// import {describe, expect, it} from "vitest";

describe ("Tests add function", () => {
    it("Additon of two numbers", ()=>{
        expect(add(2,2)).toBe(4)
    });
})