import { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

export default function TopBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const isDismissed = localStorage.getItem('topBarDismissed');
    if (isDismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('topBarDismissed', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-sm font-medium">
          Welcome to Enclave Bixby - Your premier shopping destination
        </div>
        <button 
          onClick={handleDismiss}
          className="p-1 rounded-full hover:bg-black/10 transition-colors"
          aria-label="Close banner"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
