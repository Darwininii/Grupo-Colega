export default function WaveDivider({ 
  fillColor = '#ffffff', 
  className = '', 
  isDouble = false 
}) {
  const path = isDouble
    ? "M0,35 C300,90 450,-10 720,40 C990,90 1140,-10 1440,35 L1440,85 C1140,30 990,130 720,80 C450,30 300,130 0,85 Z"
    : "M0,45 C300,130 450,0 720,64 C990,128 1140,0 1440,64 L1440,120 L0,120 Z";

  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24 block"
      >
        <path d={path} fill={fillColor} />
      </svg>
    </div>
  );
}
