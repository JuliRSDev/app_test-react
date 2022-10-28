import './App.css'
import { Navbar } from "@/components/Navbar";
import { Home } from "@/pages/Home/Home";
import {LayoutContainer} from "@/styled-components/layout.styled.components";
import {Provider} from "react-redux";
import {store} from "@/redux/store";

function App() {

  return (
    <div className="App">
        <Provider store={store}>
            <Navbar />
            <LayoutContainer>
                <Home />
            </LayoutContainer>
        </Provider>
    </div>
  )
}

export default App
