import './App.css';
import {Button} from "./components/Button.styled"
function App() {
  return (
    <>
     <Button border={"dashed"}>Dashed Button</Button>
      <Button >Default Button</Button>
      <Button color={"blue"} border={"none"}>Link Button</Button>
      <Button backgroundColor={"blue"} color={"white"}>Primary Button</Button>
      <Button border={"none"} >Text Button</Button>
    </>
  );
}

export default App;
