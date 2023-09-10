import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import {
  nestingSiteColumns,
  speciesNestingColumns,
  nestingSeasonColumns,
  dailyNestingActivityColumns,
  newLocationColumns,
  nestSuccessColumns,
  nestingSiteTrendColumns,
  climateFactorColumns,
} from "./datatablesource";
import Nesting from "./pages/nesting/Nesting";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            {/* <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route> */}
            <Route path="nestingSites">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={nestingSiteColumns} />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="speciesNesting">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={speciesNestingColumns} />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="nestingSeason">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={nestingSeasonColumns} />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="dailyNestingActivity">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={dailyNestingActivityColumns} />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="newLocation">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={newLocationColumns} />
                  </ProtectedRoute>
                }
              />
            </Route>
            
            <Route path="nestSuccess">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={nestSuccessColumns} />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="nestingSiteTrend">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={nestingSiteTrendColumns} />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="climateFactor">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={climateFactorColumns} />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="nestingSuitability">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Nesting />
                  </ProtectedRoute>
                }
              />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
