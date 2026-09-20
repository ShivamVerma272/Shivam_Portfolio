import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioConfig';

export default function Terminal() {
  const [copied, setCopied] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "$ whoami\n" + PORTFOLIO_DATA.terminal.whoami + 
                   "\n$ education\n" + PORTFOLIO_DATA.terminal.education + 
                   "\n$ cgpa\n" + PORTFOLIO_DATA.terminal.cgpa + 
                   "\n$ coding\n" + PORTFOLIO_DATA.terminal.coding + 
                   "\n$ status\n" + PORTFOLIO_DATA.terminal.status;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 25);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-slate-900/90 border border-slate-700/60 rounded-xl overflow-hidden shadow-2xl backdrop-blur-md font-mono text-sm">
      {/* Terminal Bar */}
      <div className="bg-slate-800/80 px-4 py-2.5 flex items-center justify-between border-b border-slate-700/50">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="text-xs text-slate-400 ml-2 flex items-center gap-1.5 font-sans font-medium">
            <TerminalIcon size={13} className="text-cyan-400" /> shivam@dev:~
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
          title="Copy Terminal Text"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 text-slate-200 min-h-[220px] whitespace-pre-wrap leading-relaxed">
        {typedText.split('\n').map((line, idx) => {
          if (line.startsWith('$')) {
            return (
              <div key={idx} className="text-cyan-400 font-semibold mt-1">
                {line}
              </div>
            );
          }
          return (
            <div key={idx} className="text-slate-300 pl-3 border-l-2 border-slate-700/50 my-0.5">
              {line}
            </div>
          );
        })}
        <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse align-middle" />
      </div>
    </div>
  );
}