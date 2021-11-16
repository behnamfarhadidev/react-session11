import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("../pages/home"));
const ProfilePage = lazy(() => import("../pages/profile"));

const MainRouter = () => {
  return (
    <Router>
      <Suspense fallback={<p> Loading ...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<p>Not Found ...</p>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default MainRouter;
