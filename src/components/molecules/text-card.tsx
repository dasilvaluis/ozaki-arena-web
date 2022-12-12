import { Card, CardProps } from '@chakra-ui/react';
import textCardConstants from 'constants/text-card';
import { WithChildren } from 'types';

type Props = WithChildren & Pick<CardProps, 'bgColor' | 'color' | 'fontSize'> & {
  variant?: 'primary' | 'secondary'
}

function TextCard({
  color,
  bgColor,
  variant,
  fontSize = 'lg',
  children
}: Props) {
  const colorStyles = variant ? {
    primary: {
      color: 'white',
      bgColor: 'primary'
    },
    secondary: {
      color: 'white',
      bgColor: 'secondary'
    }
  }[variant] : {
    color,
    bgColor
  };

  return (
    <Card p={textCardConstants.padding} fontSize={fontSize} {...colorStyles}>
      {children}
    </Card>
  );
}

export default TextCard;
