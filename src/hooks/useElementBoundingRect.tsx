import { useEffect, useState } from 'react';

function useElementBoundingRect(elGetter: () => HTMLElement | null) {
  const [boundingRect, setBoundingRect] = useState<DOMRect>();

  useEffect(() => {
    const el = elGetter();

    if (el) {
      setBoundingRect(el.getBoundingClientRect());
    }
  }, [elGetter]);

  return boundingRect;
}

export default useElementBoundingRect;
