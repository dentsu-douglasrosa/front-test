import "./styles/app.scss";
import React from "react";
import Header from "./components/Header";
import Posts from "./pages/Posts";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostDetails from "./pages/PostDetails";
import store from './redux/store';
import { Provider } from 'react-redux';
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main>
          <aside className="main-sidebar">
            <Sidebar />
          </aside>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Posts />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:id" element={<PostDetails />} />
            </Routes>
          </div>
          <aside className="main-sidebar" />
        </main>
      </Router>
    </Provider>
  );
};

export default App;
