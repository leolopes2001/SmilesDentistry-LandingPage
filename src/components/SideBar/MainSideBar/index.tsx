import { useSideBar } from "../../../contexts/SideBarProvider";
import Link from "../../common/Link";
import { navLinks } from "../../../components-mock.json";

import { ReactComponent as Phone } from "../../../assets/svgs/icons/phone.svg";
import { contact_info } from "../../../components-mock.json";
import Points from "../../../assets/svgs/icons/points.svg";

const MainSideBar = () => {
  const { isSideBarOpen, setIsSideBarOpen, sectionActiveSideBar } =
    useSideBar();

  const handleClick = () => setIsSideBarOpen(false);

  const getClass = (id: string): string => {
    let class_name = "";

    if (isSideBarOpen) class_name += "animation";

    if (id === sectionActiveSideBar) {
      class_name += " active";
    }

    return class_name;
  };

  return (
    <div>
      <nav>
        {navLinks.map(({ id, name }) => (
          <Link
            key={id}
            variant="primary"
            href={id}
            className={getClass(id)}
            onClick={handleClick}
          >
            {name}
          </Link>
        ))}
      </nav>
      <div className="info_box">
        <div className="contact_container">
          <Phone />
          <p>{contact_info.phone}</p>
          <img src={Points} alt="Points" />
        </div>
        <Link color="primary" variant="primary" target="_blank">
          AGENDAR AGORA
        </Link>
      </div>
    </div>
  );
};

export default MainSideBar;
