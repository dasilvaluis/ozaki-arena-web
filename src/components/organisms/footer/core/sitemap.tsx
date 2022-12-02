import Link from 'next/link';
import menu from '../../../../settings/menu.json';

function Sitemap() {
  return (
    <>
      <h6><b>Menu</b></h6>
      <ul className="reset-style">
        {menu.entries.map(({ label, path }) => (
          <li key={`${label}-${path}`}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Sitemap;
