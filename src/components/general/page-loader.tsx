import { cn } from "@/lib/utils";

const PageLoader = ({ fullScreen }: { fullScreen?: boolean }) => {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center",
        fullScreen ? "h-screen" : "h-auto p-4"
      )}
    >
      <svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 z-10"
      >
        <g clipPath="url(#clip0_1_4)">
          <rect x="60" y="266.6" width="70" height="250" rx="15" fill="#DD2C00">
            <animate
              attributeName="height"
              values="0;250;0"
              dur="1s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="516.6;266.6;516.6"
              dur="1s"
              begin="0s"
              repeatCount="indefinite"
            />
          </rect>

          <rect x="165" y="66.6" width="70" height="450" rx="15" fill="#FF9100">
            <animate
              attributeName="height"
              values="0;450;0"
              dur="1s"
              begin="0.2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="516.6;66.6;516.6"
              dur="1s"
              begin="0.2s"
              repeatCount="indefinite"
            />
          </rect>

          <rect
            x="265"
            y="208.6"
            width="70"
            height="308"
            rx="15"
            fill="#FFC400"
          >
            <animate
              attributeName="height"
              values="0;308;0"
              dur="1s"
              begin="0.4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="516.6;208.6;516.6"
              dur="1s"
              begin="0.4s"
              repeatCount="indefinite"
            />
          </rect>

          <rect
            x="370"
            y="316.6"
            width="70"
            height="200"
            rx="15"
            fill="#FF9100"
          >
            <animate
              attributeName="height"
              values="0;200;0"
              dur="1s"
              begin="0.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="516.6;316.6;516.6"
              dur="1s"
              begin="0.6s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
        <defs>
          <clipPath id="clip0_1_4">
            <rect width="500" height="500" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default PageLoader;
