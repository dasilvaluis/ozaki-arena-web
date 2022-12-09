import { Box } from '@chakra-ui/react';
import Overlay from 'components/atoms/overlay';
import FadeSlider from 'components/molecules/fade-slider';
import homeSlider from 'settings/home-slider.json';
import headerConstants from 'src/constants/header';
import { biResponsiveLg } from 'src/helpers/responsive';
import { WithChildren } from 'src/types';

const { headerHeight: headerHeightResponsiveMap } = headerConstants;

function Slider({ children }: WithChildren) {
  const headerHeight = biResponsiveLg(
    `calc(100vh - ${headerHeightResponsiveMap.base})`,
    `calc(100vh - ${headerHeightResponsiveMap.lg})`
  );

  return (
    <Box position="relative">
      <FadeSlider
        width="100vw"
        height={headerHeight}
        images={homeSlider.entries}
        interval={5500}
        transitionDuration={0.7}
      />
      <Overlay />
      <Box position="absolute" bottom="5rem" width="100%">
        {children}
      </Box>
    </Box>
  );
}

export default Slider;
