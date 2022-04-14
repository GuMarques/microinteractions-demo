import { Skeleton } from "@material-ui/lab";
import { FC, useEffect, useState } from "react";
import { CardContainer, CustomP } from "./styles";
import coffee from "../../assets/coffee.jpg";

interface CardProps {}

const Card: FC<CardProps> = (props) => {
  const [loading, setLoading] = useState(true);
  let loop: NodeJS.Timer;

  useEffect(() => {
    loop = setInterval(() => {
      setLoading((prevState) => !prevState);
    }, 3000);
    return () => {
      clearInterval(loop);
    };
  }, []);
  if (loading) {

    
    return (
      <CardContainer>
        <Skeleton variant="rect" animation="wave" height={200} />
        <Skeleton variant="text" animation="wave" width={280} />
      </CardContainer>
    );
  }

  return (
    <CardContainer>
      <img src={coffee} />
      <CustomP>Foto de ROMAN ODINTSOV no Pexels</CustomP>
    </CardContainer>
  );
};

export default Card;
