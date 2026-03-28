interface EternalFitnessLogoProps {
  className?: string;
  variant?: "light" | "dark";
}

const EternalFitnessLogo = ({ className = "", variant = "light" }: EternalFitnessLogoProps) => {
  const textColor = variant === "light" ? "#FFFFFF" : "hsl(220, 20%, 15%)";
  const heartGradientId = variant === "light" ? "heartGradLight" : "heartGradDark";
  const accentColor = "hsl(180, 70%, 32%)";

  return (
    <svg
      viewBox="0 0 260 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Eternal Fitness"
    >
      <defs>
        {/* Heart gradient - rose to teal */}
        <linearGradient id={heartGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(350, 35%, 60%)" />
          <stop offset="100%" stopColor="hsl(350, 45%, 50%)" />
        </linearGradient>
      </defs>

      {/* "Eternal" — elegant serif italic */}
      <text
        x="0"
        y="28"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontStyle="italic"
        fontSize="28"
        letterSpacing="1.5"
        fill={textColor}
      >
        Eternal
      </text>

      {/* Modernised heart — layered with inner cutout for depth */}
      <g transform="translate(112, 4)">
        {/* Outer heart */}
        <path
          d="M14 28C14 28 2 20 2 11C2 6.5 5.5 3 9 3C11.2 3 12.8 4.2 14 5.8C15.2 4.2 16.8 3 19 3C22.5 3 26 6.5 26 11C26 20 14 28 14 28Z"
          fill={`url(#${heartGradientId})`}
        />
        {/* Inner highlight for modern depth */}
        <path
          d="M14 24C14 24 5 18 5 12C5 8.8 7.3 6 9.5 6C11 6 12.2 7 14 9C15.8 7 17 6 18.5 6C20.7 6 23 8.8 23 12C23 18 14 24 14 24Z"
          fill="white"
          opacity="0.15"
        />
        {/* Tiny pulse line across heart for fitness feel */}
        <path
          d="M6 13 L10 13 L11.5 9 L13 16 L14.5 11 L16 13 L22 13"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
          fill="none"
        />
      </g>

      {/* "Fitness" — refined sans with wide tracking */}
      <text
        x="147"
        y="26"
        fontFamily="'DM Sans', sans-serif"
        fontWeight="500"
        fontSize="15"
        letterSpacing="4"
        fill={textColor}
        style={{ textTransform: "uppercase" }}
        FITNESS
      </text>

      {/* Subtle teal accent line */}
      <line
        x1="147"
        y1="32"
        x2="250"
        y2="32"
        stroke={accentColor}
        strokeWidth="1.5"
        opacity="0.5"
      />
    </svg>
  );
};

export default EternalFitnessLogo;
