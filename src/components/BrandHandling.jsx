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

// Array of brand logos SVG definitions
const brandData = [
  // SNACKS (7 brands)
  {
    id: 'lays',
    name: "Lay's",
    category: 'Snacks',
    categoryKey: 'snacks',
    desc: 'Classic Potato Chips',
    color: '#e52328',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <circle cx="50" cy="50" r="42" fill="#facc15" />
        <path d="M 8 50 Q 50 32 92 50 Q 50 68 8 50 Z" fill="#dc2626" />
        <text x="50" y="55" fill="#ffffff" fontSize="20" fontWeight="900" fontStyle="italic" textAnchor="middle" fontFamily="sans-serif">Lay's</text>
      </svg>
    )
  },
  {
    id: 'too-yumm',
    name: 'Too Yumm',
    category: 'Snacks',
    categoryKey: 'snacks',
    desc: 'Guilt-Free Healthy Snacks',
    color: '#e52328',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="5" y="15" width="90" height="70" rx="12" fill="#0f172a" />
        <path d="M 12 35 L 88 35 L 80 75 L 20 75 Z" fill="#dc2626" />
        <text x="50" y="50" fill="#facc15" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">TOO</text>
        <text x="50" y="67" fill="#ffffff" fontSize="15" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">YUMM!</text>
      </svg>
    )
  },
  {
    id: 'bingo',
    name: 'Bingo',
    category: 'Snacks',
    categoryKey: 'snacks',
    desc: 'Tedhe Medhe & Potato Chips',
    color: '#e52328',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <ellipse cx="50" cy="50" rx="44" ry="34" fill="#dc2626" />
        <ellipse cx="50" cy="50" rx="38" ry="28" fill="#fbbf24" />
        <polygon points="50,22 55,35 68,35 57,44 61,57 50,48 39,57 43,44 32,35 45,35" fill="#dc2626" />
        <text x="50" y="68" fill="#1e3a8a" fontSize="16" fontWeight="900" fontStyle="italic" textAnchor="middle" fontFamily="sans-serif">Bingo!</text>
      </svg>
    )
  },
  {
    id: 'theater-project',
    name: 'The Theater Project',
    category: 'Snacks',
    categoryKey: 'snacks',
    desc: 'Gourmet Popcorn (4700BC)',
    color: '#e52328',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="8" y="10" width="84" height="80" rx="10" fill="#0f172a" />
        <path d="M 50 22 C 35 22 35 38 50 42 C 65 38 65 22 50 22 Z" fill="#d97706" />
        <circle cx="50" cy="30" r="6" fill="#fef08a" />
        <text x="50" y="60" fill="#d97706" fontSize="9" fontWeight="bold" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">THE THEATER</text>
        <text x="50" y="73" fill="#ffffff" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">PROJECT</text>
      </svg>
    )
  },
  {
    id: 'kettle-studio',
    name: 'Kettle Studio',
    category: 'Snacks',
    categoryKey: 'snacks',
    desc: 'Handcrafted Potato Chips',
    color: '#e52328',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <circle cx="50" cy="50" r="42" fill="#78350f" />
        <circle cx="50" cy="50" r="37" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 2" />
        <text x="50" y="44" fill="#fef08a" fontSize="12" fontWeight="bold" letterSpacing="1" textAnchor="middle" fontFamily="serif">KETTLE</text>
        <text x="50" y="62" fill="#ffffff" fontSize="14" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">STUDIO</text>
      </svg>
    )
  },
  {
    id: 'act-2',
    name: 'Act 2',
    category: 'Snacks',
    categoryKey: 'snacks',
    desc: 'Ready & Instant Popcorn',
    color: '#e52328',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="5" y="15" width="90" height="70" rx="10" fill="#facc15" />
        <polygon points="15,25 85,25 75,75 25,75" fill="#dc2626" />
        <text x="50" y="55" fill="#ffffff" fontSize="22" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">ACT II</text>
        <text x="50" y="68" fill="#fef08a" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">POPCORN</text>
      </svg>
    )
  },
  {
    id: 'smachoz',
    name: 'Smachoz',
    category: 'Snacks',
    categoryKey: 'snacks',
    desc: 'Tortilla & Nacho Chips',
    color: '#e52328',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="8" y="12" width="84" height="76" rx="12" fill="#ea580c" />
        <polygon points="50,22 75,65 25,65" fill="#facc15" stroke="#c2410c" strokeWidth="2" />
        <text x="50" y="55" fill="#1e293b" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">SMACH</text>
        <text x="50" y="78" fill="#ffffff" fontSize="14" fontWeight="900" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">SMACHOS</text>
      </svg>
    )
  },

  // CAKE (7 brands)
  {
    id: 'winkies',
    name: 'Winkies',
    category: 'Cake',
    categoryKey: 'cake',
    desc: 'Delicious Centre Filled Cakes',
    color: '#f59e0b',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="6" y="15" width="88" height="70" rx="16" fill="#5b21b6" />
        <circle cx="50" cy="38" r="16" fill="#f472b6" />
        <text x="50" y="68" fill="#ffffff" fontSize="17" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">Winkies</text>
      </svg>
    )
  },
  {
    id: 'wonder-cake',
    name: 'Wonder Cake',
    category: 'Cake',
    categoryKey: 'cake',
    desc: 'Soft & Fresh Packaged Cakes',
    color: '#f59e0b',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <circle cx="50" cy="50" r="42" fill="#d97706" />
        <path d="M 30 65 L 70 65 L 65 45 L 35 45 Z" fill="#fffbe0" />
        <circle cx="50" cy="40" r="6" fill="#dc2626" />
        <text x="50" y="78" fill="#ffffff" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">WONDER CAKE</text>
      </svg>
    )
  },
  {
    id: 'elite',
    name: 'Elite',
    category: 'Cake',
    categoryKey: 'cake',
    desc: 'Rich Plum & Slice Cakes',
    color: '#f59e0b',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="8" y="15" width="84" height="70" rx="10" fill="#881337" />
        <path d="M 35 32 L 50 20 L 65 32 L 58 45 L 42 45 Z" fill="#fbbf24" />
        <text x="50" y="65" fill="#ffffff" fontSize="20" fontWeight="900" letterSpacing="1" textAnchor="middle" fontFamily="serif">Elite</text>
      </svg>
    )
  },
  {
    id: 'aditi-marvel',
    name: 'Aditi Marvel',
    category: 'Cake',
    categoryKey: 'cake',
    desc: 'Fresh Oven Baked Cakes',
    color: '#f59e0b',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="6" y="15" width="88" height="70" rx="10" fill="#b91c1c" />
        <text x="50" y="44" fill="#fef08a" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ADITI</text>
        <text x="50" y="66" fill="#ffffff" fontSize="16" fontWeight="900" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">MARVEL</text>
      </svg>
    )
  },
  {
    id: 'otter',
    name: 'Otter',
    category: 'Cake',
    categoryKey: 'cake',
    desc: 'Gourmet Snack Cakes & Rolls',
    color: '#f59e0b',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <circle cx="50" cy="50" r="42" fill="#0d9488" />
        <circle cx="50" cy="40" r="14" fill="#ccfbf1" />
        <text x="50" y="72" fill="#ffffff" fontSize="16" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">Otter</text>
      </svg>
    )
  },
  {
    id: 'yumm-treat',
    name: 'Yumm Treat',
    category: 'Cake',
    categoryKey: 'cake',
    desc: 'Tasty Muffins & Cupcakes',
    color: '#f59e0b',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="8" y="15" width="84" height="70" rx="14" fill="#c026d3" />
        <path d="M 35 45 Q 50 25 65 45 Z" fill="#fef08a" />
        <text x="50" y="65" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">Yumm Treat</text>
      </svg>
    )
  },
  {
    id: 'food-flex',
    name: 'Food Flex',
    category: 'Cake',
    categoryKey: 'cake',
    desc: 'Cake Bites & Energy Bars',
    color: '#f59e0b',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="8" y="15" width="84" height="70" rx="10" fill="#059669" />
        <polygon points="50,22 62,45 38,45" fill="#fef08a" />
        <text x="50" y="65" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">FOOD FLEX</text>
      </svg>
    )
  },

  // CHOCOLATE (7 brands)
  {
    id: 'nestle',
    name: 'Nestle',
    category: 'Chocolate',
    categoryKey: 'chocolate',
    desc: 'KitKat, Munch & Milkybar',
    color: '#7c3aed',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="6" y="15" width="88" height="70" rx="10" fill="#0284c7" />
        <path d="M 30 35 Q 50 25 70 35 Q 70 50 30 50 Z" fill="#ffffff" />
        <text x="50" y="70" fill="#ffffff" fontSize="17" fontWeight="900" textAnchor="middle" fontFamily="serif">Nestlé</text>
      </svg>
    )
  },
  {
    id: 'wholy',
    name: 'Wholy',
    category: 'Chocolate',
    categoryKey: 'chocolate',
    desc: 'Wholesome Dark Chocolates',
    color: '#7c3aed',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <circle cx="50" cy="50" r="42" fill="#3730a3" />
        <ellipse cx="50" cy="40" rx="14" ry="20" fill="#d97706" transform="rotate(30 50 40)" />
        <text x="50" y="74" fill="#ffffff" fontSize="15" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">Wholy</text>
      </svg>
    )
  },
  {
    id: 'naturo',
    name: 'Naturo',
    category: 'Chocolate',
    categoryKey: 'chocolate',
    desc: 'Real Fruit & Choco Bars',
    color: '#7c3aed',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="8" y="15" width="84" height="70" rx="12" fill="#16a34a" />
        <circle cx="50" cy="38" r="14" fill="#ea580c" />
        <text x="50" y="68" fill="#ffffff" fontSize="15" fontWeight="900" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">NATURO</text>
      </svg>
    )
  },
  {
    id: 'nomi',
    name: 'Nomi',
    category: 'Chocolate',
    categoryKey: 'chocolate',
    desc: 'Choco Wafers & Crispies',
    color: '#7c3aed',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="8" y="15" width="84" height="70" rx="14" fill="#451a03" />
        <rect x="25" y="28" width="50" height="20" rx="4" fill="#78350f" stroke="#fbbf24" strokeWidth="2" />
        <text x="50" y="68" fill="#fbbf24" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">Nomi</text>
      </svg>
    )
  },
  {
    id: 'mani-mark',
    name: 'Mani Mark',
    category: 'Chocolate',
    categoryKey: 'chocolate',
    desc: 'Choco Chikki & Sweets',
    color: '#7c3aed',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="6" y="15" width="88" height="70" rx="10" fill="#b91c1c" />
        <circle cx="50" cy="36" r="14" fill="#fbbf24" />
        <text x="50" y="62" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">MANI MARK</text>
      </svg>
    )
  },
  {
    id: 'gone-mad',
    name: 'Gone Mad',
    category: 'Chocolate',
    categoryKey: 'chocolate',
    desc: 'Choco Stick Wafers',
    color: '#7c3aed',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="6" y="15" width="88" height="70" rx="12" fill="#7e22ce" />
        <rect x="30" y="25" width="40" height="12" rx="4" fill="#facc15" transform="rotate(-10 50 30)" />
        <text x="50" y="58" fill="#fef08a" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">GONE MAD</text>
      </svg>
    )
  },
  {
    id: 'yummy-valley',
    name: 'Yummy Valley',
    category: 'Chocolate',
    categoryKey: 'chocolate',
    desc: 'Choco Nut & Fruit Delights',
    color: '#7c3aed',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <circle cx="50" cy="50" r="42" fill="#15803d" />
        <path d="M 25 50 Q 50 30 75 50 Q 50 70 25 50 Z" fill="#fbbf24" />
        <text x="50" y="74" fill="#ffffff" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">Yummy Valley</text>
      </svg>
    )
  },

  // BISCUITS (7 brands)
  {
    id: 'britannia',
    name: 'Britannia',
    category: 'Biscuits',
    categoryKey: 'biscuits',
    desc: 'Good Day, Bourbon & Marie',
    color: '#10b981',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <ellipse cx="50" cy="50" rx="44" ry="32" fill="#dc2626" />
        <ellipse cx="50" cy="50" rx="38" ry="26" fill="#ffffff" />
        <text x="50" y="55" fill="#dc2626" fontSize="12" fontWeight="900" letterSpacing="0.5" textAnchor="middle" fontFamily="sans-serif">BRITANNIA</text>
      </svg>
    )
  },
  {
    id: 'parle',
    name: 'Parle',
    category: 'Biscuits',
    categoryKey: 'biscuits',
    desc: 'Parle-G, Monaco & Hide & Seek',
    color: '#10b981',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="8" y="18" width="84" height="64" rx="12" fill="#ffffff" stroke="#dc2626" strokeWidth="4" />
        <path d="M 25 65 Q 50 75 75 65" fill="none" stroke="#eab308" strokeWidth="4" />
        <text x="50" y="52" fill="#dc2626" fontSize="19" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">Parle</text>
      </svg>
    )
  },
  {
    id: 'unibic',
    name: 'Unibic',
    category: 'Biscuits',
    categoryKey: 'biscuits',
    desc: 'Premium Cookies & Butter Biscuits',
    color: '#10b981',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="6" y="16" width="88" height="68" rx="10" fill="#1e3a8a" />
        <text x="50" y="55" fill="#d97706" fontSize="17" fontWeight="900" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">UNIBIC</text>
      </svg>
    )
  },
  {
    id: 'dukes',
    name: 'Dukes',
    category: 'Biscuits',
    categoryKey: 'biscuits',
    desc: 'Wafers & Cream Biscuits',
    color: '#10b981',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="6" y="16" width="88" height="68" rx="10" fill="#b91c1c" />
        <text x="50" y="55" fill="#ffffff" fontSize="19" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">Dukes</text>
      </svg>
    )
  },
  {
    id: 'town-bus',
    name: 'Town Bus',
    category: 'Biscuits',
    categoryKey: 'biscuits',
    desc: 'Crispy Savory Crackers',
    color: '#10b981',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="8" y="16" width="84" height="68" rx="10" fill="#eab308" />
        <rect x="18" y="26" width="64" height="24" rx="4" fill="#dc2626" />
        <text x="50" y="42" fill="#ffffff" fontSize="12" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">TOWN BUS</text>
        <text x="50" y="68" fill="#78350f" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SNACKS</text>
      </svg>
    )
  },
  {
    id: 'seenis',
    name: 'Seenis',
    category: 'Biscuits',
    categoryKey: 'biscuits',
    desc: 'Traditional Bakery Biscuits',
    color: '#10b981',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="8" y="16" width="84" height="68" rx="12" fill="#991b1b" />
        <circle cx="50" cy="38" r="12" fill="#fbbf24" />
        <text x="50" y="68" fill="#ffffff" fontSize="16" fontWeight="900" textAnchor="middle" fontFamily="serif">Seeni's</text>
      </svg>
    )
  },
  {
    id: 'farmely',
    name: 'Farmely',
    category: 'Biscuits',
    categoryKey: 'biscuits',
    desc: 'Healthy Millet & Grain Cookies',
    color: '#10b981',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <circle cx="50" cy="50" r="42" fill="#166534" />
        <path d="M 50 25 C 40 40 40 50 50 65 C 60 50 60 40 50 25 Z" fill="#bbf7d0" />
        <text x="50" y="76" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">Farmely</text>
      </svg>
    )
  },

  // BEVERAGES (8 brands)
  {
    id: 'pepsi-co',
    name: 'Pepsi Co',
    category: 'Beverages',
    categoryKey: 'beverages',
    desc: 'Pepsi, 7Up, Mirinda & Dew',
    color: '#0284c7',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <circle cx="50" cy="50" r="42" fill="#1d4ed8" />
        <path d="M 12 40 Q 50 25 88 40 L 88 12 C 70 8 30 8 12 12 Z" fill="#e11d48" />
        <path d="M 12 40 Q 50 65 88 40 Q 50 85 12 40 Z" fill="#ffffff" />
        <text x="50" y="78" fill="#ffffff" fontSize="12" fontWeight="900" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">PEPSI</text>
      </svg>
    )
  },
  {
    id: 'hindustan-beverages',
    name: 'Hindustan Beverages',
    category: 'Beverages',
    categoryKey: 'beverages',
    desc: 'Coca-Cola, Thums Up & Sprite',
    color: '#0284c7',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="6" y="16" width="88" height="68" rx="12" fill="#dc2626" />
        <text x="50" y="44" fill="#ffffff" fontSize="14" fontWeight="900" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">HCCB</text>
        <text x="50" y="65" fill="#fef08a" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">HINDUSTAN BEVERAGES</text>
      </svg>
    )
  },
  {
    id: 'itc',
    name: 'ITC',
    category: 'Beverages',
    categoryKey: 'beverages',
    desc: 'B-Natural Juices & Coffee',
    color: '#0284c7',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <polygon points="50,15 90,82 10,82" fill="#1e293b" stroke="#d97706" strokeWidth="2" />
        <text x="50" y="62" fill="#d97706" fontSize="24" fontWeight="900" letterSpacing="2" textAnchor="middle" fontFamily="serif">ITC</text>
      </svg>
    )
  },
  {
    id: 'parle-agro',
    name: 'Parle Agro',
    category: 'Beverages',
    categoryKey: 'beverages',
    desc: 'Frooti, Appy Fizz & Bailley',
    color: '#0284c7',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="8" y="16" width="84" height="68" rx="14" fill="#15803d" />
        <circle cx="50" cy="38" r="14" fill="#facc15" />
        <text x="50" y="66" fill="#ffffff" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">PARLE AGRO</text>
      </svg>
    )
  },
  {
    id: 'cavins',
    name: 'Cavins',
    category: 'Beverages',
    categoryKey: 'beverages',
    desc: 'Rich Flavored Milk & Milkshakes',
    color: '#0284c7',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="6" y="16" width="88" height="68" rx="12" fill="#1d4ed8" />
        <path d="M 20 35 C 40 25 60 45 80 35" fill="none" stroke="#ffffff" strokeWidth="3" />
        <text x="50" y="62" fill="#ffffff" fontSize="17" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">Cavin's</text>
      </svg>
    )
  },
  {
    id: 'milky-mist',
    name: 'Milky Mist',
    category: 'Beverages',
    categoryKey: 'beverages',
    desc: 'Fruit Milkshakes & Lassi',
    color: '#0284c7',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <circle cx="50" cy="50" r="42" fill="#0369a1" />
        <path d="M 15 50 Q 50 30 85 50 Q 50 70 15 50 Z" fill="#ffffff" opacity="0.9" />
        <text x="50" y="74" fill="#ffffff" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">Milky Mist</text>
      </svg>
    )
  },
  {
    id: 'paper-boat',
    name: 'Paper Boat',
    category: 'Beverages',
    categoryKey: 'beverages',
    desc: 'Traditional Indian Fruit Drinks',
    color: '#0284c7',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <rect x="8" y="15" width="84" height="70" rx="14" fill="#0f172a" />
        <polygon points="50,22 72,52 28,52" fill="#f97316" />
        <polygon points="50,22 60,52 40,52" fill="#fdba74" />
        <text x="50" y="70" fill="#ffffff" fontSize="10" fontWeight="bold" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">paper boat</text>
      </svg>
    )
  },
  {
    id: 'narasus',
    name: 'Narasus',
    category: 'Beverages',
    categoryKey: 'beverages',
    desc: 'Filter Coffee & Tea Beverages',
    color: '#0284c7',
    logoSvg: (
      <svg viewBox="0 0 100 100" className="brand-logo-svg">
        <circle cx="50" cy="50" r="42" fill="#78350f" />
        <path d="M 35 48 C 35 38 65 38 65 48 L 60 62 C 60 68 40 68 40 62 Z" fill="#ffffff" />
        <text x="50" y="78" fill="#fef08a" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="serif">Narasu's</text>
      </svg>
    )
  }
];

const categoryList = [
  { key: 'all', label: 'All Brands', count: 36, color: '#0f1f71' },
  { key: 'snacks', label: 'Snacks', count: 7, color: '#e52328', circleImg: <SnacksCategoryImg /> },
  { key: 'cake', label: 'Cake', count: 7, color: '#f59e0b', circleImg: <CakeCategoryImg /> },
  { key: 'chocolate', label: 'Chocolate', count: 7, color: '#7c3aed', circleImg: <ChocolateCategoryImg /> },
  { key: 'biscuits', label: 'Biscuits', count: 7, color: '#10b981', circleImg: <BiscuitsCategoryImg /> },
  { key: 'beverages', label: 'Beverages', count: 8, color: '#0284c7', circleImg: <BeveragesCategoryImg /> }
];

const BrandHandling = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategorySelect = (key) => {
    setActiveCategory(key);
    setTimeout(() => {
      const targetElement = document.getElementById(`cat-block-${key}`) || document.querySelector('.bh-brands-section');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleBrandClick = (brand) => {
    const searchQuery = encodeURIComponent(`${brand.name} ${brand.category}`);
    window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank', 'noopener,noreferrer');
  };

  const filteredBrands = activeCategory === 'all'
    ? brandData
    : brandData.filter(b => b.categoryKey === activeCategory);

  return (
    <section id="brand-handling" className="brand-handling">
      {/* Top Banner section matching uploaded mockup image */}
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

          {/* 5 Main Hero Circles */}
          <div className="bh-categories-row">
            {categoryList.filter(c => c.key !== 'all').map((cat) => (
              <div 
                key={cat.key} 
                className={`bh-cat-card ${activeCategory === cat.key ? 'active' : ''}`}
                onClick={() => handleCategorySelect(cat.key)}
              >
                <div className="bh-circle-wrapper" style={{ borderColor: cat.color }}>
                  {cat.circleImg}
                </div>
                <button 
                  className="bh-cat-pill" 
                  style={{ backgroundColor: cat.color }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCategorySelect(cat.key);
                  }}
                >
                  {cat.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sequential Brands Grid Section */}
      <div className="bh-brands-section">
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="bh-tabs-nav">
            {categoryList.map((cat) => (
              <button
                key={cat.key}
                className={`bh-tab-btn ${activeCategory === cat.key ? 'active' : ''}`}
                style={activeCategory === cat.key ? { backgroundColor: cat.color, borderColor: cat.color } : {}}
                onClick={() => handleCategorySelect(cat.key)}
              >
                {cat.label} <span className="bh-tab-badge">{cat.count}</span>
              </button>
            ))}
          </div>

          {/* If ALL BRANDS is selected, show Sequential Category Blocks */}
          {activeCategory === 'all' ? (
            <div className="bh-sequential-blocks">
              {categoryList.filter(c => c.key !== 'all').map((cat) => {
                const catBrands = brandData.filter(b => b.categoryKey === cat.key);
                return (
                  <div key={cat.key} className="bh-category-block" id={`cat-block-${cat.key}`}>
                    <div className="bh-block-header">
                      <span className="bh-block-badge" style={{ backgroundColor: cat.color }}>
                        {cat.label} ({catBrands.length} Brands)
                      </span>
                      <div className="bh-block-line" style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }}></div>
                    </div>

                    <div className="bh-grid">
                      {catBrands.map((brand) => (
                        <div key={brand.id} className="bh-brand-card" onClick={() => handleBrandClick(brand)} style={{ cursor: 'pointer' }}>
                          <div className="bh-logo-box">
                            {brand.logoSvg}
                          </div>
                          <div className="bh-brand-info">
                            <h4 className="bh-brand-name">{brand.name}</h4>
                            <span className="bh-brand-tag" style={{ color: brand.color, backgroundColor: `${brand.color}15` }}>
                              {brand.category}
                            </span>
                            <p className="bh-brand-desc">{brand.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Single Category Filtered View */
            <div className="bh-single-category">
              <div className="bh-block-header">
                <span className="bh-block-badge" style={{ backgroundColor: categoryList.find(c => c.key === activeCategory)?.color }}>
                  {categoryList.find(c => c.key === activeCategory)?.label} ({filteredBrands.length} Brands)
                </span>
                <div className="bh-block-line" style={{ background: `linear-gradient(90deg, ${categoryList.find(c => c.key === activeCategory)?.color}, transparent)` }}></div>
              </div>

              <div className="bh-grid">
                {filteredBrands.map((brand) => (
                  <div key={brand.id} className="bh-brand-card" onClick={() => handleBrandClick(brand)} style={{ cursor: 'pointer' }}>
                    <div className="bh-logo-box">
                      {brand.logoSvg}
                    </div>
                    <div className="bh-brand-info">
                      <h4 className="bh-brand-name">{brand.name}</h4>
                      <span className="bh-brand-tag" style={{ color: brand.color, backgroundColor: `${brand.color}15` }}>
                        {brand.category}
                      </span>
                      <p className="bh-brand-desc">{brand.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandHandling;
