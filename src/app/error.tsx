'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { RefreshCcw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
      <div className="w-full max-w-md mx-auto">
        <div className="text-6xl font-bold text-accent-500 mb-4">Oops!</div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Something went wrong</h1>
        
        <p className="text-xl text-text-secondary mb-8">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        
        <div className="grid gap-4 mb-8">
          <Button 
            variant="accent" 
            onClick={reset}
            className="flex items-center justify-center gap-2"
          >
            <RefreshCcw size={18} />
            Try Again
          </Button>
          
          <Button variant="outline" className="flex items-center justify-center gap-2">
            <Home size={18} />
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-background-tertiary">
          <p className="text-text-secondary">
            If the problem persists, please contact our support team at{' '}
            <a href="mailto:support@iptvstream.com" className="text-accent-500 hover:underline">
              support@iptvstream.com
            </a>
          </p>
          
          <p className="text-text-tertiary text-sm mt-4">
            Error ID: {error.digest}
          </p>
        </div>
      </div>
    </div>
  );
} 