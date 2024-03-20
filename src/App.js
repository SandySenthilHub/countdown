import "./App.css";
import Countdown from "./components/Countdown/Countdown";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormProvider } from './components/FormContext/FormContext';


function App() {
  return (
    <div className="App">
      <Router>
        <FormProvider>
          <Header />
          <Routes>
            <Route path="/" exact element={<Countdown />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </FormProvider>
      </Router>
    </div>
  );
}

export default App;
