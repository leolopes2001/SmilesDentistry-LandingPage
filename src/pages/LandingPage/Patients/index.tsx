import Button from "../../../components/common/Button";
import { Container } from "../../../components/common/Container/style";
import { Input } from "../../../components/common/Input/style";
import Link from "../../../components/common/Link";
import { Text } from "../../../components/common/Text/style";
import Title from "../../../components/common/Title";
import { SectionStlyed } from "./style";

const Patients = () => {
  return (
    <SectionStlyed>
      <div>
        <Text variant="labelPage">Nossos casos</Text>
        <Title tag="h3" variant="title3">
          Casos de Pacientes
        </Title>
      </div>
      {/* <PatientsSlider></PatientsSlider> */}
      <Link variant="primary" color="primary">
        AGENDAR AGORA
      </Link>

      <Container variant="normal">
        <section>
          <Title variant="title2" tag="h4">
            Get an Insurance Quote to get started!
          </Title>
          <ul>
            <li></li>
          </ul>
        </section>
        <form action="">
          <h3>Car Insurance</h3>
          <Input placeholder="Enter Name" />
          <Input placeholder="Enter Mail" />
          <Input placeholder="Car Insurance" />
          <textarea placeholder="Enter Message"></textarea>
          <Button variant="form_button" type="submit">Get a quote now</Button>
        </form>
      </Container>
    </SectionStlyed>
  );
};
export default Patients;
