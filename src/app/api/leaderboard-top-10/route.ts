import pool from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const { rows } = await pool.sql`
  SELECT le.steam_id, le.name, le.top_score
  FROM leaderboard_entries le JOIN mailing_list ml
  ON le.steam_id = ml.steam_id
  WHERE ml.email IS NOT NULL AND ml.email <> ''
  ORDER BY le.top_score DESC
  LIMIT 10;
    `

    return NextResponse.json(rows)
  } catch (error) {
    console.error('Database error: ', error)
    return NextResponse.json({ success: false, error: 'Database error'}, { status: 500 })
  }
}