export class Challenge {
    static solution(number: number) {
        const naturalNumbers: Array<number> = [];
        for (let i = 1; i < number; i++) {
            naturalNumbers.push(i);
        };
        return naturalNumbers.filter(el => el % 3 == 0 || el % 5 == 0).reduce((calc, el) => calc += el, 0);
    }
};