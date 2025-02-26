# React Fullstack Books Management System(Front End)

Welcome to (MERN) React Fullstack Books Management System. This project showcases how the users, admins and books are managed in online library system using. Front End of this website uses React libraries. This website gives user friendly interface to users, can borrow books available in the online store, return it in designated time frame and also can do rating and leave reviews.

## Table of Contents

- [Introduction](#introduction)
- [Features](#Features)
- [Technologies Used](#Technologies-Used)
- [How to use](#How-to-use)
- [Project Structure](#project-Structure)
- [Contributing](#Contributing)
- [License](#License)
- [Contact](#contact)
- [Thank you Message](#Thank-you-Message)

## Introduction

This (MERN) Fullstack Books Management System shows the users and admins can easily borrow books from the library. They can create their account by submitting first name, last name, email, phone number and password. After signup, they can activate account from activation link that comes in valid email account. After that users and admins can log in by email and password. When they logged in, they will see own dashboard. Users and admin can borrow books available in store and should retrn in allocated time slut. After returning books, users can leave their review and thay can rate books depending on how much they like. However, admins can add new books, can update books, delete books as well as can control all user. Inside dashboard page there are many sections like books, reviews, borrow history etc. After borrowing books they can logout and users will send to the login page. If users and admin forget password they can reset password by providing email and will recieve OTP. After submitting OTP and new password can make new password.

[Visit my Live Website](http://www.dineshbudhathoki.com)

## Features

- **User-friendly Interface and Responsive Design**: Optimized for all devices, including desktops, tablets, and mobile phones.
- **Multile Page App**: This website is build using multiple page app structure. The codebase for the multiple page is deployed in github and the code is available `main` branch.
- **User Roles**: Admin and Users
  - Admin: Full CRUD permisons on books and users, the ability to view all borrowing history. Also the ability to borrow as members.
  - Members: Members can borrow/return books, view their borrowing history, can give rating on books upon return.
- **Book Management**:

  - Admins can add, edit, delete and update books in the book store.
  - Both members and admins can view book details such as book title, author, ISBN, genre, availiability, average raring and reviews.

- **Borrowing system**:
  - Both members and admins can borrow availabe books.
  - Members will recieve due dates, and they can rate book upon return.
  - Admins can view the borrowing history of all members, while members can only view their own.
- **Review Features**:
  - Members can review and rate books after returning them.
  - Rating will be on a 1-5 star scale
  - Book rating will be averaged and displayed alongside book details
- **Reports and History**:
  - Admins can view reports and analytics, including book popularity and overall borrowing activity
  - History logs for each user's borrowing and rating activities.

## Technologies Used

### **Frontend**:

- ReactJS: A popular open-source JavaScript library primarily used for building dynamic and interactive user interfaces (UI) for web applications
- Yarn: Allows developers to easily install, manage, and update external code libraries (packages) needed for their applications.
- Vite: A fast and efficient frontend build tool.
- Java Script: Very popular programming language.
- Redux: A JavaScript library primarily used for managing an application's state in a centralized manner.
- React Bootstrap: A popular front-end development library that allows developers to use Bootstrap components within a React application.
- React Icons: It provides icones which are used while building React web application.
- React router dom: An npm package that enables you to implement dynamic routing in a web app.
- Axios: A popular JavaScript library that allows developers to make HTTP requests (like GET, POST, PUT, DELETE) to web servers.
- regex: A sequence of characters that defines a pattern used to search and match text strings.
- React Toastify: It shows the pop up messages.

### **Deployment**:

- Vercel

## How to use

To set of this project in your device locally, please follow the steps:

1. **Clone the repository**:
   Run the following command in your terminal

```
git clone https://github.com/budhathokidinesh/BMS-FrontEnd.git
```

2. **Navigate to the project repository**:
   Run the following command in your terminal

```
cd FE_BMS
```

3. **Install the Dependencies**:

```
yarn add redux react-bootstrap axios react-router-dom react-toastify react-icons react-redux @reduxjs/toolkit regex
```

4. **Run the development server**:

```
yarn dev
```

Note: If you are not using `yarn`, you must install it globally. To install `yarn` globally, run the following command `npm i yarn -g`

5. **Creating the account**: When you open website you will se home page displaying books available. On the right side of the nav bar you will find home, sign up and login button. First click signup button. You will land signup page. On that page you need to provide First name, Last name, phone, Email and password (Please read carefully instruction for password). After submitting the form you will see pop up message saying "Activation link is sent to your email. Please check your email including junk folder."

6. **Activating the account**: Please check your email. You will find activation lik and click it. After clicking it your accound will activate and you may log in. You will also get notification email saying "Your email has been activatd. You may log in now".

7. **User Book Borrowing**: When you click login button it will take to you in login page where you will provide email and password. After succesfully loged in you will go in the dashboard.You will find differet books available and chose books you like and borrow. You will have option to return books. After returning book you can give rating and leave reviews.
8. **Admins**: If you are admins you can login as users do.However, you have different tasks rather than users. After landing in dashboard page you will have options like adding new books, updatng books and deleting books. You wil see "Add new book" button on top of right corner of book table. After clicking that you will land on add new book page. There you can provide all information needed while adding new book. On the book table. At the right side of the each books you will see "Edit" button. By clicking that button you can edit books as it needed. If you want you can delete book you can do in edit page. You will find "Delete" button on the buttom of the edit page.

## Project Structure

```
FE_BMS
|-- public
|-- src
| |--assets
| | |--customInputs
| | | |--bookInputs.js
| | | |--userSignupInputs.js
| | |--components
| | | |--auth
| | | | |--AuthRoute.jsx
| | | |--customInput
| | | | |--CustomInput.js
| | | |--forms
| | | | |--bookForm
| | | | | |--EditBookForm.jsx
| | | | | |--NewBookForm.jsx
| | | | |--index.js
| | | |--layouts
| | | | |--DefaultLayouts.jsx
| | | | |--Footer.jsx
| | | | |--Header.jsx
| | | | |--Sidebar.jsx
| | | | |--UserLayouts.jsx
| | | |--tables
| | | | |--BookTable.jsx
| | |--features
| | | |--user
| | | | |--userAction.js
| | | | |--userApi.js
| | | | |--userSlice.js
| | | |--book
| | | | |--bookAction.js
| | | | |--bookApi.js
| | | | |--bookSlice.js
| | |--hooks
| | | |--userForm.js
| | |--pages
| | | |--auth
| | | | |--ActivateUserPage.jsx
| | | | |--ForgotPasswordPage.jsx
| | | | |--SignInPage.jsx
| | | | |--SignUpPage.jsx
| | | |--books
| | | | |--BookLandingPage.jsx
| | | | |--BooksPage.jsx
| | | | |--BorrowHistoryPage.jsx
| | | | |--EditBookPage.jsx
| | | | |--NewBookPage.jsx
| | | |--dashboard
| | | | |--DashboardPage.jsx
| | | |--home
| | | | |--HomePage.jsx
| | | |--reviews
| | | | |--ReviewsPage.jsx
| | | |--user
| | | | |--ProfilePage.jsx
| | | | |--UserPage.jsx
| | | |--index.js
| | |--redux
| | | |--store.js
| | |--routes
| | | |--AppRoutes.jsx
| | |--services
| | | |--api.js
| | | |--authAPI.js
| | |--utils
| | | |--validatePassword.js
```

## Contributing

There are many different ways to contribute. If you are interested, check out our contributing guidlines to learn how you an get involved.

## License

This project is licensed under the MIT License. See the [LICENSE] (https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository) file for more details.

## Contact

If you have any questions or want to get in touch, feel free to reach out:

- Email: physmarika1@gmail.com
- Linkedin: https://github.com/budhathokidinesh

## Thank you Message

---

Thank you for visiting (MERN) React Fullstack Books Management System. I hope you find it usefull and engaging. You can build advance website with more functionalities. Your feedback ad contributions are highly appreciated.
