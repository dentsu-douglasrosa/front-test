import { t } from 'i18next';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/types/redux.type';
import { type UseButtonProps, type UseButtonReturn } from 'src/types/button.type';
import classNames from 'classnames';

export const useButton = (props: UseButtonProps): UseButtonReturn => {
    const { 
        size = "medium",
        type = "secondary"
    } = props
    const dispatch = useDispatch();
    
    const onClick = () => {
        props.onClick()
    };

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
                '--var-background-color': props.backgroundColor,
                '--var-color': props.color,
            } as React.CSSProperties,
            iconLeftClassName: classNames(props.iconLeftClassName, {
                [`left-icon`]: props.iconLeftClassName
            }),
            iconRightClassName: classNames(props.iconRightClassName, {
                [`right-icon`]: props.iconRightClassName
            }),
        },
        controller: {
            onClick,
        }
    }
}