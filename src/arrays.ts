/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const toInteger = numbers.map((num: string): number =>
        !Number.isNaN(Number(num)) ? Number(num) : 0
    );
    return toInteger;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removeDS = amounts.map((amount: string): string =>
        amount[0] === "$" ? amount.slice(1) : amount
    );
    const toInteger = removeDS.map((amount: string): number =>
        !Number.isNaN(Number(amount)) ? Number(amount) : 0
    );
    return toInteger;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const uppercase = messages.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );

    const removeQuestions = uppercase.filter(
        (message: string): boolean => message[message.length - 1] !== "?"
    );
    return removeQuestions;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const lessThanFour = words.filter(
        (word: string): boolean => word.length < 4
    );

    const sum = lessThanFour.reduce((total: number) => total + 1, 0);

    return sum;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const removeValidColors = colors.filter(
        (color: string): boolean =>
            color !== "red" && color !== "blue" && color !== "green"
    );

    if (removeValidColors.length === 0) {
        return true;
    }
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce((total: number, num: number) => total + num, 0);
    const addingNums = addends.reduce(
        (finalString: string, num: number) => finalString + num + "+",
        ""
    );
    return sum + "=" + addingNums.slice(0, addingNums.length - 1);
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const negIndex = values.findIndex((value: number): boolean => value < 0);

    if (negIndex === -1) {
        const sum = values.reduce(
            (total: number, value: number) => total + value,
            0
        );
        return [...values, sum];
    }

    const numsToAdd = values.slice(0, negIndex);
    const sum = numsToAdd.reduce(
        (total: number, value: number) => total + value,
        0
    );

    return [
        ...values.slice(0, negIndex + 1),
        sum,
        ...values.slice(negIndex + 1)
    ];
}

/*
function num(index: number, array: string[]): unknown {
    throw new Error("Function not implemented.");
}
*/
