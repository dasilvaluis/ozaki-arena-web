import BoxedNextImage from 'components/molecules/boxed-next-image';

function Logo() {
  return (
    <BoxedNextImage
      flex="0 1 auto"
      width="7.5rem"
      height="7.5rem"
      src="/brand-logo.png"
      alt="Brand Logo"
      objectFit="contain"
    />
  );
}

export default Logo;
