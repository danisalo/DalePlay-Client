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

import EventsPage from "../pages/EventsPage/EventsPage"
import CreateEventPage from "../pages/CreateEventPage/CreateEventPage"
import PrivateRoute from "./PrivateRoutes"


const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/registro" element={<RegisterPage />} />
            <Route path="/iniciar-sesion" element={<LoginPage />} />

            {/* <Route path="/profile/:user_id" element={<UserProfilePage />} /> */}

            <Route path="/clubs" element={<ClubPage />} />

            {/* <Route path="/clubs/:club_id" element={<HomePage />} /> */}
            {/* <Route path="/clubs/edit/:club_id" element={<HomePage />} /> */}

            <Route path="/canchas" element={<FieldPage />} />

            {/* <Route path="/field/:field_id" element={<HomePage />} /> */}
            {/* <Route path="/field/edit/:field_id" element={<HomePage />} /> */}
            <Route element={<PrivateRoute />} >
                <Route path="/crear-club" element={<CreateClubPage />} />
                <Route path="/crear-cancha" element={<CreateFieldPage />} />
                <Route path="/crear-partida" element={<CreateEventPage />} />
                <Route path="/profile" element={<MyProfilePage />} />
            </Route>
            <Route path="/partidas" element={<EventsPage />} />

            {/* <Route path="/events/:event_id" element={<HomePage />} /> */}
            {/* <Route path="/events/cancel/:event_id" element={<HomePage />} /> */}

            <Route path="*" element={<p>404</p>} />
        </Routes>
    )
}


export default AppRoutes