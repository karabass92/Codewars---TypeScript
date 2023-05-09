export class Kata {
    static highAndLow(numbers: string): string {
        const arr = numbers.split(' ').sort((a, b) => (+a) - (+b))
        return `${arr[arr.length - 1]} ${arr[0]}`
    }
}