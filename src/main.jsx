import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Link, Outlet, Route, Routes } from "react-router";
import { useState, React, useContext } from "react";
import './index.css'
import App from './App.jsx'
import { DataProvider } from './DataProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="post/:id" element={<PostPage />} />
      </Routes>
      <App />
    </DataProvider>
  </StrictMode>
)

export default App;
