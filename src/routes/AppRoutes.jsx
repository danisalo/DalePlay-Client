import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import ClubListPage from "../pages/ClubPage/ClubPage"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            {/* <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} /> */}
            {/* <Route path="/profile" element={<HomePage />} />
            <Route path="/profile/:user_id" element={<HomePage />} /> */}

            <Route path="/clubs" element={<ClubListPage />} />
            {/* <Route path="/clubs/create" element={<ClubForm />} /> */}
            {/* <Route path="/clubs/:club_id" element={<HomePage />} />
            <Route path="/clubs/edit/:club_id" element={<HomePage />} /> */}

            {/* <Route path="/field" element={<FieldList />} />
            <Route path="/field/create" element={<FieldForm />} /> */}
            {/* <Route path="/field/:field_id" element={<HomePage />} />
            <Route path="/field/edit/:field_id" element={<HomePage />} /> */}

            {/* <Route path="/events" element={<EventList />} />
            <Route path="/events/create" element={<EventForm />} /> */}
            {/* <Route path="/events/:type" element={<HomePage />} />
            <Route path="/events/:event_id" element={<HomePage />} />
            <Route path="/events/cancel/:event_id" element={<HomePage />} /> */}

            <Route path="*" element={<p>404</p>} />
        </Routes>
    )
}


export default AppRoutes