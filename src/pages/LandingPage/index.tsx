import AllAges from "./AllAges";
import Dentists from "./Dentists";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Patients from "./Patients";
import Reviews from "./Reviews";
import Services from "./Services";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Home />
      <AllAges />
      <Services />
      <Patients />
      <Reviews />
      <Dentists />
      <Footer />
    </>
  );
};

export default LandingPage;
