import Navbar from "./components/layout/Navbar";
import ContactUs from "./components/pages/ContactUs";
import Landing from "./components/pages/Landing";
import Projects from "./components/pages/Projects";
import Team from "./components/pages/Team";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Team />
      <Projects />
      <ContactUs />
    </div>
  );
}

export default App;
