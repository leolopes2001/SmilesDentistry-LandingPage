import { DentistsCardStyled } from "./style";
import Dentists1 from "../../../../assets/svgs/dentists/one.jpg";
import Dentists2 from "../../../../assets/svgs/dentists/two.jpg";
import Dentists3 from "../../../../assets/svgs/dentists/three.jpg";
import Dentists4 from "../../../../assets/svgs/dentists/four.jpg";

const DentistsImage = {
  "1": <img src={Dentists1} alt="Dentists Image" />,
  "2": <img src={Dentists2} alt="Dentists Image" />,
  "3": <img src={Dentists3} alt="Dentists Image" />,
  "4": <img src={Dentists4} alt="Dentists Image" />,
};
interface IDentistsCard {
  id: "1" | "2" | "3" | "4";
  name: string;
  work: string;
}

const DentistsCard = ({ id, name, work }: IDentistsCard) => {
  return (
    <DentistsCardStyled>
      <div className="img_box">{DentistsImage[id]}</div>
      <div className="name_box">
        <h6>{name}</h6>
        <p>{work}</p>
      </div>
      <div className="hover_box">
        <div></div>
        <div></div>
      </div>
    </DentistsCardStyled>
  );
};

export default DentistsCard;
