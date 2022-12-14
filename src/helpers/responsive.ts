import { ThemeTypings } from '@chakra-ui/react';

export const biResponsive = (breakpoint: ThemeTypings['breakpoints']) => <B, M>(base: B, bpValue: M) => ({ base, [breakpoint]: bpValue });

export const biResponsiveXl = biResponsive('xl');
export const biResponsive2Xl = biResponsive('2xl');
export const biResponsive3Xl = biResponsive('3xl');
export const biResponsive4Xl = biResponsive('4xl');
export const biResponsiveLg = biResponsive('lg');
export const biResponsiveMd = biResponsive('md');
