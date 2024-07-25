import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <>
      {/* <Nav /> */}
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        {/* <Route path={PUBLICROUTES.BOOKS} element={<Books />} />
        <Route path={`${PUBLICROUTES.BOOKS}/details`} element={<BookDetails />} />
        <Route path={PUBLICROUTES.CONSULT} element={<Consult />} />
        <Route path={`${PUBLICROUTES.BLOG}/:id`} element={<Blog />} />
        <Route path={PUBLICROUTES.DONATION} element={<Donations />} />
        <Route path={PUBLICROUTES.SIGNUP} element={<SignUp />} />
        <Route path={PUBLICROUTES.SIGNUP} element={<Login />} />
        <Route path={PUBLICROUTES.ABOUTUS} element={<About />} />
        <Route path={PUBLICROUTES.CONTACTUS} element={<ContactUs />} />
        <Route path={PUBLICROUTES.ADMIN} element={<AdminLogin />} />
        <Route path={PUBLICROUTES.BLOG_EDITOR} element={<BlogEditor />} />
        <Route path={PUBLICROUTES.UPLOAD_BOOKS} element={<UploadBooks />} />
        <Route path={PUBLICROUTES.EDIT_BOOKS} element={<EditBookDetails />} />{" "}
        <Route path={PUBLICROUTES.BECOME_MEMBER} element={<BecomeMember />} />
        <Route path={"*"} element={<Page404 />} /> */}
      </Routes>
    </>
  );
};

export default App;
