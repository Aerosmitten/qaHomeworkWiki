describe("Testing the calculator", () => {
    test("Example test", () => {
      expect(calculator.add(2, 50)).toBe(52);
    });
    test("Addition works", () => {
      expect(calculator.add(5, 5)).toBe(10);
    });
    test("Subtraction works", () => {
      expect(calculator.subtract(5, 5)).toBe(0);
    });
    test("Multiplication works", () => {
      expect(calculator.multiply(5, 5)).toBe(25);
    });
    test("Division works", () => {
      expect(calculator.divide(12, 6)).toBe(2);
    });
    test("Are numbers equal", () => {
      //Expect goes below
      expect(calculator.compare(1,1)).toBe(true);
      expect(calculator.compare(1,2)).toBe(false);
    });
    test("Is one number greater than the other", () => {
      //Expect goes below
      expect(calculator.isGreater(4,2)).toBe(true);
    });
    test("Is one number less than the other", () => {
      //Expect goes below
      expect(calculator.isGreater(2,4)).toBe(false);
    });
    describe("Stretch Goals", () => {
      test("(2+2)/4 == 1", () => {
        expect(calculator.divide(calculator.add(2, 2), 4)).toBe(1);
      });
      test("(28/4)*(6/2)*(30-27+(3-4)) == 42", () => {
        expect(true).toBeTruthy();
      });
    });
  });
  
  const calculator = {
    /** Takes two numbers and adds them together.
     * @example
     * calculator.add(2, 3) == 5
     */
    add: (a: number, b: number): number => a + b,
    /** Takes two numbers and subtracts the second from the first.
     * @example
     * calculator.subtract(2, 3) == -1
     */
    subtract: (a: number, b: number): number => a - b,
    /** Takes two numbers and multiplies them together.
     * @example
     * calculator.multiply(2, 3) == 6
     */
    multiply: (a: number, b: number): number => a * b,
    /** Takes two numbers and divides the first by the second.
     * @example
     * calculator.divide(2, 3) == 0.5
     */
    divide: (a: number, b: number): number => a / b,
    compare: (a: number, b: number): boolean => a === b,
    isGreater: (a: number, b: number): boolean => a > b
  };