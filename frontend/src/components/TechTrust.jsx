import React from 'react';

export default function TechTrust() {
  const technologies = [
    { 
      name: 'React', 
      logo: (
        <svg className="w-5 h-5 text-[#61DAFB]" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="2.5" />
          <g fill="none" stroke="currentColor" strokeWidth="1.2">
            <ellipse cx="12" cy="12" rx="9" ry="3.5" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
          </g>
        </svg>
      )
    },
    { 
      name: 'Next.js', 
      logo: (
        <div className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold font-mono text-[11px] flex items-center justify-center">
          N
        </div>
      )
    },
    { 
      name: 'Node.js', 
      logo: (
        <span className="text-base">🟢</span>
      )
    },
    { 
      name: 'AWS', 
      logo: (
        <span className="text-xs font-black tracking-tighter text-[#FF9900] bg-slate-900 px-1.5 py-0.5 rounded font-mono">
          aws
        </span>
      )
    },
    { 
      name: 'Tailwind', 
      logo: (
        <span className="text-sm font-bold text-[#06B6D4]">TW</span>
      )
    },
    { 
      name: 'TypeScript', 
      logo: (
        <span className="text-sm font-bold text-[#3178C6]">TS</span>
      )
    },
    { 
      name: 'MongoDB', 
      logo: (
        <span className="text-base">🍃</span>
      )
    }
  ];

  return (
    <section className="py-6 bg-[#090D12] relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Elevated Pure White Floating Banner */}
        <div className="bg-white text-slate-900 rounded-[28px] p-6 md:p-8 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-slate-200">
          
          <div className="text-xs font-black font-mono tracking-widest text-slate-500 uppercase shrink-0">
            TECHNOLOGIES WE USE
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-8 sm:gap-10">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2.5 font-bold text-slate-800 text-sm sm:text-base hover:text-[#2563EB] transition-all duration-300 cursor-pointer hover:scale-105"
              >
                {tech.logo}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

