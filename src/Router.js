import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Offers from "./components/Home/Offers";
import Profile from "./pages/Profile";
import Login from "./pages/Auth/Login";
import AskQuery from "./pages/User/AskQuery";
import ViewMyQueries from "./pages/User/ViewMyQueries";
import WriteReview from "./pages/User/WriteReview";
import AnswerQuery from "./pages/Admin/AnswerQuery";
import ViewReviews from "./components/Reviews/ViewReviews";
import ReviewViewer from "./pages/Admin/ReviewViewer";
import ViewAnsweredQueries from "./components/Queries/ViewAnsweredQueries";
import ViewMyAnswers from "./pages/Admin/ViewMyAnswers";
import LoginPage from "./pages/Auth/LoginPage";
import AgentDashboard from "./components/DashBoards/AgentDashboard/AgentDashboard";
import TransportApplication from "./components/Applications/TransportApplication/TransportApplication";
import TransportForm from "./pages/Applications/TransportFormApplication/TransportForm";
import Policies from './components/Policies/Policies';
import Services from './components/Services/Services';
import PolicyForm from './components/DashBoards/DesignPolicy/PolicyForm';
import InsurancePolicyChart from './components/DashBoards/CompanyStats/InsurancePolicyChart';
import Announcement from './components/DashBoards/Announcements/Announcement';
import TrackPolicy from './components/DashBoards/TrackPolicy/TrackPolicy';
import EmployeeSignupForm from './components/auth/EmployeeSignup';
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
    }
])


export default router
