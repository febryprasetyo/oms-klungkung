import NavbarTop from "./components/Navbar";
import Parameter from "./components/Parameter";

function App() {
  return (
    <div>
      <NavbarTop />
      <Parameter 
      name='Temperature'
          value={10}
          satuan={`\u00B0C`}
          time={22} />
    </div>
  );
}

export default App;
