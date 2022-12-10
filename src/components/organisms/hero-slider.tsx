import { Box, useBreakpointValue } from '@chakra-ui/react';
import ContentContainer from 'components/atoms/content-container';
import Overlay from 'components/atoms/overlay';
import FadeSlider from 'components/molecules/fade-slider';
import { biResponsiveMd } from 'helpers/responsive';
import homeSlider from 'settings/home-slider.json';
import headerConstants from 'src/constants/header';
import { WithChildren } from 'types';

const { headerHeight: headerHeightResponsiveMap } = headerConstants;

function Slider({ children }: WithChildren) {
  const headerHeight = useBreakpointValue(headerHeightResponsiveMap);

  return (
    <Box position="relative">
      <FadeSlider
        width="100vw"
        height={`calc(100vh - ${headerHeight})`}
        images={homeSlider.entries}
        interval={5500}
        transitionDuration={0.7}
      />
      <Overlay />
      <Box
        width="100%"
        position="absolute"
        bottom="0"
        transform={biResponsiveMd('translateY(-25%)', 'translateY(-50%)')}
      >
        <ContentContainer color="text">
          {children}
        </ContentContainer>
      </Box>
    </Box>
  );
}

export default Slider;
