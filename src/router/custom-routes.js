import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/user/home-page'
import AboutPage from '../pages/user/about-page'
import VehiclesPage from '../pages/user/vehicles-page'
import VehicleDetailsPage from '../pages/user/vehicle-details-page'
import ContactPage from '../pages/user/contact-page'
import PrivacyPolicyPage from '../pages/user/privacy-policy-page'
import AuthPage from '../pages/common/auth-page'
import ProfilePage from '../pages/user/profile-page'
import UnauthorizedPage from '../pages/common/unauthorized-page'
import ReservationsPage from '../pages/user/reservations-page'
import ReservationDetailsPage from '../pages/user/reservation-details-page'
import NotFoundPage from '../pages/common/not-found-page'

const CustomRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="vehicles">
                        <Route index element={<VehiclesPage />} />
                        <Route path=":id" element={<VehicleDetailsPage />} />
                    </Route>
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="auth" element={<AuthPage />} />
                    <Route path="unauthorized" element={<UnauthorizedPage />} />
                    <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
                    <Route path="user">
                        <Route index element={<ProfilePage />} />
                        <Route path="reservations">
                            <Route index element={<ReservationsPage />} />
                            <Route path=":id" element={<ReservationDetailsPage />} />
                        </Route>
                    </Route>
                    <Route path="admin">

                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default CustomRoutes