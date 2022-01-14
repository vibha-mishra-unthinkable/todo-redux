import "./App.css";
import Todo from "./Todo";
import store from "./redux/store/index";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
