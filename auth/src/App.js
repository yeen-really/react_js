import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Main } from "./pages/Main.jsx";
import { Registration } from "./pages/Registration.jsx";
import { Login } from "./pages/Login.jsx";
import { AuthProvider, useAuthContext } from "./context/authContext";
import { Provider } from "react-redux";
// import { store } from "./store/index.js";
import { store } from "./store";


const PrivateRoute = ({ children }) => {
  const { isLogin } = useAuthContext();
  const { user } = useAuthContext();

  const navigation = useNavigate();
  console.log(isLogin);
  console.log(user);

  if (isLogin === false) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Main />
                </PrivateRoute>
              }
            />
            {/* <Route path="/" element={<Main />} /> */}

            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
