import NavbarTop from "./components/Navbar";
import Monitoring from "./components/Monitoring";

function App() {
  return (
   <div className=' bg-blue-gray-400 min-h-screen pb-4'>
      <NavbarTop />
     <Monitoring className='items-center' />
    </div>
  );
}

export default App;
