
import React, { useState } from 'react';
import { getAIInsight } from '../services/geminiService';

const AIInsightSection: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [insight, setInsight] = useState<string | null>(null);

  const fetchInsight = async (q: string) => {
    setLoading(true);
    const result = await getAIInsight(q);
    setInsight(result);
    setLoading(false);
  };

  const questions = [
    "Why choose InfluRunner?",
    "How do you handle transparency?",
    "What is your growth plan?"
  ];

  return (
    <div className="glass-card rounded-3xl p-6 mt-6">
      <div className="flex items-center space-x-2 mb-4">
        <div className="bg-orange-500 w-2 h-6 rounded-full"></div>
        <h3 className="text-xl font-bold">InfluRunner AI Agent</h3>
      </div>
      
      <p className="text-gray-400 text-sm mb-4">Ask about our vision and strategy:</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {questions.map((q, idx) => (
          <button 
            key={idx}
            onClick={() => fetchInsight(q)}
            disabled={loading}
            className="text-xs bg-white/10 hover:bg-orange-500/20 border border-white/10 rounded-full px-4 py-2 transition-colors disabled:opacity-50"
          >
            {q}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
        </div>
      ) : insight ? (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <p className="text-sm italic leading-relaxed text-gray-200">"{insight}"</p>
        </div>
      ) : null}
    </div>
  );
};

export default AIInsightSection;
