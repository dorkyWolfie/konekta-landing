import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { page } from '@/models/page';

function cyrillicToLatin(text) {
  const map = {
    'А': 'A',  'а': 'a',
    'Б': 'B',  'б': 'b',
    'В': 'V',  'в': 'v',
    'Г': 'G',  'г': 'g',
    'Д': 'D',  'д': 'd',
    'Ѓ': 'Gj', 'ѓ': 'gj',
    'Е': 'E',  'е': 'e',
    'Ж': 'Zh', 'ж': 'zh',
    'З': 'Z',  'з': 'z',
    'Ѕ': 'Dz', 'ѕ': 'dz',
    'И': 'I',  'и': 'i',
    'Ј': 'J',  'ј': 'j',
    'К': 'K',  'к': 'k',
    'Л': 'L',  'л': 'l',
    'Љ': 'Lj', 'љ': 'lj',
    'М': 'M',  'м': 'm',
    'Н': 'N',  'н': 'n',
    'Њ': 'Nj', 'њ': 'nj',
    'О': 'O',  'о': 'o',
    'П': 'P',  'п': 'p',
    'Р': 'R',  'р': 'r',
    'С': 'S',  'с': 's',
    'Т': 'T',  'т': 't',
    'Ќ': 'Kj', 'ќ': 'kj',
    'У': 'U',  'у': 'u',
    'Ф': 'F',  'ф': 'f',
    'Х': 'H',  'х': 'h',
    'Ц': 'C',  'ц': 'c',
    'Ч': 'Ch', 'ч': 'ch',
    'Џ': 'Dzh','џ': 'dzh',
    'Ш': 'Sh', 'ш': 'sh',
  };

  return text.split('').map(char => map[char] || char).join('');
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const uri = searchParams.get('uri');

  if (!uri) {
    return new NextResponse('Missing uri parameter', { status: 400 });
  }

  await mongoose.connect(process.env.MONGO_URI);
  const Page = await page.findOne({ uri });
  if (!Page) {
    return new NextResponse('Page not found', { status: 404 });
  }

  const displayNameLatin = cyrillicToLatin(Page.displayName);
  const companyLatin = cyrillicToLatin(Page.company);
  const positionLatin = cyrillicToLatin(Page.position);

  const lines = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  `N:${displayNameLatin.split(' ').reverse().join(';')}`,
  `FN:${displayNameLatin}`,
  companyLatin ? `ORG:${companyLatin}` : '',
  positionLatin ? `TITLE:${positionLatin}` : '',
  Page.buttons?.phone ? `TEL;TYPE=CELL:${Page.buttons.phone}` : '',
  Page.buttons?.email ? `EMAIL:${Page.buttons.email}` : '',
  Page.buttons?.website ? `URL:${Page.buttons.website}` : '',
  'END:VCARD',
];

const vCardString = lines.filter(Boolean).join('\r\n');

  return new NextResponse(vCardString, {
    status: 200,
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': `attachment; filename="${uri}.vcf"`,
    },
  });
}
