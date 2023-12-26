export function processData(data: number[]): number {
  return data.reduce((acc, num) => acc + num, 0);
}