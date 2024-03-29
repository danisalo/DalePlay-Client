import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"

import RegisterPage from "../pages/RegisterPage/RegisterPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import MyProfilePage from "../pages/MyProfilePage/MyProfilePage"
import EditUserPage from "../pages/EditUserPage/EditUserPage"

import CreateClubPage from "../pages/CreateClubPage/CreateClubPage"
import ClubListPage from "../pages/ClubListPage/ClubListPage"
import ClubDetailsPage from "../pages/ClubDetailsPage/ClubDetailsPage"
import EditClubPage from "../pages/EditClubPage/EditClubPage"

import CreateFieldPage from "../pages/CreateFieldPage/CreateFieldPage"
import FieldListPage from "../pages/FieldListPage/FieldListPage"
import FieldDetailsPage from "../pages/FieldDetailsPage/FieldDetailsPage"
import EditFieldPage from "../pages/EditFieldPage/EditFieldPage"

import CreateEventPage from "../pages/CreateEventPage/CreateEventPage"
import EventsPage from "../pages/EventsPage/EventsPage"
import EventDetailsPage from "../pages/EventDetailsPage/EventDetailsPage"

import PrivateRoute from "./PrivateRoutes"



const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/registro" element={<RegisterPage />} />
            <Route path="/iniciar-sesion" element={<LoginPage />} />

            <Route path="/crear-club" element={<CreateClubPage />} />
            <Route path="/clubs" element={<ClubListPage />} />
            <Route path="/clubs/:club_id" element={<ClubDetailsPage />} />

            <Route path="/campos" element={<FieldListPage />} />
            <Route path="/campo/:field_id" element={<FieldDetailsPage />} />
            <Route path="/campo/editar/:field_id" element={<EditFieldPage />} />

            <Route path="/evento/:event_id" element={<EventDetailsPage />} />
            <Route path="/partidas" element={<EventsPage />} />

            < Route element={<PrivateRoute />} >

                <Route path="/crear-club" element={<CreateClubPage />} />
                <Route path="/clubs/editar/:club_id" element={<EditClubPage />} />

                <Route path="/:club_id/crear-cancha" element={<CreateFieldPage />} />

                <Route path="/crear-partida" element={<CreateEventPage />} />

                <Route path="/miperfil/:user_id" element={<MyProfilePage />} />
                <Route path="/editar/:user_id" element={<EditUserPage />} />

            </Route>

            <Route path="*" element={<p>404</p>} />
        </Routes>
    )
}


export default AppRoutes