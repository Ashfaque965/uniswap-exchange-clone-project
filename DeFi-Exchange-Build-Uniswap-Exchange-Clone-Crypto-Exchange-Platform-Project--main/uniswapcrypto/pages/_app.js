import "../styles/globals.css";
import { NavBar } from "../Components/index";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;

{}