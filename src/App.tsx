import "./styles/app.scss";
import React from "react";
import Header from "./components/Header";
import Posts from "./pages/Posts";
import { Routes, Route } from 'react-router-dom';
import PostDetails from "./pages/PostDetails";
import Sidebar from "./components/Sidebar";
import { useMain } from "./hooks/useMain";
import Providers from "./providers";

const App: React.FC = () => {
  return (
    <Providers>
      <Header />
      <Main />
    </Providers>
  );
};


const Main: React.FC = () => {
  const { state, controller } = useMain()
  
  return (
    <div>
      {!state.isOnPostDetails && <div className="sub-header">
        <span className="main-label">{state.mainLabel}</span>
        <div className="main-sort">
          <span className="main-sort-by-label">{state.sortByLabel}</span>
          <span
            onClick={controller.onClickSorting}
            className="main-sort-by-type"
          >
            {state.sortByType}
            <i className="fas fa-arrow-right-arrow-left"></i>
          </span>
        </div>
      </div>}
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
        {state.isOnPostDetails && <aside className="main-sidebar-right" />}
      </main>
    </div>
  );
};

export default App;
