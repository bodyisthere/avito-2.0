export const yearGenerate = (from: number, to: number): number[] => {
  const result: number[] = [];
  
  let start = from;
  const end = to;

  while(end >= start) {
    result.push(start);
    start++;
  }

  return result;
};