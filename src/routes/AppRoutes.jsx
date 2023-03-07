import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"

import RegisterPage from "../pages/RegisterPage/RegisterPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import MyProfilePage from "../pages/MyProfilePage/MyProfilePage"
import UserProfilePage from "../pages/UserProfilePage/UserProfilePage"

import ClubPage from "../pages/ClubPage/ClubPage"
import CreateClubPage from "../pages/CreateClubPage/CreateClubPage"

import FieldPage from "../pages/FieldPage/FieldPage"
import CreateFieldPage from "../pages/CreateFieldPage/CreateFieldPage"

import EventPage from "../pages/EventPage/EventPage"
import CreateEventPage from "../pages/CreateEventPage/CreateEventPage"


const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/registro" element={<RegisterPage />} />
            <Route path="/iniciar-sesion" element={<LoginPage />} />
            <Route path="/profile" element={<MyProfilePage />} />
            {/* <Route path="/profile/:user_id" element={<UserProfilePage />} /> */}

            <Route path="/clubs" element={<ClubPage />} />
            <Route path="/clubs/create" element={<CreateClubPage />} />
            {/* <Route path="/clubs/:club_id" element={<HomePage />} /> */}
            {/* <Route path="/clubs/edit/:club_id" element={<HomePage />} /> */}

            <Route path="/field" element={<FieldPage />} />
            <Route path="/field/create" element={<CreateFieldPage />} />
            {/* <Route path="/field/:field_id" element={<HomePage />} /> */}
            {/* <Route path="/field/edit/:field_id" element={<HomePage />} /> */}

            <Route path="/events" element={<EventPage />} />
            <Route path="/events/create" element={<CreateEventPage />} />
            {/* <Route path="/events/:event_id" element={<HomePage />} /> */}
            {/* <Route path="/events/cancel/:event_id" element={<HomePage />} /> */}

            <Route path="*" element={<p>404</p>} />
        </Routes>
    )
}


export default AppRoutes