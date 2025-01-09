import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Fine from "./pages/Fine/Fine";
import Report from "./pages/Report/Report";
import Traffic from "./pages/Traffic/Traffic";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Admin from "./Admin/AdminLogin";
import AdminProtectedRoute from "./components/ProtectedRoute/AdminProtectedRoute";
import AdminDashboard from "./Admin/AdminDashboard";
import Overview from "./Admin/Overview";
import Officer from "./Admin/Officer";
import PostOffice from "./Admin/PostOffice";
import ReportedIssues from "./Admin/ReportedIssues";
import UserOverview from "./pages/UserDashboard/UserOverview";
import FinePay from "./pages/UserDashboard/FinePay";
import ReportIssue from "./pages/UserDashboard/ReportIssue";
import Fines from "./Admin/Fines";
import Officers from "./pages/Officers/Officers";
import PostOffices from "./pages/PostOffices/PostOffices";
import OfficersLogin from "./Officers/OfficersLogin";
import OfficerDashboard from "./Officers/OfficerDashboard";
import OfficerProtectedRoute from "./components/ProtectedRoute/OfficerProtectedRoute";
import OfficerOverview from "./Officers/OfficerOverview";
import OfficerIssueFine from "./Officers/OfficerIssueFine";
import OfficerIssues from "./Officers/OfficerIssues";
import PostOfficeLogin from "./pages/PostOffices/PostOfficeLogin";
import PostOfficeDashboard from "./pages/PostOffices/PostOfficeDashboard";
import PostOfficeOverview from "./pages/PostOffices/PostOfficeOverview";
import PostPayFine from "./pages/PostOffices/PostPayFine";
import PostReportIssue from "./pages/PostOffices/PostReportIssue";
import Profile from "./pages/UserDashboard/Profile";
import Setting from "./Admin/Setting";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/officers" element={<Officers />} />
        <Route path="/post-offices" element={<PostOffices />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/fine" element={<Fine />} />
        <Route path="/report" element={<Report />} />
        <Route path="/traffic" element={<Traffic />} />
        <Route path="/adminLogin" element={<Admin />} />
        <Route path="/officersLogin" element={<OfficersLogin />} />
        <Route path="/post-office-login" element={<PostOfficeLogin />} />
        <Route path="/post-office-dashboard" element={<PostOfficeDashboard />}>
          <Route index element={<PostOfficeOverview />} />
          <Route path="overview" element={<PostOfficeOverview />} />
          <Route path="pay-fine" element={<PostPayFine />} />
          <Route path="issues" element={<PostReportIssue />} />
        </Route>
        {/* <Route path="/admin-dashboard" element={<AdminProtectedRoute element={<AdminDashboard />} />} /> */}
        {/* <Route path="/user-dashboard" component={UserDashboard} /> */}
        <Route
          path="/admin-dashboard"
          element={<AdminProtectedRoute element={<AdminDashboard />} />}
        >
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="fines" element={<Fines />} />
          <Route path="officer" element={<Officer />} />
          <Route path="post-office" element={<PostOffice />} />
          <Route path="reported-issues" element={<ReportedIssues />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route
          path="/officer-dashboard"
          element={<OfficerProtectedRoute element={<OfficerDashboard />} />}
        >
          <Route index element={<OfficerOverview />} />
          <Route path="officer-overview" element={<OfficerOverview />} />
          <Route path="fines" element={<Fines />} />
          <Route path="issue-fine" element={<OfficerIssueFine />} />
          <Route path="manage-issues" element={<OfficerIssues />} />
        </Route>
        <Route
          path="/user-dashboard"
          element={<ProtectedRoute element={<UserDashboard />} />}
        >
          <Route index element={<UserOverview />} />
          <Route path="user-overview" element={<UserOverview />} />
          <Route path="fine-pay" element={<FinePay />} />
          <Route path="report-issue" element={<ReportIssue />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
