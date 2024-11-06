import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import CreateProject from "./pages/CreateProject";
import ProjectsPage from "./pages/ProjectsPage";
import UserProfile from "./pages/UserProfile";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import SingleProjectPage from "./pages/SingleProjectPage";
import FundProjectPage from "./pages/FundProject";
import MyProjects from "./pages/MyProjects";
import BookmarksPage from "./pages/BookmarksPage";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/projects/create' element={<CreateProject />} />
        <Route path='/projects/all' element={<ProjectsPage />} />
        <Route path='/user/profile' element={<UserProfile />} />
        <Route path='/user/bookmarks' element={<BookmarksPage />} />
        <Route path='/project/:id' element={<SingleProjectPage />} />
        <Route path='/fund/:id' element={<FundProjectPage />} />
        <Route path='/my/projects' element={<MyProjects />} />
      </Routes>
    </>
  );
}

export default App;
