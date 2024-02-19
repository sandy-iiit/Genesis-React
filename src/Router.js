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
import LoginPage from "./pages/LoginPage";
import AgentDashboard from "./components/DashBoards/AgentDashboard/AgentDashboard";
import TransportForm from "./pages/Applications/TransportFormApplication/TransportForm";
<<<<<<< HEAD
import Policies from './components/Policies/Policies';
import Services from './components/Services/Services';
import PolicyForm from './components/DashBoards/DesignPolicy/PolicyForm';
import InsurancePolicyChart from './components/DashBoards/CompanyStats/InsurancePolicyChart';
import Announcement from './components/DashBoards/Announcements/Announcement';
import TrackPolicy from './components/DashBoards/TrackPolicy/TrackPolicy';
import EmployeeSignupForm from './components/auth/EmployeeSignup';
import ContactUs from './components/AboutusandContatcus/ContactUs';
import AboutUs from './components/AboutusandContatcus/AboutUs';
import MyPolicy from './pages/User/MyPolicy';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            { path: '/offer', element: <Offers /> }
        ]
    },
    {
        path: '/profile',
        element: <Profile />,
=======
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
import HealthPolicy from "./components/PoliciesCards/HealthPolicy";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer/Footer";
import LifePolicy from "./components/PoliciesCards/LifePolicy";
import TransportPolicy from "./components/PoliciesCards/TransportPolicy";
import HealthPolicyPage from "./components/PolicyDetails/HealthPolicyPage";
import LifePolicyPage from "./components/PolicyDetails/LifePolicyPage";
import TransportPolicyPage from "./components/PolicyDetails/TransportPolicyPage";
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
>>>>>>> 53f162f130205c3c9c8f4c5a73bddc3878930479
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/askQuery',
        element: <AskQuery />
    },
    {
        path: '/policies',
        element: <Policies />
    },
    {
        path: '/services',
        element: <Services />
    },
    {
        path: '/viewQueries',
        element: <ViewMyQueries />
    },
    {
        path: '/dropReview',
        element: <WriteReview />
    },
    {
        path: '/answerQueries',
        element: <AnswerQuery />
    },
    {
<<<<<<< HEAD
        path: '/viewReviews',
        element: <ReviewViewer />
    },
    {
        path: '/answeredQueries',
        element: <ViewMyAnswers />
    },
    {
        path: "/dashBoard",
        element: <AgentDashboard />
    },
    {
        path: "/transportApplication",
        element: <TransportForm />
    },
    {
        path: '/designpolicy',
        element: <PolicyForm />
    },
    {
        path: '/companystats',
        element: <InsurancePolicyChart />
    },
    {
        path: '/sendemail',
        element: <Announcement />
    }, {
        path: '/tractpolicy',
        element: <TrackPolicy />
    },
    {
        path: '/employeesignup',
        element: <EmployeeSignupForm/>
    },
    {
        path: '/contactus',
        element: <ContactUs/>
    },
    {
        path: '/aboutus',
        element: <AboutUs/>
    },
    {
        path: '/mypolicies',
        element: <MyPolicy/>,
=======
        path:"/transportApplication",
        element:<TransportForm/>
    } ,
    {
        path:"/healthApplication/:name/:id/:cover/:term",
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
    {
        path:"/healthpolicies/",
        element:<><NavBar/><HealthPolicy/><Footer/></>
    },
    {
        path:"/lifepolicies",
        element:<><NavBar/><LifePolicy/><Footer/></>
    },
    {
        path:"/transportpolicies",
        element:<><NavBar/><TransportPolicy/><Footer/></>
    },
    {
        path:"/PolicyDetails/health/:id",
        element:<><NavBar/><HealthPolicyPage/><Footer/></>

    },
    {
        path:"/PolicyDetails/life",
        element:<><NavBar/><LifePolicyPage/><Footer/></>
    },
    {
        path:"/PolicyDetails/transport",
        element:<><NavBar/><TransportPolicyPage/><Footer/></>
>>>>>>> 53f162f130205c3c9c8f4c5a73bddc3878930479
    }

])


export default router
