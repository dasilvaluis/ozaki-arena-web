import { Box, useCallbackRef } from '@chakra-ui/react';
import FadeSlider from 'components/molecules/fade-slider';
import useElementBoundingRect from 'hooks/useElementBoundingRect';
import homeSlider from 'settings/home-slider.json';
import { WithChildren } from 'src/types';

function Slider({ children }: WithChildren) {
  const getHeaderEl = useCallbackRef(() => document.getElementById('site-header'), []);
  const { height: headerHeight } = useElementBoundingRect(getHeaderEl) ?? { height: 0 };

  return (
    <Box position="relative">
      <FadeSlider
        width="100vw"
        height={`calc(100vh - ${headerHeight}px)`}
        images={homeSlider.entries}
        interval={5500}
        transitionDuration={0.7}
      />
      <Box
        bg="rgba(0, 0, 0, 0.25)"
        position="absolute"
        width="100%"
        height="100%"
        top={0}
        bottom={0}
      />
      <Box position="absolute" bottom="5rem" width="100%">
        {children}
      </Box>
    </Box>
  );
}

export default Slider;
