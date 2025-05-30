import pool from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { steam_id } = await req.json()

  try {
    const { rows } = await pool.sql`
    SELECT * FROM(
      SELECT
          steam_id,
          name,
          top_score,
          updated_at,
          RANK() OVER (ORDER BY top_score DESC)  AS rank,
          COUNT(*) OVER () AS total_players
      FROM leaderboard_entries
    ) ranked
    WHERE ranked.steam_id = ${steam_id};
    `

    return NextResponse.json(rows)
  } catch (error) {
    console.error('Database error: ', error)
    return NextResponse.json({ success: false, error: 'Database error'}, { status: 500 })
  }
}