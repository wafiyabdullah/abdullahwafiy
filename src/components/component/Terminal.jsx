import React from 'react';

const Terminal = () => {
  const terminalContent = [
    { command: 'about', output: 'I am a web developer passionate about creating amazing user experiences.' },
    { command: 'skills', output: 'My skills include: React, Tailwind CSS, JavaScript, Node.js' },
    { command: 'contact', output: 'You can reach me at: example@email.com' },
    { command: 'projects', output: 'Check out my GitHub for a list of my recent projects: github.com/yourusername' },
  ];

  return (
    <div className="bg-gray-800 rounded-s shadow-lg">
      {/* Title bar */}
      <div className="bg-black-700 px-4 py-2 flex items-center justify-between">
        <div className="text-white font-semibold">Terminal</div>
        <div className="flex space-x-3">
          <div className="">&#128469;</div>
          <div className="">&#128470;</div>
          <div className="">&#128473;</div>
        </div>
      </div>
      
      {/* Terminal content */}
      <div className="bg-black text-green-400 p-4 font-mono text-sm h-64 overflow-y-auto border border-gray-900">
        <div className="mb-2">Hi! I'm Abdullah Wafiy</div>
        {terminalContent.map((item, index) => (
          <div key={index} className="mb-2">
            <div className="flex">
              <span className="mr-2 text-blue-400">$</span>
              <span className="text-yellow-400">{item.command}</span>
            </div>
            <div className="pl-4 text-green-400">{item.output}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;

