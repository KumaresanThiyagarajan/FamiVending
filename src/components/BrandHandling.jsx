import React, { useState } from 'react';
import './BrandHandling.css';

// SVGs for the 5 category circular highlights
const SnacksCategoryImg = () => (
  <svg viewBox="0 0 200 200" className="category-svg-img">
    <defs>
      <radialGradient id="snackBg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fff5f5" />
        <stop offset="100%" stopColor="#fee2e2" />
      </radialGradient>
    </defs>
    <rect width="200" height="200" fill="url(#snackBg)" />
    {/* Bowl of chips */}
    <ellipse cx="100" cy="140" rx="65" ry="25" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="4" />
    <path d="M 40 135 Q 100 175 160 135 Q 150 110 50 110 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" />
    {/* Chips */}
    <ellipse cx="75" cy="115" rx="18" ry="10" fill="#facc15" stroke="#eab308" strokeWidth="2" transform="rotate(-15 75 115)" />
    <ellipse cx="105" cy="110" rx="20" ry="12" fill="#fbbf24" stroke="#d97706" strokeWidth="2" transform="rotate(10 105 110)" />
    <ellipse cx="130" cy="120" rx="16" ry="9" fill="#fde047" stroke="#ca8a04" strokeWidth="2" transform="rotate(25 130 120)" />
    <ellipse cx="90" cy="122" rx="19" ry="11" fill="#fef08a" stroke="#eab308" strokeWidth="2" transform="rotate(-5 90 122)" />
    {/* Lay's Red bag mockup */}
    <path d="M 30 65 L 75 55 L 70 120 L 25 110 Z" fill="#ef4444" rx="4" />
    <circle cx="50" cy="85" r="14" fill="#facc15" />
    <path d="M 40 85 Q 50 78 60 85" fill="none" stroke="#dc2626" strokeWidth="3" />
    {/* Doritos Orange bag mockup */}
    <path d="M 85 45 L 140 50 L 130 115 L 75 105 Z" fill="#ea580c" />
    <polygon points="100,65 125,95 85,90" fill="#f97316" stroke="#facc15" strokeWidth="2" />
    {/* Pringles Red tube mockup */}
    <rect x="142" y="50" width="30" height="75" rx="5" fill="#dc2626" />
    <ellipse cx="157" cy="50" rx="15" ry="5" fill="#b91c1c" />
    <ellipse cx="157" cy="70" rx="10" ry="6" fill="#fef08a" stroke="#d97706" strokeWidth="1.5" />
  </svg>
);

const CakeCategoryImg = () => (
  <svg viewBox="0 0 200 200" className="category-svg-img">
    <defs>
      <linearGradient id="cakeBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fffbe0" />
        <stop offset="100%" stopColor="#fef3c7" />
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="url(#cakeBg)" />
    {/* Cake stand */}
    <ellipse cx="100" cy="155" rx="75" ry="15" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="3" />
    <path d="M 85 155 L 90 175 L 110 175 L 115 155 Z" fill="#cbd5e1" />
    {/* Bottom Layer */}
    <path d="M 45 110 C 45 95, 155 95, 155 110 L 155 145 C 155 160, 45 160, 45 145 Z" fill="#78350f" />
    {/* Frosting Middle */}
    <path d="M 45 125 Q 100 140 155 125 L 155 132 Q 100 147 45 132 Z" fill="#fef08a" />
    {/* Drips of chocolate frosting */}
    <path d="M 45 110 Q 60 125 75 110 Q 90 130 105 110 Q 120 128 135 110 Q 150 122 155 110 L 155 100 C 155 85, 45 85, 45 100 Z" fill="#451a03" />
    {/* Top Cream Swirls */}
    <circle cx="65" cy="90" r="10" fill="#ffffff" />
    <circle cx="65" cy="85" r="4" fill="#dc2626" />
    <circle cx="100" cy="88" r="10" fill="#ffffff" />
    <circle cx="100" cy="83" r="4" fill="#dc2626" />
    <circle cx="135" cy="90" r="10" fill="#ffffff" />
    <circle cx="135" cy="85" r="4" fill="#dc2626" />
  </svg>
);

const ChocolateCategoryImg = () => (
  <svg viewBox="0 0 200 200" className="category-svg-img">
    <defs>
      <linearGradient id="chocoBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f3e8ff" />
        <stop offset="100%" stopColor="#e9d5ff" />
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="url(#chocoBg)" />
    {/* Cadbury Dairy Milk Pack */}
    <g transform="translate(30, 45) rotate(-12)">
      <rect x="0" y="0" width="70" height="105" rx="6" fill="#4c1d95" />
      <rect x="5" y="5" width="60" height="95" rx="4" fill="#5b21b6" stroke="#7c3aed" strokeWidth="1" />
      <path d="M 10 20 Q 35 10 60 20" fill="none" stroke="#fef08a" strokeWidth="3" />
      <text x="35" y="45" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Cadbury</text>
      <text x="35" y="62" fill="#fef08a" fontSize="12" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">Dairy Milk</text>
    </g>
    {/* Chocolate Blocks */}
    <g transform="translate(100, 105)">
      {/* Block 1 */}
      <rect x="0" y="0" width="40" height="25" rx="3" fill="#581c87" stroke="#3b0764" strokeWidth="2" />
      <rect x="4" y="3" width="32" height="19" rx="2" fill="#6b21a8" />
      {/* Block 2 */}
      <rect x="42" y="0" width="40" height="25" rx="3" fill="#581c87" stroke="#3b0764" strokeWidth="2" />
      <rect x="46" y="3" width="32" height="19" rx="2" fill="#6b21a8" />
      {/* Block 3 */}
      <rect x="20" y="27" width="40" height="25" rx="3" fill="#451a03" stroke="#270901" strokeWidth="2" />
      <rect x="24" y="30" width="32" height="19" rx="2" fill="#78350f" />
    </g>
  </svg>
);

const BiscuitsCategoryImg = () => (
  <svg viewBox="0 0 200 200" className="category-svg-img">
    <defs>
      <linearGradient id="biscBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ecfdf5" />
        <stop offset="100%" stopColor="#d1fae5" />
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="url(#biscBg)" />
    {/* Oreo Pack */}
    <g transform="translate(85, 35) rotate(15)">
      <rect x="0" y="0" width="95" height="45" rx="22" fill="#1e3a8a" stroke="#2563eb" strokeWidth="2" />
      <text x="47" y="28" fill="#ffffff" fontSize="16" fontWeight="900" textAnchor="middle" fontFamily="sans-serif" letterSpacing="1">OREO</text>
    </g>
    {/* Oreo Cookie */}
    <circle cx="70" cy="115" r="32" fill="#171717" stroke="#262626" strokeWidth="3" />
    <circle cx="70" cy="115" r="26" fill="none" stroke="#404040" strokeWidth="2" strokeDasharray="4 2" />
    <text x="70" y="120" fill="#525252" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">OREO</text>
    {/* Butter Cookies Stack */}
    <g transform="translate(115, 100)">
      <rect x="0" y="0" width="55" height="35" rx="8" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
      <circle cx="15" cy="12" r="2" fill="#78350f" />
      <circle cx="28" cy="20" r="2" fill="#78350f" />
      <circle cx="40" cy="10" r="2" fill="#78350f" />
      <circle cx="20" cy="25" r="2" fill="#78350f" />
      <circle cx="38" cy="24" r="2" fill="#78350f" />
    </g>
    {/* Round Cookie */}
    <circle cx="120" cy="150" r="22" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
    <circle cx="120" cy="150" r="16" fill="none" stroke="#eab308" strokeWidth="1.5" strokeDasharray="3 3" />
  </svg>
);

const BeveragesCategoryImg = () => (
  <svg viewBox="0 0 200 200" className="category-svg-img">
    <defs>
      <linearGradient id="bevBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e0f2fe" />
        <stop offset="100%" stopColor="#bae6fd" />
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="url(#bevBg)" />
    {/* Ice cubes background */}
    <rect x="30" y="130" width="30" height="30" rx="5" fill="rgba(255,255,255,0.7)" transform="rotate(15 45 145)" />
    <rect x="140" y="125" width="35" height="35" rx="6" fill="rgba(255,255,255,0.7)" transform="rotate(-20 157 142)" />
    {/* Coca Cola Bottle */}
    <g transform="translate(40, 50)">
      <rect x="12" y="0" width="10" height="12" fill="#dc2626" rx="2" />
      <path d="M 10 12 L 24 12 L 28 35 L 28 100 L 6 100 L 6 35 Z" fill="#7f1d1d" />
      <rect x="5" y="50" width="24" height="25" fill="#dc2626" />
      <text x="17" y="67" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Coke</text>
    </g>
    {/* Pepsi Bottle */}
    <g transform="translate(75, 40)">
      <rect x="12" y="0" width="10" height="12" fill="#2563eb" rx="2" />
      <path d="M 8 12 L 26 12 L 30 35 L 30 110 L 4 110 L 4 35 Z" fill="#1e3a8a" />
      <circle cx="17" cy="65" r="12" fill="#2563eb" />
      <path d="M 5 65 Q 17 55 29 65" fill="#dc2626" />
    </g>
    {/* Sprite Bottle */}
    <g transform="translate(115, 55)">
      <rect x="10" y="0" width="10" height="10" fill="#16a34a" rx="2" />
      <path d="M 7 10 L 23 10 L 26 30 L 26 95 L 4 95 L 4 30 Z" fill="#15803d" />
      <rect x="4" y="45" width="22" height="22" fill="#facc15" />
      <text x="15" y="60" fill="#15803d" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Sprite</text>
    </g>
    {/* Fanta Bottle */}
    <g transform="translate(150, 65)">
      <rect x="8" y="0" width="8" height="8" fill="#ea580c" rx="2" />
      <path d="M 5 8 L 19 8 L 22 25 L 22 80 L 2 80 L 2 25 Z" fill="#c2410c" />
      <circle cx="12" cy="48" r="9" fill="#ea580c" />
    </g>
  </svg>
);

// Minimalist delicate ray marks around the active category circle
const CircleRayMarks = ({ color }) => (
  <>
    <div className="bh-circle-rays bh-circle-rays-left">
      <svg viewBox="0 0 16 32" width="16" height="32">
        <line x1="14" y1="6" x2="2" y2="10" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
        <line x1="15" y1="16" x2="1" y2="16" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
        <line x1="14" y1="26" x2="2" y2="22" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </div>
    <div className="bh-circle-rays bh-circle-rays-right">
      <svg viewBox="0 0 16 32" width="16" height="32">
        <line x1="2" y1="6" x2="14" y2="10" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
        <line x1="1" y1="16" x2="15" y2="16" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
        <line x1="2" y1="26" x2="14" y2="22" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </div>
  </>
);

// 10 Clean, Minimalist, Authentically Styled Brands per Category (50 Brands)
const categoryBrands = {
  // 1. CHOCOLATE (Exact 10 brands from design mockup with refined typography & padding)
  chocolate: [
    {
      id: 'cadbury',
      name: 'Cadbury',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#1d0047" />
          <text x="80" y="38" fill="#ffffff" fontSize="27" fontFamily="'Brush Script MT', 'Great Vibes', cursive" fontStyle="italic" textAnchor="middle">
            Cadbury
          </text>
        </svg>
      )
    },
    {
      id: 'dairy-milk',
      name: 'Cadbury Dairy Milk',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#240d58" />
          <text x="80" y="21" fill="#ffffff" fontSize="12" fontFamily="'Brush Script MT', cursive" fontStyle="italic" textAnchor="middle" opacity="0.92">
            Cadbury
          </text>
          <text x="80" y="42" fill="#fed833" fontSize="17" fontWeight="800" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.2">
            Dairy Milk
          </text>
        </svg>
      )
    },
    {
      id: 'kitkat',
      name: 'KitKat',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#ffffff" stroke="#f1f5f9" strokeWidth="1" />
          <ellipse cx="80" cy="28" rx="56" ry="21" fill="#dc2626" />
          <ellipse cx="80" cy="28" rx="52" ry="17.5" fill="none" stroke="#ffffff" strokeWidth="1.2" />
          <text x="80" y="20" fill="#ffffff" fontSize="8" fontFamily="'Brush Script MT', cursive" fontStyle="italic" textAnchor="middle">
            Nestlé
          </text>
          <text x="80" y="36.5" fill="#ffffff" fontSize="20" fontWeight="900" fontStyle="italic" fontFamily="sans-serif" textAnchor="middle" letterSpacing="-0.5">
            KitKat
          </text>
        </svg>
      )
    },
    {
      id: 'snickers',
      name: 'Snickers',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#22120b" />
          <rect x="18" y="10" width="124" height="36" rx="5" fill="#ffffff" stroke="#00479b" strokeWidth="3" />
          <text x="80" y="36" fill="#00479b" fontSize="19" fontWeight="900" fontStyle="italic" fontFamily="'Arial Black', sans-serif" textAnchor="middle" letterSpacing="1">
            SNICKERS
          </text>
        </svg>
      )
    },
    {
      id: 'mms',
      name: "M&M's",
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#361b0f" />
          <text x="81" y="40" fill="#180b05" fontSize="30" fontWeight="900" fontStyle="italic" fontFamily="sans-serif" textAnchor="middle">
            m&amp;m's
          </text>
          <text x="79" y="38" fill="#ffffff" fontSize="30" fontWeight="900" fontStyle="italic" fontFamily="sans-serif" textAnchor="middle">
            m&amp;m's
          </text>
        </svg>
      )
    },
    {
      id: 'hersheys',
      name: "Hershey's",
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#261412" />
          <text x="80" y="36" fill="#f1f5f9" fontSize="17" fontWeight="900" fontFamily="'Arial Black', sans-serif" letterSpacing="2.5" textAnchor="middle">
            HERSHEY'S
          </text>
        </svg>
      )
    },
    {
      id: 'ferrero-rocher',
      name: 'Ferrero Rocher',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#ffffff" stroke="#f1f5f9" strokeWidth="1" />
          <ellipse cx="80" cy="28" rx="66" ry="20" fill="none" stroke="#d4af37" strokeWidth="1.2" />
          <polygon points="80,12 83,17 77,17" fill="#d4af37" />
          <circle cx="80" cy="15" r="1.5" fill="#d4af37" />
          <text x="80" y="27" fill="#42250d" fontSize="9" fontWeight="700" letterSpacing="1.8" fontFamily="serif" textAnchor="middle">
            FERRERO
          </text>
          <text x="80" y="41" fill="#42250d" fontSize="12" fontWeight="800" letterSpacing="2" fontFamily="serif" textAnchor="middle">
            ROCHER
          </text>
        </svg>
      )
    },
    {
      id: 'lindt',
      name: 'Lindt',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#161311" />
          <g transform="translate(26, 16) scale(0.68)">
            <path d="M 12 3 C 15 1, 18 4, 17 8 C 15 12, 19 16, 17 22 L 9 22 C 9 17, 3 15, 5 10 C 7 7, 7 4, 10 5 Z" fill="#d4af37" />
            <circle cx="16" cy="6" r="1.5" fill="#d4af37" />
          </g>
          <text x="96" y="38" fill="#d4af37" fontSize="27" fontFamily="'Brush Script MT', 'Great Vibes', cursive" fontStyle="italic" textAnchor="middle">
            Lindt
          </text>
        </svg>
      )
    },
    {
      id: 'bournville',
      name: 'Cadbury Bournville',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#141416" />
          <text x="80" y="21" fill="#ffffff" fontSize="11" fontFamily="'Brush Script MT', cursive" fontStyle="italic" textAnchor="middle" opacity="0.9">
            Cadbury
          </text>
          <text x="80" y="41" fill="#e5b869" fontSize="15" fontWeight="700" fontFamily="serif" letterSpacing="1.8" textAnchor="middle">
            Bournville
          </text>
        </svg>
      )
    },
    {
      id: 'galaxy',
      name: 'Galaxy',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#ffffff" stroke="#f1f5f9" strokeWidth="1" />
          <text x="80" y="39" fill="#4a2315" fontSize="29" fontFamily="'Brush Script MT', cursive" fontStyle="italic" fontWeight="700" textAnchor="middle">
            Galaxy<tspan fontSize="13" dy="-12">®</tspan>
          </text>
        </svg>
      )
    }
  ],

  // 2. SNACKS (10 brands)
  snacks: [
    {
      id: 'lays',
      name: "Lay's",
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#ffffff" stroke="#f1f5f9" strokeWidth="1" />
          <circle cx="80" cy="28" r="21" fill="#facc15" />
          <path d="M 32 28 Q 80 16 128 28 Q 80 40 32 28 Z" fill="#dc2626" />
          <text x="80" y="33" fill="#ffffff" fontSize="17" fontWeight="900" fontStyle="italic" textAnchor="middle" fontFamily="sans-serif">
            Lay's
          </text>
        </svg>
      )
    },
    {
      id: 'doritos',
      name: 'Doritos',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#0f172a" />
          <polygon points="45,46 115,46 80,12" fill="#ea580c" stroke="#facc15" strokeWidth="1.5" />
          <polygon points="54,43 106,43 80,19" fill="#dc2626" />
          <text x="80" y="38" fill="#ffffff" fontSize="19" fontWeight="900" fontStyle="italic" textAnchor="middle" fontFamily="'Arial Black', sans-serif">
            Doritos
          </text>
        </svg>
      )
    },
    {
      id: 'pringles',
      name: 'Pringles',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#dc2626" />
          <circle cx="48" cy="28" r="13" fill="#ffffff" />
          <path d="M 39 29 Q 48 35 57 29 Q 53 38 43 38 Z" fill="#78350f" />
          <circle cx="44" cy="24" r="2.2" fill="#1e293b" />
          <circle cx="52" cy="24" r="2.2" fill="#1e293b" />
          <text x="104" y="35" fill="#ffffff" fontSize="16" fontWeight="900" textAnchor="middle" fontFamily="'Arial Black', sans-serif">
            Pringles
          </text>
        </svg>
      )
    },
    {
      id: 'kurkure',
      name: 'Kurkure',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#ea580c" />
          <text x="80" y="38" fill="#facc15" fontSize="24" fontWeight="900" fontStyle="italic" textAnchor="middle" fontFamily="'Arial Black', cursive">
            Kurkure
          </text>
        </svg>
      )
    },
    {
      id: 'bingo',
      name: 'Bingo!',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#fde047" />
          <ellipse cx="80" cy="28" rx="55" ry="20" fill="#dc2626" />
          <text x="80" y="35" fill="#ffffff" fontSize="19" fontWeight="900" fontStyle="italic" textAnchor="middle" fontFamily="sans-serif">
            Bingo!
          </text>
        </svg>
      )
    },
    {
      id: 'too-yumm',
      name: 'Too Yumm!',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#0f172a" />
          <rect x="28" y="9" width="104" height="38" rx="6" fill="#dc2626" />
          <text x="80" y="24" fill="#facc15" fontSize="12" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
            TOO
          </text>
          <text x="80" y="40" fill="#ffffff" fontSize="15" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
            YUMM!
          </text>
        </svg>
      )
    },
    {
      id: 'act-2',
      name: 'ACT II',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#facc15" />
          <polygon points="28,12 132,12 118,44 42,44" fill="#dc2626" />
          <text x="80" y="31" fill="#ffffff" fontSize="19" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
            ACT II
          </text>
          <text x="80" y="41" fill="#fef08a" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
            POPCORN
          </text>
        </svg>
      )
    },
    {
      id: 'cornitos',
      name: 'Cornitos',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#15803d" />
          <polygon points="34,37 49,17 64,37" fill="#facc15" />
          <text x="104" y="35" fill="#ffffff" fontSize="19" fontWeight="900" letterSpacing="0.8" textAnchor="middle" fontFamily="sans-serif">
            Cornitos
          </text>
        </svg>
      )
    },
    {
      id: 'cheetos',
      name: 'Cheetos',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#f97316" />
          <text x="80" y="38" fill="#ffffff" fontSize="23" fontWeight="900" fontStyle="italic" textAnchor="middle" fontFamily="'Arial Black', sans-serif">
            Cheetos
          </text>
        </svg>
      )
    },
    {
      id: 'kettle-studio',
      name: 'Kettle Studio',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#29150b" />
          <circle cx="80" cy="28" r="22" fill="none" stroke="#d4af37" strokeWidth="1.2" strokeDasharray="3 2" />
          <text x="80" y="24" fill="#d4af37" fontSize="10" fontWeight="bold" letterSpacing="1.5" textAnchor="middle" fontFamily="serif">
            KETTLE
          </text>
          <text x="80" y="39" fill="#ffffff" fontSize="13" fontWeight="900" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">
            STUDIO
          </text>
        </svg>
      )
    }
  ],

  // 3. CAKE (10 brands)
  cake: [
    {
      id: 'winkies',
      name: 'Winkies',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#5b21b6" />
          <circle cx="42" cy="28" r="13" fill="#ec4899" />
          <text x="100" y="36" fill="#ffffff" fontSize="20" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
            Winkies
          </text>
        </svg>
      )
    },
    {
      id: 'wonder-cake',
      name: 'Wonder Cake',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#d97706" />
          <circle cx="36" cy="28" r="13" fill="#fef3c7" />
          <circle cx="36" cy="23" r="3.5" fill="#dc2626" />
          <text x="98" y="35" fill="#ffffff" fontSize="15" fontWeight="900" letterSpacing="0.5" textAnchor="middle" fontFamily="sans-serif">
            WONDER CAKE
          </text>
        </svg>
      )
    },
    {
      id: 'elite',
      name: 'Elite',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#881337" />
          <path d="M 34 33 L 41 22 L 48 33 Z" fill="#fbbf24" />
          <circle cx="41" cy="20" r="2.5" fill="#fbbf24" />
          <text x="96" y="37" fill="#ffffff" fontSize="22" fontWeight="900" letterSpacing="1" textAnchor="middle" fontFamily="serif">
            Elite
          </text>
        </svg>
      )
    },
    {
      id: 'britannia-cake',
      name: 'Britannia Cake',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#ffffff" stroke="#f1f5f9" strokeWidth="1" />
          <ellipse cx="80" cy="21" rx="40" ry="13" fill="#dc2626" />
          <text x="80" y="25" fill="#ffffff" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
            BRITANNIA
          </text>
          <text x="80" y="44" fill="#d97706" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="serif">
            Fruit Cake
          </text>
        </svg>
      )
    },
    {
      id: 'monginis',
      name: 'Monginis',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#1e3a8a" />
          <circle cx="38" cy="28" r="11" fill="#f43f5e" />
          <text x="98" y="36" fill="#ffffff" fontSize="20" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
            Monginis
          </text>
        </svg>
      )
    },
    {
      id: 'aditi-marvel',
      name: 'Aditi Marvel',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#b91c1c" />
          <text x="80" y="24" fill="#fef08a" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
            ADITI
          </text>
          <text x="80" y="43" fill="#ffffff" fontSize="16" fontWeight="900" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">
            MARVEL
          </text>
        </svg>
      )
    },
    {
      id: 'otter',
      name: 'Otter',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#0f766e" />
          <circle cx="40" cy="28" r="13" fill="#ccfbf1" />
          <text x="100" y="37" fill="#ffffff" fontSize="21" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
            Otter
          </text>
        </svg>
      )
    },
    {
      id: 'yumm-treat',
      name: 'Yumm Treat',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#c026d3" />
          <circle cx="38" cy="28" r="12" fill="#fef08a" />
          <text x="98" y="36" fill="#ffffff" fontSize="17" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
            Yumm Treat
          </text>
        </svg>
      )
    },
    {
      id: 'pillsbury',
      name: 'Pillsbury',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#2563eb" />
          <ellipse cx="80" cy="28" rx="56" ry="19" fill="#ffffff" />
          <text x="80" y="34" fill="#1d4ed8" fontSize="20" fontWeight="900" fontStyle="italic" textAnchor="middle" fontFamily="'Brush Script MT', cursive">
            Pillsbury
          </text>
        </svg>
      )
    },
    {
      id: 'food-flex',
      name: 'Food Flex',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#059669" />
          <polygon points="40,17 47,37 33,37" fill="#fef08a" />
          <text x="98" y="35" fill="#ffffff" fontSize="16" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
            FOOD FLEX
          </text>
        </svg>
      )
    }
  ],

  // 4. BISCUITS (10 brands)
  biscuits: [
    {
      id: 'oreo',
      name: 'Oreo',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#003d79" />
          <ellipse cx="80" cy="28" rx="52" ry="21" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1.5" />
          <text x="80" y="36" fill="#ffffff" fontSize="22" fontWeight="900" letterSpacing="2" textAnchor="middle" fontFamily="'Arial Black', sans-serif">
            OREO
          </text>
        </svg>
      )
    },
    {
      id: 'britannia',
      name: 'Britannia',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#ffffff" stroke="#f1f5f9" strokeWidth="1" />
          <ellipse cx="80" cy="28" rx="60" ry="19" fill="#dc2626" />
          <text x="80" y="33" fill="#ffffff" fontSize="15" fontWeight="900" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">
            BRITANNIA
          </text>
        </svg>
      )
    },
    {
      id: 'parle-g',
      name: 'Parle-G',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#fef3c7" stroke="#e2e8f0" strokeWidth="1" />
          <ellipse cx="40" cy="28" rx="17" ry="17" fill="#dc2626" />
          <circle cx="40" cy="24" r="7" fill="#fde047" />
          <text x="100" y="36" fill="#dc2626" fontSize="22" fontWeight="900" textAnchor="middle" fontFamily="'Arial Black', sans-serif">
            Parle-G
          </text>
        </svg>
      )
    },
    {
      id: 'dark-fantasy',
      name: 'Dark Fantasy',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#171717" />
          <text x="80" y="22" fill="#d4af37" fontSize="10" letterSpacing="2" textAnchor="middle" fontFamily="sans-serif">
            SUNFEAST
          </text>
          <text x="80" y="42" fill="#d4af37" fontSize="18" fontFamily="'Brush Script MT', cursive" fontStyle="italic" textAnchor="middle">
            Dark Fantasy
          </text>
        </svg>
      )
    },
    {
      id: 'good-day',
      name: 'Good Day',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#f59e0b" />
          <path d="M 42 38 Q 80 48 118 38" fill="none" stroke="#ffffff" strokeWidth="2.5" />
          <text x="80" y="32" fill="#ffffff" fontSize="20" fontWeight="900" textAnchor="middle" fontFamily="'Arial Black', sans-serif">
            Good Day
          </text>
        </svg>
      )
    },
    {
      id: 'unibic',
      name: 'Unibic',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#1e3a8a" />
          <text x="80" y="36" fill="#fbbf24" fontSize="22" fontWeight="900" letterSpacing="1.8" textAnchor="middle" fontFamily="sans-serif">
            UNIBIC
          </text>
        </svg>
      )
    },
    {
      id: 'bourbon',
      name: 'Bourbon',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#381e11" />
          <circle cx="30" cy="28" r="2.5" fill="#facc15" />
          <circle cx="130" cy="28" r="2.5" fill="#facc15" />
          <text x="80" y="37" fill="#facc15" fontSize="20" fontWeight="900" letterSpacing="1" textAnchor="middle" fontFamily="serif">
            BOURBON
          </text>
        </svg>
      )
    },
    {
      id: 'hide-seek',
      name: 'Hide & Seek',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#312e81" />
          <circle cx="28" cy="21" r="3.5" fill="#78350f" />
          <circle cx="34" cy="34" r="2.8" fill="#78350f" />
          <text x="88" y="36" fill="#fef08a" fontSize="17" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
            Hide &amp; Seek
          </text>
        </svg>
      )
    },
    {
      id: 'dukes',
      name: 'Dukes',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#b91c1c" />
          <text x="80" y="37" fill="#ffffff" fontSize="24" fontWeight="900" letterSpacing="0.5" textAnchor="middle" fontFamily="sans-serif">
            Dukes
          </text>
        </svg>
      )
    },
    {
      id: 'mcvities',
      name: "McVitie's",
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#1e293b" />
          <text x="80" y="36" fill="#fbbf24" fontSize="21" fontWeight="900" fontStyle="italic" textAnchor="middle" fontFamily="serif">
            McVitie's
          </text>
        </svg>
      )
    }
  ],

  // 5. BEVERAGES (10 brands)
  beverages: [
    {
      id: 'coca-cola',
      name: 'Coca-Cola',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#dc2626" />
          <text x="80" y="38" fill="#ffffff" fontSize="27" fontFamily="'Brush Script MT', cursive" fontStyle="italic" fontWeight="bold" textAnchor="middle">
            Coca-Cola
          </text>
        </svg>
      )
    },
    {
      id: 'pepsi',
      name: 'Pepsi',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#004b93" />
          <g transform="translate(36, 13)">
            <circle cx="15" cy="15" r="14" fill="#ffffff" />
            <path d="M 1 15 Q 15 7 29 15 L 29 1 C 22 1 8 1 1 5 Z" fill="#e11d48" />
            <path d="M 1 15 Q 15 23 29 15 Q 15 30 1 15 Z" fill="#ffffff" />
            <path d="M 1 15 Q 15 30 29 15 L 29 29 C 22 29 8 29 1 25 Z" fill="#1e40af" />
          </g>
          <text x="98" y="36" fill="#ffffff" fontSize="19" fontWeight="900" fontStyle="italic" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">
            PEPSI
          </text>
        </svg>
      )
    },
    {
      id: 'sprite',
      name: 'Sprite',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#008b47" />
          <circle cx="52" cy="18" r="6" fill="#facc15" />
          <text x="86" y="38" fill="#ffffff" fontSize="24" fontWeight="900" fontStyle="italic" textAnchor="middle" fontFamily="sans-serif">
            Sprite
          </text>
        </svg>
      )
    },
    {
      id: 'thums-up',
      name: 'Thums Up',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#0f172a" />
          <path d="M 30 35 L 30 20 L 37 20 L 41 12 L 44 12 L 44 24 L 51 24 L 49 35 Z" fill="#dc2626" />
          <text x="100" y="36" fill="#38bdf8" fontSize="18" fontWeight="900" fontStyle="italic" textAnchor="middle" fontFamily="'Arial Black', sans-serif">
            Thums UP
          </text>
        </svg>
      )
    },
    {
      id: 'fanta',
      name: 'Fanta',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#ea580c" />
          <path d="M 52 14 Q 57 7 65 11 Q 63 18 52 14 Z" fill="#16a34a" />
          <text x="80" y="38" fill="#1e3a8a" fontSize="26" fontWeight="900" fontStyle="italic" textAnchor="middle" fontFamily="'Arial Black', sans-serif">
            Fanta
          </text>
        </svg>
      )
    },
    {
      id: 'red-bull',
      name: 'Red Bull',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#0a192f" />
          <circle cx="42" cy="28" r="13" fill="#fbbf24" />
          <path d="M 34 30 L 50 24 M 50 30 L 34 24" stroke="#dc2626" strokeWidth="3.5" strokeLinecap="round" />
          <text x="98" y="36" fill="#dc2626" fontSize="19" fontWeight="900" fontStyle="italic" textAnchor="middle" fontFamily="'Arial Black', sans-serif">
            Red Bull
          </text>
        </svg>
      )
    },
    {
      id: 'frooti',
      name: 'Frooti',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#fbbf24" />
          <text x="80" y="37" fill="#15803d" fontSize="24" fontWeight="900" letterSpacing="1" textAnchor="middle" fontFamily="'Arial Black', sans-serif">
            FROOTI
          </text>
        </svg>
      )
    },
    {
      id: 'paper-boat',
      name: 'Paper Boat',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#0f172a" />
          <polygon points="34,32 52,32 43,17" fill="#f97316" />
          <polygon points="43,17 48,32 38,32" fill="#fdba74" />
          <text x="96" y="36" fill="#ffffff" fontSize="16" fontWeight="bold" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">
            paper boat
          </text>
        </svg>
      )
    },
    {
      id: 'cavins',
      name: "Cavin's",
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#1d4ed8" />
          <path d="M 26 24 Q 45 16 64 24" fill="none" stroke="#ffffff" strokeWidth="2.5" />
          <text x="80" y="37" fill="#ffffff" fontSize="22" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
            Cavin's
          </text>
        </svg>
      )
    },
    {
      id: 'mountain-dew',
      name: 'Mountain Dew',
      logoSvg: (
        <svg viewBox="0 0 160 56" className="bh-brand-tile-svg">
          <rect width="160" height="56" rx="12" fill="#052e16" />
          <text x="80" y="37" fill="#84cc16" fontSize="19" fontWeight="900" fontStyle="italic" letterSpacing="1" textAnchor="middle" fontFamily="'Arial Black', sans-serif">
            MTN DEW
          </text>
        </svg>
      )
    }
  ]
};

const categoryList = [
  { key: 'snacks', label: 'Snacks', color: '#e52328', circleImg: <SnacksCategoryImg /> },
  { key: 'cake', label: 'Cake', color: '#d97706', circleImg: <CakeCategoryImg /> },
  { key: 'chocolate', label: 'Chocolate', color: '#6d28d9', circleImg: <ChocolateCategoryImg /> },
  { key: 'biscuits', label: 'Biscuits', color: '#059669', circleImg: <BiscuitsCategoryImg /> },
  { key: 'beverages', label: 'Beverages', color: '#0284c7', circleImg: <BeveragesCategoryImg /> }
];

// Pointer offset percentage aligned with category circles on desktop
const pointerPositions = {
  snacks: '10%',
  cake: '30%',
  chocolate: '50%',
  biscuits: '70%',
  beverages: '90%'
};

const BrandHandling = () => {
  const [activeCategory, setActiveCategory] = useState('chocolate');

  const handleCategoryClick = (key) => {
    if (activeCategory === key) {
      setActiveCategory(null);
    } else {
      setActiveCategory(key);
    }
  };

  const handleClosePopup = () => {
    setActiveCategory(null);
  };

  const handleBrandClick = (brand) => {
    const searchQuery = encodeURIComponent(`${brand.name} vending products`);
    window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank', 'noopener,noreferrer');
  };

  const activeCategoryObj = categoryList.find(c => c.key === activeCategory);
  const brandsToShow = activeCategory ? (categoryBrands[activeCategory] || []) : [];

  return (
    <section id="brand-handling" className="brand-handling">
      {/* Top Banner section */}
      <div className="bh-header-banner">
        <div className="container">
          <div className="bh-title-wrapper">
            <div className="bh-bracket-line"></div>
            <h2 className="bh-title">Brand Handling</h2>
            <div className="bh-bracket-line"></div>
          </div>
          
          <div className="bh-dots">
            <span></span><span></span><span></span><span></span><span></span>
          </div>

          {/* 5 Main Hero Category Circles */}
          <div className="bh-categories-row">
            {categoryList.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <div 
                  key={cat.key} 
                  className={`bh-cat-card ${isActive ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(cat.key)}
                >
                  <div 
                    className="bh-circle-wrapper" 
                    style={{ 
                      borderColor: cat.color,
                      boxShadow: isActive ? `0 10px 28px rgba(0,0,0,0.08), 0 0 0 4px ${cat.color}25` : undefined
                    }}
                  >
                    {isActive && <CircleRayMarks color={cat.color} />}
                    {cat.circleImg}
                  </div>
                  <button 
                    className={`bh-cat-pill ${isActive ? 'active-pill' : ''}`} 
                    style={{ 
                      backgroundColor: cat.color
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategoryClick(cat.key);
                    }}
                  >
                    {cat.label}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Minimalist Pop-up Card right below categories */}
          {activeCategory && activeCategoryObj && (
            <div 
              className="bh-popup-card"
              style={{ '--cat-color': activeCategoryObj.color }}
            >
              {/* Sleek Pointer speech-bubble notch + Minimalist category pill */}
              <div 
                className="bh-popup-pointer-anchor"
                style={{ left: pointerPositions[activeCategory] || '50%' }}
              >
                <div 
                  className="bh-popup-notch" 
                  style={{ borderBottomColor: activeCategoryObj.color }}
                />
                <div className="bh-popup-notch-inner" />

                <div 
                  className="bh-popup-pill-text"
                  style={{ backgroundColor: activeCategoryObj.color }}
                >
                  {activeCategoryObj.label}
                </div>
              </div>

              {/* Minimalist Close Button on top right */}
              <button 
                className="bh-popup-close-btn"
                onClick={handleClosePopup}
                aria-label="Close popup"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </svg>
              </button>

              {/* Brands Grid (2 rows x 5 columns) */}
              <div className="bh-popup-grid">
                {brandsToShow.map((brand) => (
                  <button
                    key={brand.id}
                    className="bh-brand-tile"
                    onClick={() => handleBrandClick(brand)}
                    title={`Search ${brand.name}`}
                  >
                    {brand.logoSvg}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Subtle Minimalist Bottom Wave */}
      <div className="bh-bottom-wave-container">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="bh-bottom-wave-svg">
          <path d="M 0 35 Q 360 80 720 28 Q 1080 -15 1440 35 L 1440 90 L 0 90 Z" fill="#0f1f71" />
          <path d="M 0 50 Q 360 18 720 58 Q 1080 98 1440 45 L 1440 54 Q 1080 108 720 68 Q 360 28 0 60 Z" fill="#e52328" opacity="0.85" />
        </svg>
      </div>
    </section>
  );
};

export default BrandHandling;
