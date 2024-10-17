import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Global components/Header";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <>
      <Header />
      {/* <div className="mt-32 p-6 bg-gray-100">
        <h1 className="custom-heading text-center">
          Welcome to the Top Nanny Sitter Site
        </h1>
        <button className="custom-button">Get Started</button>
        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
          Tailwind Button
        </button>
      </div> */}
      <div className="pt-36">
        {" "}
        {/* Add padding to the top to account for the fixed header height */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
