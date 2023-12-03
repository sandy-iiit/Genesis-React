import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Offers from "./components/Home/Offers";
import Profile from "./pages/Profile";
import AskQuery from "./pages/User/AskQuery";
import ViewMyQueries from "./pages/User/ViewMyQueries";
import WriteReview from "./pages/User/WriteReview";
import AnswerQuery from "./pages/Admin/AnswerQuery";
import ReviewViewer from "./pages/Admin/ReviewViewer";
import ViewMyAnswers from "./pages/Admin/ViewMyAnswers";
import LoginPage from "./pages/Auth/LoginPage";
import AgentDashboard from "./components/DashBoards/AgentDashboard/AgentDashboard";
import TransportForm from "./pages/Applications/TransportFormApplication/TransportForm";
import HealthForm from "./pages/Applications/HealthFormApplication/HealthForm";
import LifeForm from "./pages/Applications/LifeFormApplication/LifeForm";
import UserApplicationList from "./pages/Applications/UserApplicationList";
import IndividualTransportApplication
    from "./components/Applications/TransportApplication/IndividualTransportApplication";
import ApplicationListViewer from "./pages/Admin/ApplicationListViewer";
import IndividualHealthApplication from "./components/Applications/HealthApplication/IndividualHealthApplication";
import IndividualLifeApplication from "./components/Applications/LifeApplication/IndividualLifeApplication";
import PolicyForm from "./components/DashBoards/DesignPolicy/PolicyForm";
import InsurancePolicyChart from "./components/DashBoards/CompanyStats/InsurancePolicyChart";
import Announcement from "./components/DashBoards/Announcements/Announcement";
import TrackPolicy from "./components/DashBoards/TrackPolicy/TrackPolicy";
import Services from "./components/Services/Services";
import Policies from "./components/Policies/Policies";
import AboutUs from "./components/AboutusandContatcus/AboutUs";
import ContactUs from "./components/AboutusandContatcus/ContactUs";
import EmployeeSignup from "./pages/Auth/EmployeeSignup";
const router=createBrowserRouter([
    {
        path:'/',
        element:<Home />,
    },
    {
        path:'/profile',
        element:<Profile/>,
    },
    {
        path:'/aboutUs',
        element:<AboutUs/>,
    },
    {
        path:'/contactUs',
        element:<ContactUs/>,
    },
    {
        path:'/services',
        element:<Services/>,
    },
    {
        path:"/policies",
        element:<Policies/>
    },
    {
        path:"/agentSignUp",
        element:<EmployeeSignup/>
    },
    {
    path:'/login',
    element:<LoginPage/>
    },
    {
    path:'/askQuery',
    element:<AskQuery/>
    },
    {
        path:'/viewQueries',
        element:<ViewMyQueries/>
    },
    {
        path:'/dropReview',
        element:<WriteReview/>
    },
    {
        path:'/answerQueries',
        element:<AnswerQuery/>
    },
    {
        path:'/viewReviews',
        element:<ReviewViewer/>
    },
    {
        path:'/answeredQueries',
        element:<ViewMyAnswers/>
    },
    {
        path:"/dashBoard",
        element:<AgentDashboard/>
    },
    {
        path:"/transportApplication",
        element:<TransportForm/>
    } ,
    {
        path:"/healthApplication",
        element:<HealthForm/>
    },
    {
        path:"/lifeApplication",
        element:<LifeForm/>
    },
    {
        path:"/userApplications",
        element:<UserApplicationList/>
    },
    {
        path:"/openTransportApp/:id",
        element:<IndividualTransportApplication/>
    },
    {
        path:"/openHealthApp/:id",
        element:<IndividualHealthApplication/>
    },
    {
        path:"/openLifeApp/:id",
        element:<IndividualLifeApplication/>
    },
    {
        path:"/applications/:appType",
        element:<ApplicationListViewer/>
    },
    {
        path:"/designPolicy",
        element:<PolicyForm/>
    },
    {
        path:"/companyStats",
        element:<InsurancePolicyChart/>
    },
    {
        path:"/announcement",
        element:<Announcement/>
    },
    {
        path:"/trackPolicy",
        element:<TrackPolicy/>
    },

])


export default router
