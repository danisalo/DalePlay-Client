import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"

import RegisterPage from "../pages/RegisterPage/RegisterPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import MyProfilePage from "../pages/MyProfilePage/MyProfilePage"
import UserProfilePage from "../pages/UserProfilePage/UserProfilePage"

import ClubListPage from "../pages/ClubListPage/ClubListPage"
import ClubDetailsPage from "../pages/ClubDetailsPage/ClubDetailsPage"
import CreateClubPage from "../pages/CreateClubPage/CreateClubPage"

import FieldListPage from "../pages/FieldListPage/FieldListPage"
import CreateFieldPage from "../pages/CreateFieldPage/CreateFieldPage"
import FieldDetailsPage from "../pages/FieldDetailsPage/FieldDetailsPage"

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

            <Route path="/clubs" element={<ClubListPage />} />
            <Route path="/crear-club" element={<CreateClubPage />} />
            <Route path="/clubs/:club_id" element={<ClubDetailsPage />} />
            {/* <Route path="/clubs/edit/:club_id" element={<HomePage />} /> */}

            <Route path="/canchas" element={<FieldListPage />} />

            <Route path="/cancha/:field_id" element={<FieldDetailsPage />} />
            {/* <Route path="/field/edit/:field_id" element={<HomePage />} /> */}

            < Route element={<PrivateRoute />} >
                <Route path="/crear-club" element={<CreateClubPage />} />
                <Route path="/:club_id/crear-cancha" element={<CreateFieldPage />} />
                <Route path="/crear-partida" element={<CreateEventPage />} />
                <Route path="/miperfil/:user_id" element={<MyProfilePage />} />
            </Route>
            <Route path="/partidas" element={<EventsPage />} />

            {/* <Route path="/events/:event_id" element={<HomePage />} /> */}
            {/* <Route path="/events/cancel/:event_id" element={<HomePage />} /> */}

            <Route path="*" element={<p>404</p>} />
        </Routes>
    )
}


export default AppRoutes