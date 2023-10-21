// Next
import type { NextApiRequest, NextApiResponse } from 'next';

// Handlers
import { leagueInvitationRejectHandler } from '../../../../../features/leagues/handlers/invitations';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    return leagueInvitationRejectHandler(req, res);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
