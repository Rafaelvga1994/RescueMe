import React from "react";
import { Routes, Route } from "react-router-dom"
import { LoginPage } from "./components/pages/Login";
import { RegisterPage } from "./components/pages/Register";
import { Dashboard } from "./components/pages/Dashboard";

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<LoginPage/>} />
			<Route path='/register' element={<RegisterPage/>} />
			<Route path='/dashboard' element={<Dashboard/>} />
		</Routes>
	);
};

export default Router;