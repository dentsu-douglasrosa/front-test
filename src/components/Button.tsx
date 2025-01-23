import React from 'react';
import '../styles/button.scss';
import { useButton } from "src/hooks/useButton";
import { ButtonProps } from 'src/types/button.type';

const Button = (props: ButtonProps): JSX.Element => {
  const { state, controller } = useButton(props)

  return (
      <div className="button-container">
        <button 
          className={state.buttonClassNames} 
          style={state.styles} 
          onClick={undefined}
        >
          {state.iconLeftClassName && <i className={state.iconLeftClassName}></i>}
          {state.label && <span onClick={controller.onClick} >{state.label}</span>}
          {state.iconRightClassName && <i onClick={controller.onRightIconClick} className={state.iconRightClassName}></i>}
        </button>
      </div>
  );
}

export default Button;
