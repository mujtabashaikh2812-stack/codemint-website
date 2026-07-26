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
      name: 'OpenAI', 
      logo: (
        <svg className="w-5 h-5 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7938.7938 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.535-3.0137l.142.0852 4.783 2.7582a.7748.7748 0 0 0 .7755 0l5.8424-3.3643v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9503a4.4992 4.4992 0 0 1-6.1408-1.6465zm-1.3582-10.454A4.4992 4.4992 0 0 1 4.5807 4.9961l-.0047.1609v5.5164a.7938.7938 0 0 0 .3927.6813l5.833 3.3643-2.0152 1.1638a.0804.0804 0 0 1-.071 0l-4.8303-2.7913a4.4944 4.4944 0 0 1-1.545-5.2415zm16.4802-2.7866a4.4992 4.4992 0 0 1-2.3371 2.8527l-.142-.0852-4.783-2.7582a.7748.7748 0 0 0-.7755 0L4.8418 8.4842V6.1518a.0804.0804 0 0 1 .0332-.0615l4.8398-2.7913a4.5087 4.5087 0 0 1 6.6758 1.6465zm1.3582 10.454a4.4992 4.4992 0 0 1-2.3371 2.8527v-5.6773a.7938.7938 0 0 0-.3927-.6813l-5.833-3.3643 2.0152-1.1638a.0804.0804 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1 1.6463 5.2428z" />
        </svg>
      )
    },
    { 
      name: 'Vercel', 
      logo: (
        <span className="font-bold text-slate-900 text-sm">▲</span>
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
            TRUSTED BY INNOVATIVE TEAMS
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
