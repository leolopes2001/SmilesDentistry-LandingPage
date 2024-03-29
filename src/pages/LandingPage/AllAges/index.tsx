import { SectionStyled } from "./style";
import { IPages } from "..";
import { useState } from "react";
import { CardAllAge } from "./CardAllAge";
import Button from "../../../components/common/Button";
type AgeTypes = "child" | "adult" | "best_age";

const AllAges = ({ id, innerRef }: IPages) => {
  const [ageActive, setAgeActive] = useState<AgeTypes>("adult");

  const getAgeJSX = () => {
    switch (ageActive) {
      case "child":
        return <CardAllAge />;
      case "adult":
        return <CardAllAge />;
      case "best_age":
        return <CardAllAge />;
    }
  };

  return (
    <SectionStyled id={id} ref={innerRef}>
      <p>Atendimento para todas as idades</p>
      <div className="navigation_box">
        <Button
          variant="primary"
          color={ageActive === "child" ? "secondary" : "primary"}
          onClick={() => setAgeActive("child")}
        >
          Crianças
        </Button>
        <Button
          variant="primary"
          color={ageActive === "adult" ? "secondary" : "primary"}
          onClick={() => setAgeActive("adult")}
        >
          Adultos
        </Button>
        <Button
          variant="primary"
          color={ageActive === "best_age" ? "secondary" : "primary"}
          onClick={() => setAgeActive("best_age")}
        >
          Melhor idade  
        </Button>
      </div>
      <div className="content_box">{getAgeJSX()}</div>
    </SectionStyled>
  );
};

export default AllAges;
