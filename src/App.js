import './App.css';
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/login/Login";
import HostLandingPage from "./components/hostlandingpage/hostlandingpage";
import UserLandingPage from "./components/UserLandingPage/UserLandingPage";
import UserHeader from './components/UserHeader/Userheader';
import Footer from './components/Footer/Footer';
import ProblemComposer from "./components/ProblemComposer/ProblemComposer";
import ComposedProblems from "./components/UserProblemDisplay/UserProblemDisplay";
import ProblemDescription from './components/ProblemDescription/ProblemDescripiton';
import HostProblemFeed from'./components/HostProblemFeed/HostProblemFeed';
import ProblemStatus from "./components/ProblemStatus/ProblemStatus";
import CompletedProblems from "./components/ProblemStatus/CompletedStatus";
import HostAnalysis from "./components/HostAnalysisPage/HostAnalysisPage";
import AboutUs from "./components/AboutUs/AboutUs";
import UserAnalysis from "./components/UserAnalysis/UserAnalysis";
// import UserProfile from "./components/UserProfilePage/UserProfile";
import PrivacyPolicy from "./components/PrivacyPolicy/PandP";
import TermsConditions from "./components/TermsandConditions/TandC";
import HostAboutUs from "./components/AboutUsHost/AboutUsHost";
import HostProfile from "./components/HostProfile/HostProfile";
import HostGeneral from "./components/HostProfile/General";
import HostHeader from "./components/HostProfile/changePassword";
import HostInfoProfile from "./components/HostProfile/info";
import HostContactDetails from "./components/HostProfile/ContactDetails";
import ProblemContainer from "./components/UserProblemDisplay/problemContainer";
import HostMessaging from "./components/HostMessaging/HostMessaging";
import MessageContainer from "./components/HostMessaging/MessageContainer";
import UserMessageContainer from './components/UserMessaging/UserMessageContainer';
import UserMessaging from './components/UserMessaging/UserMessaging';
import UserProfile from "./components/UserProfile/UserProfile";
import UserProfileChange from "./components/UserProfile/UserPasswordChange";
import UserInfo from './components/UserProfile/UserInfo';
import UserContactDetails from "./components/UserProfile/UserContactDetails";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/host",
    element: <HostLandingPage />
  },
  {
    path : "/userlandingpage",
    element : <UserLandingPage />
  },
  {
    path : "/userprofile",
    element : <UserProfile />
  },
  {
    path : "/userheader",
    element : <UserHeader />
  },
  {
    path : "/footer",
    element : <Footer />
  },
  {
    path : "/problemcomposer",
    element : <ProblemComposer />
  },
  {
    path : '/composedproblems',
    element : <ComposedProblems />
  },
  {
    path : "/problemdescription",
    element : <ProblemDescription />
  },
  {
    path : "/hostfeed",
    element : <HostProblemFeed />
  },
  {
    path : "/problemstatus",
    element : <ProblemStatus />
  },
  {
    path : "/completedstatus",
    element : <CompletedProblems />
  },
  {
    path : "/HostAnalysis",
    element : <HostAnalysis />
  },
  {
    path : "/AboutUs",
    element : <AboutUs />
  },
  {
    path : "/UserAnalysis",
    element : <UserAnalysis />
  },
  {
    path : "/UserProfilePage",
    element : <UserProfile />
  },
  {
    path : "/PrivacyPolicy",
    element : <PrivacyPolicy />
  },
  {
    path : "/TermsConditions",
    element : <TermsConditions />
  },
  {
    path : "/HostAboutUs",
    element : <HostAboutUs />
  },
  {
    path : "/HostProfile",
    element : <HostProfile />
  },
  {
    path : "/HostGeneral",
    element : <HostGeneral />
  },
  {
    path : "/HostChangePassword",
    element : <HostHeader />
  },
  {
    path : "/HostInfo",
    element : <HostInfoProfile />
  },
  {
    path : "/ContactDetails",
    element : <HostContactDetails />
  },
  {
    path : "/ProblemContainer",
    element : <ProblemContainer />
  },
  {
    path : "/HostMessaging",
    element : <HostMessaging />
  },
  {
    path : "/MessageContainer",
    element : <MessageContainer />
  },
  {
    path : "/UserMessaging",
    element : <UserMessaging />
  },
  {
    path : "/UserMessageContainer",
    element : <UserMessageContainer />
  },
  {
    path : "/UserProfile",
    element : <UserProfile />
  },
  {
    path : "/UserProfileChange",
    element : <UserProfileChange/>
  },
  {
    path : "/UserInfo",
    element : <UserInfo />
  },
  {
    path : "/UserContactDetails",
    element : <UserContactDetails />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
