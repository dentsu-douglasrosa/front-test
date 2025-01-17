import React from "react";
import Filters from "./components/Filters";
import Header from "./components/Header";
import Posts from "./pages/Posts";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/app.scss"
import PostDetails from "./pages/PostDetails";
import store from './redux/store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <main className='app-container'>
          <Filters />
          <div style={{ flex: 1 }}>
          <Router>
            <Routes>
              <Route path="/" element={<Posts />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:id" element={<PostDetails />} />
            </Routes>
          </Router>
          </div>
      </main>
    </Provider>
  );
};

export default App;
