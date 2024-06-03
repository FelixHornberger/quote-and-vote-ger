import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Received body:', body);

    const { party } = body as { party: string };
    console.log('Parsed party:', party);

    const partyPaths: { [key: string]: string } = {
      'Alliance of Liberals and Democrats for Europe Party (ALDE)': 'https://drive.google.com/file/d/1sVSorWcTEAMPSJ8gd7URo_AO9GgFe_71/preview',
      'The European Christian Political Movement (ECPM)': 'https://drive.google.com/file/d/1oIKPwriTvm81g-hfGLE8EQkcgcVFbtVz/preview',
      'European Conservatives and Reformists (ECR-Party)': 'https://drive.google.com/file/d/1de41NcyYUMoTMMI5Lfl7u6KBeaPBLwct/preview',
      'European Democrats (EDP)': 'https://drive.google.com/file/d/1K4xHnFGshR6pU5LZck-dp7zUfbREuA2X/preview',
      'European Free Alliance (EFA)': 'https://drive.google.com/file/d/1SyCvPuuYnJ5l-k7aGLV3G_k98Hl1PY1z/preview',
      'European people\'s party (EPP)': 'https://drive.google.com/file/d/1Vpdfey3TbM1RRgdiZNZDsmwI-W2OeqUC/preview',
      'European Greens (EGP)': 'https://drive.google.com/file/d/1wcHihEktE0h9eZ_db6CCjCO85VFm4OhU/preview',
      'European-LEFT (EL)': 'https://drive.google.com/file/d/1E2_CuvcIzzzLjD8yR0-6X3NTT3sScz7Y/preview',
      'The Party of European Socialists (PES)': 'https://drive.google.com/file/d/1SrXgO0YBo_SWW2t2gnNsTUzDfDQoXWNo/preview',
      'European Pirate Party (PPEU)': 'https://drive.google.com/file/d/1zzriTVcKUMzteTUX2bJsRZHI8DNUMGX-/preview',
      'Volt Europa (Volt)': 'https://drive.google.com/file/d/1aq0HHcDEoXcRKnuFSSQnfslOzYDQuy3o/preview',
    };

    const partyPath = partyPaths[party];
    console.log('Found partyPath:', partyPath);

    if (!partyPath) {
      console.log('Party not found');
      return new NextResponse('Party not found', { status: 404 });
    }

    return new Response(partyPath, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (error) {
    console.error('Error serving PDF:', error);
    return new NextResponse('Error serving PDF', { status: 500 });
  }
}