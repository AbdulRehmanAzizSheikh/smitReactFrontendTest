import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800 py-6 text-center text-sm mt-auto">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} Abdul Rehman. All Rights Reserved.</p>
        <p className="text-xs text-gray-500 mt-1">Built for React Frontend Assessment Test</p>
      </div>
    </footer>
  );
}
export default Footer;