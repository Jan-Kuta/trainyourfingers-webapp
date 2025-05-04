import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(req: Request) {
  const { steam_id, email, consent_given } = await req.json();

  const ip = req.headers.get('x-forwarded-for')?.split(',').shift() || ''

  try {
    await pool.sql`
      INSERT INTO mailing_list (steam_id, email, consent_given, signed_at, consent_ip)
      VALUES (${steam_id}, ${email}, ${consent_given}, NOW(), ${ip}::inet)
      ON CONFLICT (steam_id)
      DO UPDATE SET 
        email = EXCLUDED.email,
        consent_given = EXCLUDED.consent_given,
        consent_ip = EXCLUDED.consent_ip,
        signed_at = NOW();
    `;
  } catch (error) {
    console.error("Database error: ", error)
    return NextResponse.json({ success: false, error: 'Database error' }, { status: 500 })
  }

  return NextResponse.json({ success: true });
}
