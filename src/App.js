import Layout from "./Container/Layout/Layout";
import Home from "./Components/Pages/Home/Home";
import Crew from "./Components/Pages/Crew/Crew";
import Technology from "./Components/Pages/Technology/Technology";
import Destination from "./Components/Pages/Destination/Destination";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="*" element={<h1>Page Not Found!</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
