'use client';
import { useEffect, useRef, useState } from 'react';

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function TurnstileWidget({ 
  onVerify, 
  onError, 
  onExpire, 
  theme = 'light', 
  size = 'normal',
  autoVerify = false  //If true, automatically calls server verification
}) {
  const turnstileRef = useRef(null);
  const [widgetId, setWidgetId] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load Turnstile script if not already loaded
    if (!window.turnstile) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      script.onload = () => setIsLoaded(true);
      document.head.appendChild(script);
    } else {
      setIsLoaded(true);
    }

    return () => {
      // Cleanup widget on unmount
      if (widgetId && window.turnstile) {
        window.turnstile.remove(widgetId);
      }
    };
  }, [widgetId]);

  useEffect(() => {
    if (isLoaded && turnstileRef.current && !widgetId) {
      const id = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme,
        size,
        callback: async (token) => {
          if (autoVerify) {
            // Automatically verify with server
            try {
              const response = await fetch('/api/verify-turnstile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token }),
              });
              
              const result = await response.json();
              
              if (result.success) {
                onVerify?.(token, result);
              } else {
                onError?.(result.error || 'Server verification failed');
              }
            } catch (error) {
              onError?.('Network error during verification');
            }
          } else {
            // Just pass the token to parent
            onVerify?.(token);
          }
        },
        'error-callback': (error) => {
          onError?.(error);
        },
        'expired-callback': () => {
          onExpire?.();
        },
      });
      setWidgetId(id);
    }
  }, [isLoaded, theme, size, onVerify, onError, onExpire, widgetId, autoVerify]);

  // Method to reset the widget
  const reset = () => {
    if (widgetId && window.turnstile) {
      window.turnstile.reset(widgetId);
    }
  };

  // Method to get the current token
  const getResponse = () => {
    if (widgetId && window.turnstile) {
      return window.turnstile.getResponse(widgetId);
    }
    return null;
  };

  return <div ref={turnstileRef} />;
}

// Enhanced hook with server verification
export function useTurnstile(autoVerify = false) {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const widgetRef = useRef(null);

  const verifyWithServer = async (token) => {
    setIsVerifying(true);
    try {
      const response = await fetch('/api/verify-turnstile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setToken(token);
        setIsVerified(true);
        setError(null);
        return { success: true, data: result };
      } else {
        setError(result.error || 'Verification failed');
        setIsVerified(false);
        setToken(null);
        return { success: false, error: result.error };
      }
    } catch (error) {
      const errorMsg = 'Network error during verification';
      setError(errorMsg);
      setIsVerified(false);
      setToken(null);
      return { success: false, error: errorMsg };
    } finally {
      setIsVerifying(false);
    }
  };

  const handleVerify = async (token, serverResult = null) => {
    if (autoVerify && serverResult) {
      // Already verified by widget
      setToken(token);
      setIsVerified(true);
      setError(null);
    } else if (autoVerify) {
      // This shouldn't happen, but handle it
      await verifyWithServer(token);
    } else {
      // Manual verification - just store token
      setToken(token);
      setIsVerified(false); // Not server-verified yet
      setError(null);
    }
  };

  const handleError = (error) => {
    setError(error);
    setIsVerified(false);
    setToken(null);
  };

  const handleExpire = () => {
    setToken(null);
    setIsVerified(false);
    setError(null);
  };

  const reset = () => {
    if (widgetRef.current) {
      widgetRef.current.reset();
    }
    setToken(null);
    setIsVerified(false);
    setError(null);
  };

  // Manual verification method
  const verify = async () => {
    if (!token) {
      setError('No token to verify');
      return { success: false, error: 'No token to verify' };
    }
    return await verifyWithServer(token);
  };

  return { token, error, isVerified, isVerifying, widgetRef, handleVerify, handleError, handleExpire, verify, reset, };
}