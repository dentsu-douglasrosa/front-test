import { t } from 'i18next';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/types/redux.type';
import { type UseButtonProps, type UseButtonReturn } from 'src/types/button.type';
import classNames from 'classnames';
import { rem } from 'src/utils/units'

export const useButton = (props: UseButtonProps): UseButtonReturn => {
    const { 
        size = "medium",
        type = "secondary"
    } = props
    const dispatch = useDispatch();
    
    return {
        state: {
            label: props.label,
            buttonClassNames: classNames("button", {
                "button--small": size === "small",
                "button--large": size === "large",
                "button--medium": size === "medium",
                "button--primary": type === "primary",
                "button--secondary": type === "secondary",
                "button--tertiary": type === "tertiary",
            }),
            styles: { 
                '--var-hover-background-color': props.hoverBackgroundColor,
                '--var-background-color': props.backgroundColor,
                '--var-color': props.color,
                '--var-width': props.width,
            } as React.CSSProperties,
            iconLeftClassName: classNames(props.iconLeftClassName, {
                [`left-icon`]: props.iconLeftClassName
            }),
            iconRightClassName: classNames(props.iconRightClassName, {
                [`right-icon`]: props.iconRightClassName
            }),
        },
        controller: {
            onClick: props.onClick,
        }
    }
}