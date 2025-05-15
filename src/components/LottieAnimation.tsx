
import Lottie from "lottie-react";
import React from "react";

interface LottieAnimationProps {
  animationData: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
}

const LottieAnimation = ({
  animationData,
  className = "",
  loop = true,
  autoplay = true,
  style = {},
}: LottieAnimationProps) => {
  return (
    <div className={className}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={style}
      />
    </div>
  );
};

export default LottieAnimation;
