
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "text-3xl" }) => {
  return (
    <div className={`font-extrabold tracking-tighter ${className}`}>
      <span className="text-white">Influ</span>
      <span className="text-orange-500 italic">Runner</span>
    </div>
  );
};

export default Logo;
