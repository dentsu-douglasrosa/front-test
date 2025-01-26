import React from "react";
import '../styles/sidebar.scss';
import { useSidebar } from "src/hooks/useSidebar";
import Button from "./Button";
import Filters from "./Filters";

const Sidebar = (): JSX.Element => {
  const { state, controller } = useSidebar();

  return (
    <div className="sidebar">
      {state.isOnPostDetails && <div className="sidebar--back-button">
        <Button 
          size='small'
          type='secondary'
          iconLeftClassName='fas fa-arrow-left'
          onClick={controller.onClickBack}
          label={state.labelBack}
        />
      </div>}
      {!state.isOnPostDetails && <Filters />}
    </div>
  );
};

export default Sidebar;