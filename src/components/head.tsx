import NextHead from 'next/head';

type Props = {
  title: string
}

export default function Head({
  title,
}: Props) {
  return (
    <NextHead>
      <title>{`Ozaki | ${title}`}</title>
      <meta name="description" content="Ozaki Arena | Sala de Cățărat" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
