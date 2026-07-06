import React from "react";
import { Routes, Route } from 'react-router-dom';

import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import ProtectedRoute from '../components/ProtectedRoute';
import AddEmployee from '../pages/AddEmployee';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import Employees from '../pages/Employees';
import EditEmployee from '../pages/EditEmployee';
import EmployeeDetails from '../pages/EmployeeDetails';
import DashboardLayout from "../layouts/DashboardLayout";

function AppRoutes(){
    return(
        <>
        <Routes >
      
      <Route
        path='/login'
        element={<Login />}
      />

      <Route 
        path='/register'
        element={<Register />}
      />
        <Route element={<DashboardLayout />} >

      <Route 
        path='/dashboard'
        element={
            <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
        /> 

      <Route
        path='/add-employee'
        element={<AddEmployee />}
      /> 

      <Route
        path='/edit-profile'
        element={<EditProfile />}
      />

      <Route
        path='/profile'
        element={<Profile />}
      />

      <Route
        path='/employees'
        element={<Employees />}
        />

      <Route
        path='/employee/:id'
        element={<EmployeeDetails />}
      />

      <Route
        path="/edit-employee/:id"
        element={
            <ProtectedRoute>
            <EditEmployee />
          </ProtectedRoute>
        }   
      />
      </Route>

    </Routes>
        </>
    )
}

export default AppRoutes;