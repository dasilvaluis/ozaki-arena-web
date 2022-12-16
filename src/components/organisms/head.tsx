import NextHead from 'next/head';

type Props = {
  title: string
}

export default function Head({
  title
}: Props) {
  return (
    <NextHead>
      <title>{`Ozaki Arena | ${title}`}</title>
      <meta
        name="description"
        content="Ozaki Arena - Sala ta Cățărat în Sibiu. Escalada, training, fun walls, guidare și instructori."
      />
      <meta property="og:title" content={`Ozaki Arena | ${title}`} />
      <meta property="og:site_name" content="Ozaki Arena" />
      <meta property="og:url" content="ozakiarena.ro" />
      <meta property="og:description" content="Sala ta Cățărat în Sibiu. Escalada, training, fun walls, guidare și instructori." />
      <meta property="og:type" content="business.business" />
      <meta property="og:image" content="" />

      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
