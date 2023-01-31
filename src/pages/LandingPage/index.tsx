import AllAges from "./AllAges";
import Dentists from "./Dentists";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Patients from "./Patients";
import Reviews from "./Reviews";
import Services from "./Services";
import "aos/dist/aos.css";
import { RefObject, useEffect, useRef, useState } from "react";
import { useSideBar } from "../../contexts/SideBarProvider";

export type PagesTypes =
  | "home"
  | "todasIdades"
  | "tratamentos"
  | "dentistas"
  | "pacientes"
  | "como-chegar"
  | "reviews"
  | "agendamentos";

export interface IPages {
  id: PagesTypes;
  innerRef: RefObject<HTMLElement>;
}

const LandingPage = () => {
  const { setSectionActiveSideBar } = useSideBar();

  const [sectionActive, setSectionActive] = useState<PagesTypes>("home");
  const homeRef = useRef<HTMLElement>(null);
  const todasIdadesRef = useRef<HTMLElement>(null);
  const tratamentosRef = useRef<HTMLElement>(null);
  const dentistasRef = useRef<HTMLElement>(null);
  const pacientesRef = useRef<HTMLElement>(null);
  const reviewsRef = useRef<HTMLElement>(null);
  const comoChegarRef = useRef<HTMLElement>(null);

  const options = {
    threshold: [0, 0.5, 0.6, 1],
  };

  const handleObserver = (section: PagesTypes, ratio: number): void => {
    if (ratio < 0.5) return;

    setSectionActiveSideBar(section);
    setSectionActive(section);
  };

  // useEffect(() => {
  //   const observerHome = new IntersectionObserver(
  //     (entries) => handleObserver("home", entries[0].intersectionRatio),
  //     options
  //   );

  //   const obeserverTodasIdades = new IntersectionObserver(
  //     (entries) => handleObserver("home", entries[0].intersectionRatio),
  //     options
  //   );

  //   const observerTratamentos = new IntersectionObserver(
  //     (entries) => handleObserver("tratamentos", entries[0].intersectionRatio),
  //     options
  //   );

  //   const observerPacientes = new IntersectionObserver(
  //     (entries) => handleObserver("agendamentos", entries[0].intersectionRatio),
  //     options
  //   );

  //   const observerReviews = new IntersectionObserver(
  //     (entries) => handleObserver("agendamentos", entries[0].intersectionRatio),
  //     options
  //   );

  //   const observerDentistas = new IntersectionObserver(
  //     (entries) => handleObserver("dentistas", entries[0].intersectionRatio),
  //     options
  //   );

  //   const observerComoChegar = new IntersectionObserver(
  //     (entries) => handleObserver("como-chegar", entries[0].intersectionRatio),
  //     options
  //   );

  //   observerHome.observe(homeRef.current as HTMLElement);
  //   obeserverTodasIdades.observe(todasIdadesRef.current as HTMLElement);
  //   observerTratamentos.observe(tratamentosRef.current as HTMLElement);
  //   observerPacientes.observe(pacientesRef.current as HTMLElement);
  //   observerReviews.observe(reviewsRef.current as HTMLElement);
  //   observerDentistas.observe(dentistasRef.current as HTMLElement);
  //   observerComoChegar.observe(comoChegarRef.current as HTMLElement);
  // }, []);

  return (
    <>
      <Header sectionActive={sectionActive} />
      <Home id="home" innerRef={homeRef} />
      <AllAges id="todasIdades" innerRef={todasIdadesRef} />
      <Services id="tratamentos" innerRef={tratamentosRef} /> 
      <Patients id="agendamentos" innerRef={pacientesRef} />
      <Reviews id="reviews" innerRef={reviewsRef} />  
      <Dentists id="dentistas" innerRef={dentistasRef} />
      <Footer id="como-chegar" innerRef={comoChegarRef} /> 
    </>
  );
};

export default LandingPage;
