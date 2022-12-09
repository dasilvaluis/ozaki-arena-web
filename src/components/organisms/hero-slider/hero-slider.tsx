import ContentContainer from 'components/atoms/content-container';
import { WithChildren } from 'src/types';
import Slider from './core/slider';

function HeroSlider({ children }: WithChildren) {
  return (
    <Slider>
      <ContentContainer color="text">
        {children}
      </ContentContainer>
    </Slider>
  );
}

export default HeroSlider;
