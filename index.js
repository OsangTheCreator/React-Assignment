import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
// // import Home from './pages/Home/Home';
// import About from "./pages/About/About";
// import BookList from "./components/BookList/BookList";
// import BookDetails from "./components/BookDetails/BookDetails";


import Home from "./job/Pages/Home.jsx";
import JobList from "./job/Pages/JobList.jsx";
import JobDetails from "./job/Pages/JobDetail.jsx";
import Resume from "./job/Pages/Resume.jsx";
import Profile from "./job/Pages/Profile.jsx";
import PostResume from "./job/Pages/PostResume.jsx";
import JobPost from "./job/Pages/JobPost.jsx";
import EditResume from "./job/Pages/EditResume.jsx";
import ProfileDetails from "./job/Pages/ProfileDetails.jsx";
import BookMark from "./job/Pages/BookMarks.jsx";
import AppliedJob from "./job/Pages/AppliedJobs.jsx";
import DeleteAccount from "./job/Pages/DeleteAccount";
import Signup from "./job/Pages/Signup.jsx";
import Signin from "./job/Pages/Signin.jsx";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        {/* <Route path = "/" element = {<Home />}> */}
          {/* <Route path = "about" element = {<About />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
 */}
          <Route path="/home" element={<Home />} />
          <Route path="/job-list" element={<JobList />} />
          <Route path="/job-details/:id" element={<JobDetails />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post-resume" element={<PostResume />} />
          <Route path="/job-post" element={<JobPost />} />
          <Route path="/edit-resume" element={<EditResume />} />
          <Route path="/profile-details" element={<ProfileDetails />} />
          <Route path="/bookmark" element={<BookMark />} />
          <Route path="/applied-job" element={<AppliedJob />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

      </Routes>
    </BrowserRouter>
  </AppProvider>
);

