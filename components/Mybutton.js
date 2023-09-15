import React from 'react';

const Mybutton = ({ label, size , onClick,type }) => {
  // Define Tailwind CSS classes based on color and size props
  const colorClasses = `bg-purple-500 hover:bg-purple-600`;
  const sizeClasses = size === 'large' ? 'px-6 py-3 text-lg' : 'px-4 py-2 text-base';
  
  return (
    <button
      className={`rounded ${colorClasses} ${sizeClasses} text-white font-roboto font-semibold focus:outline-none focus:ring focus:ring-purple-300`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};
    
export default Mybutton;
