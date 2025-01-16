import React from "react";
import Filters from "./components/Filters";
import Header from "./components/Header";
import Posts from "./pages/Posts";
import "./styles/app.scss"

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
                <Posts />
            </div>
        </main>
    </div>
  );
};

export default App;
