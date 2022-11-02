import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "./redux/store";
import Router from "./router";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
        <ToastContainer autoClose={500} />
      </Provider>
    </>
  );
}

export default App;
