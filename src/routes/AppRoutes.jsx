import { Route, Routes } from "react-router-dom"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="*" element={<p>404</p>} />
        </Routes>
    )
}

export default AppRoutes