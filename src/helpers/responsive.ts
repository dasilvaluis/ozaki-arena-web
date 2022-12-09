import { ThemeTypings } from '@chakra-ui/react';

export const biResponsive = (breakpoint: ThemeTypings['breakpoints']) => <B, M>(base: B, bpValue: M) => ({ base, [breakpoint]: bpValue });

export const biResponsiveXl = biResponsive('xl');
export const biResponsiveLg = biResponsive('lg');
export const biResponsiveMd = biResponsive('md');
