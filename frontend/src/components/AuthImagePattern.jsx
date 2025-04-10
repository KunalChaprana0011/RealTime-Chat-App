


const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <>
      <div className="hidden lg:flex flex-col items-center justify-center bg-base-200 p-12 relative">
        {/* Globe Container */}
        <div className="relative w-80 h-80 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center perspective-3d">
          {/* Globe */}
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-primary/40 to-primary/10 shadow-2xl"></div>

          {/* Signals */}
          <div className="absolute w-full h-full">
            <div className="absolute w-4 h-4 bg-primary rounded-full animate-orbit top-0 left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute w-4 h-4 bg-primary rounded-full animate-orbit-reverse bottom-0 left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute w-4 h-4 bg-primary rounded-full animate-orbit-left left-0 top-1/2 transform -translate-y-1/2"></div>
            <div className="absolute w-4 h-4 bg-primary rounded-full animate-orbit-right right-0 top-1/2 transform -translate-y-1/2"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <p className="text-base-content/60 text-md">{subtitle}</p>
        </div>
      </div>

      {/* Inline CSS */}
      <style>
        {`
          @keyframes orbit {
            0% {
              transform: rotateX(0deg) rotateY(0deg) translateZ(120px);
            }
            100% {
              transform: rotateX(360deg) rotateY(360deg) translateZ(120px);
            }
          }

          @keyframes orbit-reverse {
            0% {
              transform: rotateX(0deg) rotateY(0deg) translateZ(120px);
            }
            100% {
              transform: rotateX(-360deg) rotateY(-360deg) translateZ(120px);
            }
          }

          @keyframes orbit-left {
            0% {
              transform: rotateX(0deg) rotateY(0deg) translateZ(120px);
            }
            100% {
              transform: rotateX(360deg) rotateY(-360deg) translateZ(120px);
            }
          }

          @keyframes orbit-right {
            0% {
              transform: rotateX(0deg) rotateY(0deg) translateZ(120px);
            }
            100% {
              transform: rotateX(-360deg) rotateY(360deg) translateZ(120px);
            }
          }

          .animate-orbit {
            animation: orbit 6s linear infinite;
            transform-style: preserve-3d;
          }

          .animate-orbit-reverse {
            animation: orbit-reverse 6s linear infinite;
            transform-style: preserve-3d;
          }

          .animate-orbit-left {
            animation: orbit-left 6s linear infinite;
            transform-style: preserve-3d;
          }

          .animate-orbit-right {
            animation: orbit-right 6s linear infinite;
            transform-style: preserve-3d;
          }

          .perspective-3d {
            perspective: 1000px;
          }
        `}
      </style>
    </>
  );
};

export default AuthImagePattern;

