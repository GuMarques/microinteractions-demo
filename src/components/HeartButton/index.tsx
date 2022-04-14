import { FC } from "react";
import { useAnimateKeyframes } from "react-simple-animate";
import heart from "../../assets/heart.svg";
import { Heart, HeartContainer, HeartImage } from "./styles";

const HeartButton: FC = () => {
  const { play, style, isPlaying } = useAnimateKeyframes({
    keyframes: [
      "transform: scale(1)",
      "transform: scale(1.3)",
      "trasnform: scale(1)",
    ],
  });
  return (
    <HeartContainer style={style} onClick={() => play(!isPlaying)}>
      <Heart>
        <HeartImage src={heart} />
      </Heart>
    </HeartContainer>
  );
};

export default HeartButton;
