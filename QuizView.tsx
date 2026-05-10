import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRETERITO_QUIZ } from './data';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy } from 'lucide-react';

export default function QuizView() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const question = PRETERITO_QUIZ[currentIdx];

  const handleOptionClick = (option: string) => {
    if (showResult) return;
    setSelectedOption(option);
    setShowResult(true);
    if (option === question.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < PRETERITO_QUIZ.length - 1) {
      setCurrentIdx(i => i + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setQuizFinished(false);
  };

  if (quizFinished) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto py-12 text-center space-y-8"
      >
        <div className="bg-slate-900 p-12 rounded-[60px] shadow-2xl border-4 border-yellow-400 relative overflow-hidden">
          <Trophy className="w-32 h-32 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-4xl font-black text-white uppercase italic mb-2">Արդյունք</h2>
          <p className="text-7xl font-black text-yellow-400 mb-8">{score} / {PRETERITO_QUIZ.length}</p>
          
          <button 
            onClick={resetQuiz}
            className="flex items-center gap-3 bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 rounded-full text-xl font-bold transition-all mx-auto shadow-lg shadow-rose-600/30"
          >
            <RotateCcw className="w-6 h-6" />
            Փորձել նորից
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-1">Վարժություն {currentIdx + 1}/{PRETERITO_QUIZ.length}</p>
          <div className="flex gap-1">
            {PRETERITO_QUIZ.map((_, i) => (
              <div 
                key={i} 
                className={`h-2 w-8 rounded-full transition-all ${
                  i === currentIdx ? 'bg-rose-600 w-12' : i < currentIdx ? 'bg-green-500' : 'bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>
        <p className="text-2xl font-black text-slate-800 italic">Score: <span className="text-rose-600">{score}</span></p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-8"
        >
          <div className="bg-slate-900 p-6 sm:p-10 rounded-[32px] sm:rounded-[48px] shadow-xl text-center space-y-4 sm:space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-600 to-orange-500" />
            <p className="text-xl sm:text-4xl font-black text-white italic leading-tight break-words">
              {question.sentence.split('___').map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {i === 0 && (
                    <span className={`inline-block mx-2 border-b-2 sm:border-b-4 ${showResult ? (selectedOption === question.correctAnswer ? 'text-green-400 border-green-400' : 'text-rose-500 border-rose-500') : 'text-yellow-400 border-yellow-400/30'} min-w-[80px] sm:min-w-[120px]`}>
                      {selectedOption || '___'}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </p>
            <p className="text-white/50 text-[10px] sm:text-sm font-bold uppercase tracking-widest leading-relaxed">{question.translation}</p>
          </div>

          <div className="grid gap-3 sm:gap-4">
            {question.options.map((option) => {
              const isCorrect = option === question.correctAnswer;
              const isSelected = option === selectedOption;
              
              let bgColor = 'bg-white';
              let borderColor = 'border-slate-100';
              let textColor = 'text-slate-800';

              if (showResult) {
                if (isCorrect) {
                  bgColor = 'bg-green-50';
                  borderColor = 'border-green-500';
                  textColor = 'text-green-700';
                } else if (isSelected) {
                  bgColor = 'bg-rose-50';
                  borderColor = 'border-rose-500';
                  textColor = 'text-rose-700';
                } else {
                  bgColor = 'bg-white opacity-50';
                }
              }

              return (
                <button
                  key={option}
                  disabled={showResult}
                  onClick={() => handleOptionClick(option)}
                  className={`group relative p-4 sm:p-6 rounded-[24px] sm:rounded-[32px] border-2 ${borderColor} ${bgColor} ${textColor} text-lg sm:text-xl font-bold transition-all flex items-center justify-between ${!showResult && 'hover:border-rose-600 hover:shadow-xl'}`}
                >
                  <span className="flex-1 text-left break-words mr-2">{option}</span>
                  {showResult && isCorrect && <CheckCircle2 className="text-green-500 w-6 h-6 sm:w-8 sm:h-8 shrink-0" />}
                  {showResult && isSelected && !isCorrect && <XCircle className="text-rose-500 w-6 h-6 sm:w-8 sm:h-8 shrink-0" />}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {showResult && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={handleNext}
                className="w-full bg-slate-900 text-white py-5 sm:py-6 rounded-[24px] sm:rounded-[32px] text-lg sm:text-2xl font-black uppercase italic tracking-widest flex items-center justify-center gap-4 hover:bg-slate-800 transition-colors shadow-2xl"
              >
                {currentIdx < PRETERITO_QUIZ.length - 1 ? 'Հաջորդը' : 'Ավարտել'}
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
