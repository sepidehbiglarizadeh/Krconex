import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "./routes";
import store from "./redux/store"

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          {routes.map((route) => {
            return <Route key={Date.now()} {...route} />;
          })}
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
