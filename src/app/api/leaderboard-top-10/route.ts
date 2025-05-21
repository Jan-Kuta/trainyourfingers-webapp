import pool from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { steam_id } = await req.json()

  try {
    const { rows } = await pool.sql`
  SELECT
   ROW_NUMBER() OVER (ORDER BY le.top_score DESC) AS rank,
   le.steam_id,
   le.name,
   le.top_score,
   (le.steam_id = ${steam_id}) AS is_player,
   le.updated_at
  FROM leaderboard_entries le JOIN mailing_list ml
  ON le.steam_id = ml.steam_id
  WHERE ml.email IS NOT NULL AND ml.email <> ''
  ORDER BY le.top_score DESC, le.updated_at ASC
  LIMIT 10;
    `

    return NextResponse.json(rows)
  } catch (error) {
    console.error('Database error: ', error)
    return NextResponse.json({ success: false, error: 'Database error'}, { status: 500 })
  }
}