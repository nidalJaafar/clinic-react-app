import Banner from '../../components/banner/banner.component';
import Navigation from "../../components/nav/nav.component";

const Home = () => {
  return (
    <>
      <Navigation selected="home" />
      <Banner />
    </>
	)
}

export default Home
