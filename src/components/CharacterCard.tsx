import { Character } from '../types';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

export function CharacterCard({ char, onClick }: { char: Character; onClick?: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative flex flex-col bg-zinc-900 border border-zinc-800/80 overflow-hidden rounded-2xl cursor-pointer hover:border-zinc-700 transition-colors"
      onClick={onClick}
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${char.color} z-10`} />
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-950">
        {char.imageUrl ? (
          <img 
            src={char.imageUrl} 
            alt={char.name} 
            className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" 
            referrerPolicy="no-referrer" 
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-zinc-800 font-bold text-2xl gap-2">
            <span>{char.name}</span>
            <span className="text-sm font-mono">{char.position}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 flex flex-col items-start translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-xl md:text-2xl font-black tracking-tight text-white mb-1 group-hover:text-zinc-100">{char.name}</h3>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-zinc-400 group-hover:text-zinc-300">
              {char.position}
            </span>
        </div>
      </div>
    </motion.div>
  );
}

export function CharacterProfileModal({ char, onClose }: { char: Character; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-900 border border-zinc-800 overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`h-2 w-full flex-shrink-0 bg-gradient-to-r ${char.color}`} />
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 border border-zinc-700/50 rounded-full flex items-center justify-center bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors z-20"
        >
          <X className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        <div className="overflow-y-auto flex-grow p-5 md:p-8 scrollbar-none flex flex-col md:flex-row gap-6 md:gap-10">
          
          <div className="w-full md:w-5/12 aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 flex-shrink-0 relative">
            {char.imageUrl ? (
              <img src={char.imageUrl} alt={char.name} className="w-full h-full object-cover object-top opacity-90" referrerPolicy="no-referrer" />
            ) : (
               <div className="w-full h-full flex items-center justify-center text-zinc-800 font-bold text-4xl">
                 {char.name}
               </div>
            )}
          </div>
          
          <div className="flex flex-col justify-start w-full md:w-7/12 py-2">
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-2">{char.name}</h3>
            <div className="flex items-center gap-2 mb-6">
               <span className="w-6 md:w-8 border-b-2 border-zinc-600 block" />
               <span className="text-sm md:text-base font-medium text-zinc-300">{char.role}</span>
            </div>
            
            <div className="flex items-center gap-2 flex-wrap mb-8">
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-zinc-400 border border-zinc-700/50 px-3 py-1.5 rounded-md bg-zinc-800/30">
                {char.position}
              </span>
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-zinc-400 border border-zinc-700/50 px-3 py-1.5 rounded-md bg-zinc-800/30">
                AGE {char.age}
              </span>
              <span className="font-medium text-[10px] md:text-xs bg-zinc-800 text-zinc-300 px-3 py-1.5 rounded-md tracking-wide">
                {char.mbti}
              </span>
            </div>

            <div className="p-4 md:p-5 bg-zinc-950/50 rounded-xl border border-zinc-800/50 mb-8 pl-5 md:pl-6 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-700 rounded-l-xl" />
              <p className="text-sm md:text-base font-medium text-zinc-300 leading-relaxed italic">
                "{char.personality}"
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] md:text-xs font-bold font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zinc-700" /> Detail Logs
              </h4>
              <ul className="space-y-3">
                {char.features.map((feat, idx) => (
                  <li key={idx} className="text-sm md:text-base flex items-start gap-3 text-zinc-400">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-600 flex-shrink-0" />
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
