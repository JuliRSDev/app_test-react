import './App.css'
import { Navbar } from "@/components/Navbar";
import { Home } from "@/pages/Home/Home";
import {LayoutContainer} from "@/styled-components/layout.styled.components";

function App() {

  return (
    <div className="App">
        <Navbar />
        <LayoutContainer>
            <Home />
        </LayoutContainer>
    </div>
  )
}

export default App
