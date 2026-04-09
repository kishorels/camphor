export default function CrystalLogo({ className }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M50 5L15 35L50 95L85 35L50 5Z" 
        fill="url(#crystal-gradient)" 
        fillOpacity="0.9"
      />
      <path 
        d="M50 5L15 35L50 50L85 35L50 5Z" 
        fill="white" 
        fillOpacity="0.2"
      />
      <path 
        d="M15 35L50 50L50 95L15 35Z" 
        fill="black" 
        fillOpacity="0.1"
      />
      <defs>
        <linearGradient id="crystal-gradient" x1="50" y1="5" x2="50" y2="95" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="#FFC107" stopOpacity="0.8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
