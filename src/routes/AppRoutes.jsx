import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"

import RegisterPage from "../pages/RegisterPage/RegisterPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import MyProfilePage from "../pages/MyProfilePage/MyProfilePage"
import UserProfilePage from "../pages/UserProfilePage/UserProfilePage"

import ClubListPage from "../pages/ClubListPage/ClubListPage"
import ClubDetailsPage from "../pages/ClubDetailsPage/ClubDetailsPage"
import CreateClubPage from "../pages/CreateClubPage/CreateClubPage"
import EditClubPage from "../pages/EditClubPage/EditClubPage"

import FieldListPage from "../pages/FieldListPage/FieldListPage"
import CreateFieldPage from "../pages/CreateFieldPage/CreateFieldPage"
import FieldDetailsPage from "../pages/FieldDetailsPage/FieldDetailsPage"
import EditFieldForm from "../components/EditFieldForm/EditFieldForm"

import EventsPage from "../pages/EventsPage/EventsPage"
import CreateEventPage from "../pages/CreateEventPage/CreateEventPage"

import PrivateRoute from "./PrivateRoutes"



const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/registro" element={<RegisterPage />} />
            <Route path="/iniciar-sesion" element={<LoginPage />} />


            <Route path="/clubs" element={<ClubListPage />} />
            <Route path="/crear-club" element={<CreateClubPage />} />
            <Route path="/clubs/:club_id" element={<ClubDetailsPage />} />

            <Route path="/canchas" element={<FieldListPage />} />

            <Route path="/cancha/:field_id" element={<FieldDetailsPage />} />
            <Route path="/:field_id/editar" element={<EditFieldForm />} />

            < Route element={<PrivateRoute />} >
                <Route path="/crear-club" element={<CreateClubPage />} />
                <Route path="/:club_id/editar" element={<EditClubPage />} />

                <Route path="/:club_id/crear-cancha" element={<CreateFieldPage />} />

                <Route path="/crear-partida" element={<CreateEventPage />} />
                <Route path="/miperfil/:user_id" element={<MyProfilePage />} />
            </Route>

            <Route path="/partidas" element={<EventsPage />} />


            <Route path="*" element={<p>404</p>} />
        </Routes>
    )
}


export default AppRoutes