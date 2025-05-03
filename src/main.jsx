import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router";
import { useState, React, useContext } from "react";
import { DataProvider } from './DataProvider.jsx'
import HomePage from './HomePage.jsx';
import PostPage from './PostPage.jsx';
import CreatePostPage from './CreatePostPage.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="post/:id" element={<PostPage />} />
          <Route path="createPost" element={<CreatePostPage />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  </StrictMode>
)
