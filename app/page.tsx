'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';

const personalities = [
  {
    id: 'bold-adventurer',
    name: 'Bold Adventurer',
    coffee: 'Double Espresso',
    tagline: 'You live for intensity',
    image: '/bold-adventurer.jpg',
  },
  {
    id: 'sweet-enthusiast',
    name: 'Sweet Enthusiast',
    coffee: 'Caramel Latte',
    tagline: "Life's too short for bitter",
    image: '/sweet-enthusiast.jpg',
  },
  {
    id: 'night-owl',
    name: 'Night Owl',
    coffee: 'Red Eye',
    tagline: 'Sleep is optional',
    image: '/night-owl.jpg',
  },
  {
    id: 'health-nut',
    name: 'Health Nut',
    coffee: 'Oat Milk Americano',
    tagline: 'Wellness in every sip',
    image: '/health-nut.jpg',
  },
  {
    id: 'artisan-snob',
    name: 'Artisan Snob',
    coffee: 'Pour-Over, Single Origin',
    tagline: 'You know what you like',
    image: '/artisan-snob.jpg',
  },
];

const questions = [
  {
    text: 'Your ideal Saturday morning looks like...',
    options: [
      { emoji: '🏔️', text: 'Up at 5am for a trail run', personality: 'bold-adventurer' },
      { emoji: '☕', text: 'Brunch with friends at a cute café', personality: 'sweet-enthusiast' },
      { emoji: '😴', text: 'Sleeping in until noon, no regrets', personality: 'night-owl' },
      { emoji: '🧘', text: 'Yoga, then a green smoothie', personality: 'health-nut' },
      { emoji: '🛍️', text: 'Farmers market, then testing a new brew method', personality: 'artisan-snob' },
    ],
  },
  {
    text: 'Which Netflix genre are you actually watching?',
    options: [
      { emoji: '💥', text: 'High-stakes action thriller', personality: 'bold-adventurer' },
      { emoji: '💕', text: 'A feel-good rom-com', personality: 'sweet-enthusiast' },
      { emoji: '🔪', text: 'True crime at 2am', personality: 'night-owl' },
      { emoji: '🌿', text: 'Nature documentary', personality: 'health-nut' },
      { emoji: '🎬', text: "Niche indie film nobody's heard of", personality: 'artisan-snob' },
    ],
  },
  {
    text: 'Pick a color that speaks to you:',
    options: [
      { emoji: '❤️', text: 'Deep red', personality: 'bold-adventurer' },
      { emoji: '🌸', text: 'Pastel pink', personality: 'sweet-enthusiast' },
      { emoji: '🌙', text: 'Midnight blue', personality: 'night-owl' },
      { emoji: '🌲', text: 'Forest green', personality: 'health-nut' },
      { emoji: '🟠', text: 'Burnt orange', personality: 'artisan-snob' },
    ],
  },
  {
    text: 'How would your coworkers describe you?',
    options: [
      { emoji: '⚡', text: 'Always pushing, sets big goals', personality: 'bold-adventurer' },
      { emoji: '🎉', text: 'Team player who brings the snacks', personality: 'sweet-enthusiast' },
      { emoji: '🦉', text: 'Quieter in the morning, unstoppable by afternoon', personality: 'night-owl' },
      { emoji: '📋', text: 'Steady, disciplined, never misses a deadline', personality: 'health-nut' },
      { emoji: '🔍', text: 'Meticulous — details matter', personality: 'artisan-snob' },
    ],
  },
  {
    text: 'Which character vibes with you most?',
    options: [
      { emoji: '🧱', text: 'Dwight Schrute', personality: 'bold-adventurer' },
      { emoji: '💅', text: 'Kelly Kapoor', personality: 'sweet-enthusiast' },
      { emoji: '😎', text: 'Ryan Howard', personality: 'night-owl' },
      { emoji: '🤸', text: 'Jim Halpert', personality: 'health-nut' },
      { emoji: '🕶️', text: 'Oscar Martinez', personality: 'artisan-snob' },
    ],
  },
  {
    text: 'Stranded on a desert island — what do you bring?',
    options: [
      { emoji: '🪓', text: 'Full survival gear', personality: 'bold-adventurer' },
      { emoji: '🍬', text: 'A bag of candy and snacks', personality: 'sweet-enthusiast' },
      { emoji: '🎵', text: 'A playlist that goes all night', personality: 'night-owl' },
      { emoji: '🧘', text: 'A fitness mat and resistance bands', personality: 'health-nut' },
      { emoji: '⚙️', text: 'A hand grinder and single-origin beans', personality: 'artisan-snob' },
    ],
  },
];

type AnimItem = { content: string; style: React.CSSProperties };

function buildAnimation(personalityId: string): AnimItem[] {
  const r = (min: number, max: number) => min + Math.random() * (max - min);

  if (personalityId === 'bold-adventurer') {
    // Explosive burst from center — red/orange emojis fly outward
    return Array.from({ length: 28 }, (_, i) => {
      const angle = (i / 28) * Math.PI * 2;
      const dist = 180 + r(0, 120);
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist;
      return {
        content: ['💥', '⚡', '🔥', '💪'][i % 4],
        style: {
          position: 'fixed',
          left: '50%',
          top: '45%',
          fontSize: `${r(22, 38)}px`,
          animation: `burst ${r(0.7, 1.1)}s ease-out forwards`,
          animationDelay: `${r(0, 0.15)}s`,
          '--tx': `${tx}px`,
          '--ty': `${ty}px`,
          zIndex: 100,
          pointerEvents: 'none',
          lineHeight: 1,
        } as React.CSSProperties,
      };
    });
  }

  if (personalityId === 'sweet-enthusiast') {
    // Falling candy/hearts from the top
    return Array.from({ length: 30 }, (_, i) => ({
      content: ['🍬', '💕', '🌸', '✨', '🧁'][i % 5],
      style: {
        position: 'fixed',
        left: `${r(3, 97)}%`,
        top: '-40px',
        fontSize: `${r(20, 34)}px`,
        animation: `fall ${r(1.8, 3.2)}s ease-in forwards`,
        animationDelay: `${r(0, 1)}s`,
        zIndex: 100,
        pointerEvents: 'none',
        lineHeight: 1,
      } as React.CSSProperties,
    }));
  }

  if (personalityId === 'night-owl') {
    // Stars and moons rise from bottom
    return Array.from({ length: 30 }, (_, i) => ({
      content: ['⭐', '🌙', '✨', '💫'][i % 4],
      style: {
        position: 'fixed',
        left: `${r(3, 97)}%`,
        top: `${r(75, 100)}%`,
        fontSize: `${r(20, 36)}px`,
        animation: `riseUp ${r(1.6, 2.8)}s ease-out forwards`,
        animationDelay: `${r(0, 0.9)}s`,
        zIndex: 100,
        pointerEvents: 'none',
        lineHeight: 1,
      } as React.CSSProperties,
    }));
  }

  if (personalityId === 'health-nut') {
    // Leaves and sparkles rise gently
    return Array.from({ length: 30 }, (_, i) => ({
      content: ['🌿', '🍃', '💚', '🌱'][i % 4],
      style: {
        position: 'fixed',
        left: `${r(3, 97)}%`,
        top: `${r(75, 100)}%`,
        fontSize: `${r(18, 32)}px`,
        animation: `riseUp ${r(2.2, 3.8)}s ease-out forwards`,
        animationDelay: `${r(0, 1.1)}s`,
        zIndex: 100,
        pointerEvents: 'none',
        lineHeight: 1,
      } as React.CSSProperties,
    }));
  }

  if (personalityId === 'artisan-snob') {
    // Wispy steam rising from center
    return Array.from({ length: 16 }, (_, i) => ({
      content: ['☕', '〰️', '✨'][i % 3],
      style: {
        position: 'fixed',
        left: `${38 + r(-12, 12) + (i % 3) * 8}%`,
        top: `${r(55, 75)}%`,
        fontSize: `${r(18, 30)}px`,
        animation: `steam ${r(1.8, 3.2)}s ease-out forwards`,
        animationDelay: `${r(0, 1.4)}s`,
        zIndex: 100,
        pointerEvents: 'none',
        lineHeight: 1,
      } as React.CSSProperties,
    }));
  }

  return [];
}

function ResultAnimation({ personalityId }: { personalityId: string }) {
  const items = useMemo(() => buildAnimation(personalityId), [personalityId]);
  return (
    <>
      {items.map((item, i) => (
        <span key={i} style={item.style}>{item.content}</span>
      ))}
    </>
  );
}

function getResult(answers: string[]) {
  const counts: Record<string, number> = {};
  for (const a of answers) counts[a] = (counts[a] || 0) + 1;
  let best = personalities[0].id;
  let bestCount = 0;
  for (const p of personalities) {
    if ((counts[p.id] || 0) > bestCount) {
      bestCount = counts[p.id] || 0;
      best = p.id;
    }
  }
  return personalities.find((p) => p.id === best)!;
}

const card: React.CSSProperties = {
  background: '#fffaf5',
  borderRadius: '20px',
  maxWidth: '520px',
  width: '100%',
  boxShadow: '0 8px 40px rgba(107,63,42,0.12)',
};

const page: React.CSSProperties = {
  minHeight: '100vh',
  background: 'linear-gradient(160deg, #f5ede0, #ead5c0)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '24px',
};

const logo: React.CSSProperties = {
  fontFamily: 'var(--font-lora), serif',
  fontSize: '13px',
  color: '#b07050',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  marginBottom: '20px',
};

export default function Home() {
  const [phase, setPhase] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  function startQuiz() {
    setPhase('quiz');
    setCurrentQuestion(0);
    setAnswers([]);
    setSelected(null);
  }

  function handleNext() {
    if (!selected) return;
    const newAnswers = [...answers, selected];
    if (currentQuestion < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
      setSelected(null);
    } else {
      setAnswers(newAnswers);
      setPhase('result');
    }
  }

  const result = phase === 'result' ? getResult(answers) : null;

  // --- INTRO ---
  if (phase === 'intro') {
    return (
      <div style={page}>
        <div style={{ ...card, padding: '48px 40px', textAlign: 'center' }}>
          <div style={{ fontSize: '72px', marginBottom: '12px', lineHeight: 1 }}>☕</div>
          <p style={logo}>Basecamp Coffee</p>
          <h1 style={{ fontFamily: 'var(--font-lora), serif', fontSize: '32px', fontWeight: 600, color: '#3d2010', lineHeight: 1.3, marginBottom: '16px' }}>
            What&apos;s Your Coffee Personality?
          </h1>
          <p style={{ fontSize: '16px', color: '#a07060', marginBottom: '36px', lineHeight: 1.6 }}>
            Answer 6 quick questions and discover the coffee that was made for you.
          </p>
          <button onClick={startQuiz} style={{ background: 'linear-gradient(135deg, #c87941, #a05520)', color: 'white', border: 'none', borderRadius: '12px', padding: '16px 40px', fontSize: '16px', fontWeight: 500, cursor: 'pointer', width: '100%', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            Start the Quiz →
          </button>
        </div>
      </div>
    );
  }

  // --- QUIZ ---
  if (phase === 'quiz') {
    const q = questions[currentQuestion];
    const progress = (currentQuestion / questions.length) * 100;
    return (
      <div style={page}>
        <div style={{ ...card, padding: '40px 36px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <p style={{ ...logo, marginBottom: 0 }}>☕ Basecamp Coffee</p>
            <p style={{ fontSize: '13px', color: '#a07060' }}>{currentQuestion + 1} / {questions.length}</p>
          </div>
          <div style={{ height: '4px', background: '#f0e0d0', borderRadius: '4px', marginBottom: '32px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #c87941, #e8a87c)', borderRadius: '4px', transition: 'width 0.3s ease' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-lora), serif', fontSize: '22px', fontWeight: 600, color: '#3d2010', marginBottom: '24px', lineHeight: 1.4 }}>
            {q.text}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
            {q.options.map((opt) => (
              <button key={opt.personality} onClick={() => setSelected(opt.personality)} style={{ border: `1.5px solid ${selected === opt.personality ? '#c87941' : '#e8d5c0'}`, borderRadius: '12px', padding: '14px 18px', background: selected === opt.personality ? '#fff5ec' : 'white', cursor: 'pointer', fontSize: '15px', color: '#5a3520', display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left', width: '100%', fontFamily: 'var(--font-dm-sans), sans-serif', transition: 'border-color 0.15s, background 0.15s' }}>
                <span style={{ fontSize: '20px', flexShrink: 0 }}>{opt.emoji}</span>
                {opt.text}
              </button>
            ))}
          </div>
          <button onClick={handleNext} disabled={!selected} style={{ width: '100%', background: selected ? 'linear-gradient(135deg, #c87941, #a05520)' : '#e8d5c0', color: selected ? 'white' : '#b09080', border: 'none', borderRadius: '12px', padding: '15px', fontSize: '15px', fontWeight: 500, cursor: selected ? 'pointer' : 'not-allowed', fontFamily: 'var(--font-dm-sans), sans-serif', transition: 'all 0.2s' }}>
            {currentQuestion < questions.length - 1 ? 'Next question →' : 'See my result →'}
          </button>
        </div>
      </div>
    );
  }

  // --- RESULT ---
  if (phase === 'result' && result) {
    return (
      <div style={{ ...page, position: 'relative' }}>
        <ResultAnimation personalityId={result.id} />
        <div style={{ ...card, padding: '40px 36px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <p style={logo}>☕ Your result</p>
          <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', height: '220px', position: 'relative' }}>
            <Image src={result.image} alt={result.coffee} fill style={{ objectFit: 'cover' }} />
          </div>
          <p style={{ fontSize: '13px', color: '#b07050', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>You&apos;re a</p>
          <h1 style={{ fontFamily: 'var(--font-lora), serif', fontSize: '30px', fontWeight: 600, color: '#3d2010', marginBottom: '8px' }}>{result.name}</h1>
          <p style={{ fontSize: '16px', color: '#a07060', fontStyle: 'italic', marginBottom: '24px' }}>&ldquo;{result.tagline}&rdquo;</p>
          <div style={{ background: '#fff3e8', border: '1.5px solid #e8c9a0', borderRadius: '12px', padding: '16px 20px', marginBottom: '28px' }}>
            <p style={{ fontSize: '13px', color: '#b07050', marginBottom: '4px' }}>Your perfect coffee</p>
            <p style={{ fontFamily: 'var(--font-lora), serif', fontSize: '20px', fontWeight: 600, color: '#3d2010' }}>{result.coffee}</p>
          </div>
          <button onClick={startQuiz} style={{ background: 'white', color: '#c87941', border: '1.5px solid #c87941', borderRadius: '12px', padding: '14px 32px', fontSize: '15px', fontWeight: 500, cursor: 'pointer', width: '100%', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            Retake the quiz
          </button>
        </div>
      </div>
    );
  }

  return null;
}
