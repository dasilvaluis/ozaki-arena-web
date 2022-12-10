import { Box, useBreakpointValue } from '@chakra-ui/react';
import ContentContainer from 'components/atoms/content-container';
import Overlay from 'components/atoms/overlay';
import FadeSlider from 'components/molecules/fade-slider';
import homeSlider from 'settings/home-slider.json';
import headerConstants from 'src/constants/header';
import { WithChildren } from 'src/types';

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
      <Box position="absolute" bottom="0" transform="translateY(-50%)" width="100%">
        <ContentContainer color="text">
          {children}
        </ContentContainer>
      </Box>
    </Box>
  );
}

export default Slider;
