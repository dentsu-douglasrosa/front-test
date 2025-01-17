import React from "react";
import Filters from "./components/Filters";
import Header from "./components/Header";
import Posts from "./pages/Posts";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/app.scss"
import PostDetails from "./pages/PostDetails";

const App: React.FC = () => {
  const handleFilterChange = (type: "category" | "author", value: string) => {
    console.log(`Filtering by ${type}: ${value}`);
  };

  

  return (
    <div>
        <Header />
        <main className='app-container'>
            <Filters onFilterChange={handleFilterChange} />
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
    </div>
  );
};

export default App;
