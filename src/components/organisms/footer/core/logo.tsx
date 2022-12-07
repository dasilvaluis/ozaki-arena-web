import BoxedImage from '../../../molecules/boxed-image';

function Logo() {
  return (
    <BoxedImage flex="0 1 auto" width="120px" src="/brand-logo.png" alt="Brand Logo" objectFit="contain" />
  );
}

export default Logo;
