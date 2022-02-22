function fibonacciSpec(i: number): number {
    return i < 2 ? i : fibonacciSpec(i - 2) + fibonacciSpec(i - 1);
}

describe("fibonacci", function () {
    it.each([
        {input: 0, expected: 0},
        {input: 1, expected: 1},
        {input: 2, expected: 1},
        {input: 3, expected: 2},
        {input: 10, expected: 55},
    ])("should return $expected for input $input", ({ input, expected }) => {
        expect(fibonacciSpec(input)).toEqual(expected)
    })
});
