import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { page } from '@/models/page';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const uri = searchParams.get('uri');
  if (!uri) {
    return new NextResponse('Missing uri parameter', { status: 400 });
  }

  await mongoose.connect(process.env.MONGO_URI);
  const userPage = await page.findOne({ uri });
  if (!userPage) {
    return new NextResponse('Page not found', { status: 404 });
  }

  const { displayName, company, position, buttons } = userPage;
  const phone = buttons?.phone || '';
  const email = buttons?.email || '';
  const website = buttons?.website || '';

  const [firstName, ...rest] = displayName.split(' ');
  const lastName = rest.join(' ') || '';

  const vCard = `
    BEGIN:VCARD
    VERSION:3.0
    N:${lastName};${firstName}
    FN:${displayName}
    ORG:${company}
    TITLE:${position}
    TEL;TYPE=CELL:${phone}
    EMAIL:${email}
    END:VCARD
  `.trim();

  return new NextResponse(vCard, {
    status: 200,
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': `attachment; filename="${uri}.vcf"`,
    },
  });
}
