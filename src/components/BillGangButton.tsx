"use client";

import { ReactNode, ButtonHTMLAttributes, useEffect } from 'react';
import { X } from 'lucide-react';
import { initBillGangPopup } from '@/lib/billgang';

interface BillGangButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  productPath: string;
  domain: string;
  children: ReactNode;
  className?: string;
}

export default function BillGangButton({
  productPath,
  domain,
  children,
  className = '',
  ...props
}: BillGangButtonProps) {
  useEffect(() => {
    // Initialize BillGang popup functionality
    initBillGangPopup();
  }, []);

  return (
    <button
      data-billgang-product-path={productPath}
      data-billgang-domain={domain}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}

// Close button component for the BillGang popup
export function BillGangCloseButton() {
  const handleClose = () => {
    // Send message to close the iframe
    window.parent.postMessage('closeBillgangIframe', '*');
  };

  return (
    <button
      onClick={handleClose}
      className="absolute top-1 right-1 z-[9999] bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-1.5 transition-colors duration-200 shadow-lg"
      style={{ backgroundColor: '#10b981' }}
      aria-label="Close"
    >
      <X className="h-4 w-4" />
    </button>
  );
}