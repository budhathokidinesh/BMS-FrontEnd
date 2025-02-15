import React from "react";
import {
  HomePage,
  DashboardPage,
  SignUpPage,
  ActivateUserPage,
  SignInPage,
  ForgotPasswordPage,
  BooksPage,
  BookLandingPage,
  EditBookPage,
  NewBookPage,
  ReviewsPage,
  UserPage,
  ProfilePage,
  BorrowHistoryPage,
} from "../pages/index";
import { Routes, Route } from "react-router-dom";
import { DefaultLayouts } from "../components/layouts/DefaultLayouts";
import { UserLayout } from "../components/layouts/UserLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* public pages  */}
      <Route path="/" element={<DefaultLayouts />}>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="activate-user" element={<ActivateUserPage />} />
        <Route path="login" element={<SignInPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
      </Route>

      {/* private pages  */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="books" element={<BooksPage />} />
        <Route path="book-landing" element={<BookLandingPage />} />
        <Route path="edit-book" element={<EditBookPage />} />
        <Route path="new-book" element={<NewBookPage />} />
        <Route path="borrow-history" element={<BorrowHistoryPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="user-list" element={<UserPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
