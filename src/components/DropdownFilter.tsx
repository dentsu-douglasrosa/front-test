import React from "react";
import '../styles/filters.scss';
import { DropdownFilterProps } from "src/types/filters.type";
import { useFilter } from "src/hooks/useFilter";
import Button from "./Button";
import { COLORS } from "src/constants/colors";

const DropdownFilter = (props : DropdownFilterProps): JSX.Element => {
  const { state, controller } = useFilter(props)

  return (
    <div className="filters--group">
      <Button
        type="secondary"
        size="small" 
        iconRightClassName={state.iconRightClassName} 
        label={state.title} 
        onClick={controller.onToggleDropdown}
        onRightIconClick={controller.onRemoveItems ?? controller.onToggleDropdown}
        backgroundColor={COLORS['$neutrals-lightest']}
        hoverBackgroundColor={COLORS['$secondary-medium-5percent']}
      />
    </div>
  )
}

export default DropdownFilter;