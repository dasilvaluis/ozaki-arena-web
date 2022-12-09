import { ReactNode } from 'react';

export interface WithChildren {
  children: ReactNode;
}

export interface ImageMeta {
  src: string;
  alt: string;
}
