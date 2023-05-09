export class Kata {
    static getCount(str: string): number {
        let result: number = 0;
        const dictionary = 'aeiou'
        for (let i = 0; i < str.length; i++) {
            if (dictionary.includes(str[i])) {
                result++
            }
        }
        return result;
    }
}