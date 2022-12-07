import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link, LinkProps } from '@chakra-ui/react';

function ExternalLink({ children, ...props }: LinkProps) {
  return (
    <Link isExternal {...props}>
      {children}
      {' '}
      <ExternalLinkIcon mx="2px" />
    </Link>
  );
}

export default ExternalLink;
