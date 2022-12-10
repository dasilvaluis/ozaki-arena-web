import { ReactNode } from 'react';

export interface WithChildren {
  children: ReactNode;
}

export interface ImageMeta {
  src: string;
  alt: string;
}

export type PriceGroup = {
  label: string;
  prices: {
    label: string;
    value: string;
  }[]
};

export type BundleMeta = {
  label: string;
  price: string;
  includes: string[]
};
