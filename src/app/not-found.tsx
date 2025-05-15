import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
      <div className="w-full max-w-md mx-auto">
        <div className="text-9xl font-bold text-accent-500 mb-4">404</div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
        
        <p className="text-xl text-text-secondary mb-8">
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="grid gap-4 mb-8">
          <Button variant="accent" className="flex items-center justify-center gap-2">
            <Home size={18} />
            <Link href="/">Return to Homepage</Link>
          </Button>
          
          <Button variant="outline" className="flex items-center justify-center gap-2">
            <ArrowLeft size={18} />
            <span>Go Back</span>
          </Button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-background-tertiary">
          <h2 className="text-xl font-medium mb-4">Looking for something specific?</h2>
          
          <div className="flex flex-col space-y-4">
            <p className="text-text-secondary">
              Try one of these popular pages:
            </p>
            
            <div className="flex flex-wrap justify-center gap-2">
              <Link href="/pricing" className="text-accent-500 hover:underline px-2 py-1">
                Pricing Plans
              </Link>
              <Link href="/channels" className="text-accent-500 hover:underline px-2 py-1">
                Channel List
              </Link>
              <Link href="/faq" className="text-accent-500 hover:underline px-2 py-1">
                FAQs
              </Link>
              <Link href="/contact" className="text-accent-500 hover:underline px-2 py-1">
                Contact Support
              </Link>
              <Link href="/free-iptv-trial" className="text-accent-500 hover:underline px-2 py-1">
                Free Demo
              </Link>
            </div>
            
            <p className="text-text-secondary mt-4">
              Or contact our support team at <a href="mailto:support@iptvstream.com" className="text-accent-500 hover:underline">support@iptvstream.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 