import React from "react";
import '../styles/filters.scss';
import { DropdownFilterProps } from "src/types/filters.type";
import { useFilter } from "src/hooks/useFilter";
import Button from "./Button";

const DropdownFilter = (props : DropdownFilterProps): JSX.Element => {
  const { state, controller } = useFilter(props)

  return (
    <div className="filters--group">
      <Button
        iconRightClassName={state.iconRightClassName} 
        size="small" 
        label={state.title} 
        onClick={controller.onToggleDropdown}
      />
    </div>
  )
}

export default DropdownFilter;