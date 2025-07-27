// api/verify-turnstile/route.js
export async function POST(request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return Response.json(
        { success: false, error: 'Token is required' }, 
        { status: 400 }
      );
    }

    const verification = await verifyTurnstileToken(token);
    
    return Response.json({
      success: verification.success,
      error: verification.success ? null : verification.error,
      challengeTs: verification.challengeTs,
      hostname: verification.hostname
    }, {
      status: verification.success ? 200 : 400
    });
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return Response.json(
      { success: false, error: 'Server error during verification' }, 
      { status: 500 }
    );
  }
}

async function verifyTurnstileToken(token) {
  if (!token) {
    return { success: false, error: 'No token provided' };
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });

    const data = await response.json();
    
    return {
      success: data.success,
      error: data.success ? null : (data['error-codes']?.join(', ') || 'Verification failed'),
      challengeTs: data.challenge_ts,
      hostname: data.hostname,
    };
  } catch (error) {
    console.error('Turnstile API error:', error);
    return { 
      success: false, 
      error: 'Network error during verification' 
    };
  }
}