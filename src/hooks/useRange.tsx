import { useState } from 'react';

function useRange<T>(arr: T[]): [number, {next: () => void, prev: () => void}] {
  const [index, setIndex] = useState(0);

  return [
    index,
    {
      /**
       * Moves index to next possible value, or start of array
       */
      next() {
        setIndex((prev) => (prev + 1) % arr.length);
      },
      /**
       * Moves index to previous possible value, or end of array
       */
      prev() {
        setIndex((prev) => (prev - 1) % arr.length);
      }
    }
  ];
}

export default useRange;
