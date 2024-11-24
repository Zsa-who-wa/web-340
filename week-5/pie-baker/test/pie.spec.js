/**
 * Author: Wendy Rzechula
 * Date: 11/21/2024
 * File Name: pie.spec.js
 * Description:
 */

"use strict";

const { bakePie } = require("../src/pie");

describe("bakePie", () => {
  test("Great, all essential ingredients are included!", () => {
    const result = bakePie("apple", ["flour", "sugar", "butter", "apples"]);
    expect(result).toBe("You baked an apple pie!");
  });
  
  test("You cannot bake pie. You are missing essential ingredients", () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    console.log = jest.fn();
    
    bakePie("cherry", ["flour", "sugar"]);
    expect(console.log).toHaveBeenCalledWith("Cannot bake pie. You are missing essential ingredients: flour");
    expect(mockExit).toHaveBeenCalledWith(1);
    
    mockExit.mockRestore();
  });
  
  test("Your pie would still work with extra ingredients", () => {
    const result = bakePie("cherry", ["flour", "sugar", "butter", "pecans"]);
    expect(result).toBe("You successfully baked your blueberry pie with flour, sugar, butter, blueberries and eggs!");
  });
});

/*  SOURCES:
    Carey, P., & Vodnik, S. (2022). JavaScript for Web Warriors (7th ed.). Cengage Learning.
    Krasso, P. R. (2024). Pragmatic NodeJS (1st ed.).
    Bekkhus, S. (2023, December 29). Mock Functions. Retrieved November 23, 2024, from https://jestjs.io/docs/mock-functions
*/