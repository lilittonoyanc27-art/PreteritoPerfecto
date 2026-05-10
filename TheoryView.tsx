import React from 'react';
import { motion } from 'motion/react';
import { PRETERITO_THEORY } from './data';
import { BookOpen, Star, AlertCircle, Clock, CheckCircle2 } from 'lucide-react';

export default function TheoryView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8 py-8 px-4"
    >
      <div className="bg-slate-950 p-6 sm:p-8 rounded-[32px] sm:rounded-[40px] shadow-2xl border-rose-500 border-2 relative overflow-hidden text-center">
        <Clock className="w-16 h-16 sm:w-24 sm:h-24 text-rose-500/20 absolute -top-4 -right-4 rotate-12" />
        <h2 className="text-2xl sm:text-5xl font-black text-yellow-400 uppercase italic mb-3 sm:mb-4">Pretérito Perfecto</h2>
        <p className="text-white text-sm sm:text-lg opacity-80 max-w-2xl mx-auto italic leading-relaxed px-2">
          Սովորիր, թե ինչպես խոսել անցյալում կատարված գործողությունների մասին, որոնք դեռ կապ ունեն ներկայի հետ:
        </p>
      </div>

      <div className="grid gap-6">
        {PRETERITO_THEORY.map((point, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-[32px] sm:rounded-[40px] shadow-xl border-2 border-slate-50 overflow-hidden"
          >
            <div className="bg-slate-900 px-6 sm:px-8 py-4 flex items-center justify-between">
               <h3 className="text-lg sm:text-xl font-black text-white uppercase italic">{point.title}</h3>
               {point.conjugationTables && <Star className="text-yellow-400 w-4 h-4 sm:w-5 h-5" />}
               {point.rules && <AlertCircle className="text-orange-500 w-4 h-4 sm:w-5 h-5" />}
               {point.markers && <Clock className="text-blue-400 w-4 h-4 sm:w-5 h-5" />}
            </div>

            <div className="p-5 sm:p-8">
              {point.content && (
                <p className="text-slate-700 text-base sm:text-lg font-medium mb-6 leading-relaxed">
                  {point.content}
                </p>
              )}

              {point.conjugationTables && (
                <div className="space-y-10">
                  {point.conjugationTables.map((table, tIdx) => (
                    <div key={tIdx} className="space-y-4">
                      <div className="flex items-center gap-2 border-b-2 border-rose-500 pb-2">
                        <BookOpen className="w-5 h-5 text-rose-500" />
                        <h4 className="text-lg font-black text-slate-900 uppercase italic">{table.title}</h4>
                      </div>
                      <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0">
                        <table className="w-full text-left border-collapse min-w-[280px]">
                          <thead>
                            <tr className="border-b-2 border-slate-100">
                              <th className="py-4 text-[10px] sm:text-xs font-black uppercase text-slate-400 tracking-widest">Դերանուն</th>
                              <th className="py-4 text-[10px] sm:text-xs font-black uppercase text-slate-400 tracking-widest px-4">Haber</th>
                              <th className="py-4 text-[10px] sm:text-xs font-black uppercase text-slate-400 tracking-widest">Participio</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-50">
                            {table.rows.map((row, idx) => (
                              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                <td className="py-4 font-bold text-slate-400 text-xs sm:text-base">{row.pronoun}</td>
                                <td className="py-4 font-black text-rose-600 text-lg sm:text-2xl italic px-4">{row.haber}</td>
                                <td className="py-4 font-bold text-slate-800 text-base sm:text-xl">{row.participio}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {point.rules && (
                <div className="space-y-3">
                  {point.rules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border-l-4 border-rose-600">
                      <p className="text-slate-800 font-bold text-sm sm:text-lg break-words">{rule}</p>
                    </div>
                  ))}
                </div>
              )}

              {point.markers && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {point.markers.map((marker, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-blue-50/50 p-3 sm:p-4 rounded-2xl border border-blue-100">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 h-5 text-blue-500 shrink-0" />
                      <span className="text-blue-900 font-bold text-sm sm:text-base break-words">{marker}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
