import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(req: Request) {
  const { steam_id, username, score } = await req.json();

  try {
    await pool.sql`
INSERT INTO leaderboard_entries_prod (steam_id, name, top_score)
VALUES (${steam_id}, ${username}, ${score})
ON CONFLICT (steam_id)
DO UPDATE SET
    top_score = EXCLUDED.top_score,
    updated_at = NOW()
WHERE leaderboard_entries_prod.top_score < EXCLUDED.top_score;
      `;
  } catch (error) {
    console.error('Database error: ', error)
    return NextResponse.json({ success: false, error: 'Database error' }, { status: 500 })
  }

  return NextResponse.json({ success: true });
}
