import Button from "../../../components/common/Button";
import { Container } from "../../../components/common/Container/style";
import { Input } from "../../../components/common/Input/style";
import Link from "../../../components/common/Link";
import { Text } from "../../../components/common/Text/style";
import Title from "../../../components/common/Title";
import PatientsSlider from "../../../components/Slider/PatientsSlider";
import { SectionStlyed } from "./style";

import { ReactComponent as Car } from "../../../assets/svgs/icons/car.svg";
import { ReactComponent as Life } from "../../../assets/svgs/icons/life.svg";
import { ReactComponent as Home } from "../../../assets/svgs/icons/home.svg";
import { ReactComponent as College } from "../../../assets/svgs/icons/college.svg";

import { AiOutlineArrowRight } from "react-icons/ai";
import { IPages } from "..";


const Patients = ({id,innerRef}: IPages) => {
  return (
    <SectionStlyed id={id} ref={innerRef}>
      <div className="title_box">
        <Text variant="labelPage">Nossos casos</Text>
        <Title tag="h3" variant="title3">
          Casos de Pacientes
        </Title>
      </div>
      <PatientsSlider />
      <div className="link_box">
        <Link variant="primary" color="primary" target="_blank">
          AGENDAR AGORA
        </Link>
      </div>

      <Container variant="normal">
        <section data-aos="fade-right"> 
          <Title variant="title2" tag="h4">
            Get an Insurance Quote <span>to get started!</span>
          </Title>
          <ul>
            <li className="card">
              <Home />
              <p>Home Insurance</p>
              <AiOutlineArrowRight />
            </li>
            <li className="card">
              <Car />
              <p>Car Insurance</p>
              <AiOutlineArrowRight />
            </li>
            <li className="card">
              <Life />
              <p>Health Insurance</p>
              <AiOutlineArrowRight />
            </li>
            <li className="card">
              <College />
              <p>Education Insurance</p>
              <AiOutlineArrowRight />
            </li>
          </ul>
        </section>
        <form action="" data-aos="fade-left">
          <h3>Car Insurance</h3>
          <Input variant="patients" placeholder="Enter Name" />
          <Input variant="patients" placeholder="Enter Mail" />
          <Input variant="patients" placeholder="Car Insurance" />
          <textarea placeholder="Enter Message"></textarea>
          <Button color="secondary" variant="form_button" type="submit">
            Get a quote now
          </Button>
        </form>
      </Container>
    </SectionStlyed>
  );
};
export default Patients;
