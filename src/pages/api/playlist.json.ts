import type { APIRoute } from 'astro';
import { SONGS } from '../../data/songs';

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(SONGS), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
};
