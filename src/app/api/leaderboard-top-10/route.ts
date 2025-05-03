import pool from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const { rows } = await pool.sql`
  SELECT name, top_score
  FROM leaderboard_entries
  ORDER BY top_score DESC
  LIMIT 10;
    `

    return NextResponse.json(rows)
  } catch (error) {
    console.error('Database error: ', error)
    return NextResponse.json({ success: false, error: 'Database error'}, { status: 500 })
  }
}