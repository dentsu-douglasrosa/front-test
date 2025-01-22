import "./styles/app.scss";
import React from "react";
import Header from "./components/Header";
import Posts from "./pages/Posts";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostDetails from "./pages/PostDetails";
import store from './redux/store';
import { Provider } from 'react-redux';
import Sidebar from "./components/Sidebar";
import { useMain } from "./hooks/useMain";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Main />
      </Router>
    </Provider>
  );
};


const Main: React.FC = () => {
  const { state, controller } = useMain()
  
  return (
    <div>
      {!state.isOnPostDetails && <div className="sub-header">
        <span className="main-label">{state.mainLabel}</span>
        <span className="main-sort-by">{state.sortByLabel}</span>
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
