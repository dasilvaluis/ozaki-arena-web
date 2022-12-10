import BoxedImage from 'components/molecules/boxed-image';

function Logo() {
  return (
    <BoxedImage flex="0 1 auto" width="7.5rem" src="/brand-logo.png" alt="Brand Logo" objectFit="contain" />
  );
}

export default Logo;
