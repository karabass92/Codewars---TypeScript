export function findUniq(arr: number[]): number {
    const result: number[] = arr.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el));
    return result[0];
}