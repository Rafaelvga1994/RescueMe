
import { ToastContainer } from "react-toastify";
import { Router } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router />
      <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
    </div>
  );
}

export default App;
