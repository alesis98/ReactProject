
import Navbar from "./components/Navbar.tsx";
import { MyFormComponent } from "./components/MyFormComponent.tsx";
import { TableFornitore } from "./components/TableFornitore.tsx";
import { TableCliente } from "./components/TableCliente.tsx";

function App() {
  return (
   <>
    <Navbar></Navbar>
    <MyFormComponent></MyFormComponent>
    <TableFornitore />
    <TableCliente />
   </>
  );
}

export default App;
