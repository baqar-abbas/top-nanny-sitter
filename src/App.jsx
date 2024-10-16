import "./App.css";
import Header from "./Global components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="mt-32 p-6 bg-gray-100">
        <h1 className="custom-heading text-center">
          Welcome to the Top Nanny Sitter Site
        </h1>
        <button className="custom-button">Get Started</button>
        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
          Tailwind Button
        </button>
      </div>
    </>
  );
}

export default App;
