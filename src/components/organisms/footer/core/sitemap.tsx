import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import menu from 'settings/menu.json';

function Sitemap() {
  return (
    <div>
      <h6><b>Menu</b></h6>
      <ul className="reset-style">
        {menu.entries.map(({ label, path }) => (
          <li key={`${label}-${path}`}>
            <Link as={NextLink} href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sitemap;
