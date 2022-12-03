import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  revalidated: boolean
  message?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.secret !== process.env.PAGE_REVALIDATE_TOKEN) {
    return res.status(401).json({ revalidated: false, message: 'Invalid token.' });
  }

  if (typeof req.query.path !== 'string') {
    return res.status(422).json({ revalidated: false, message: 'Invalid path. Expected path as a string.' });
  }

  try {
    await res.revalidate(req.query.path);

    return res.json({
      revalidated: true
    });
  } catch (err) {
    return res.status(500).send({ revalidated: false, message: 'Error revalidating' });
  }
}
