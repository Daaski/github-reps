'use client';

import React, { ChangeEventHandler } from 'react';
import clsx from 'clsx';

import {IInputProps} from "UI/Input/types.ts";

import scss from './Input.module.scss';


export const Input: React.FC<IInputProps> = ({
    placeholder,
    autoFocus,
    value,
    name,
    handleError,
    onChange,
    onKeyDown,
    onBlur,
    autoComplete,
    disabled,
    tabIndex,
    label,
    needErrorLabel = true,
    required = false,
    type,
    size = 'default',
    bgColor,
}) => {


    const fieldClass = clsx({
        [scss.field_without_error_label]: !needErrorLabel,
        [scss.field_without_label]: !label,
        [scss.field_without_label_and_error]: !label && !needErrorLabel,
        [scss.field_with_label]: size !== 'big' && label && needErrorLabel,
        [scss.field_with_label_big]: size === 'big' && label && needErrorLabel,
        [scss.field_search]: name === 'search',
        [scss.field_big]: size === 'big',
    });
    const labelErrorClass = clsx({
        [scss.input_error_label]: handleError,
    });

    const labelClass = clsx({
        [scss.input_label]: label,
    });

    const inputClass = clsx({
        [scss.input]: true,
        [scss.input_big]: size === 'big',
        [scss.input_error]: handleError,
        [scss.input_search]: name === 'search',
    });

    return (
        <div className={fieldClass}>
            {label && (
                <label htmlFor={name} className={labelClass}>
                    {label}
                    {required && (
                        <span className={scss.required_indicator}>*</span>
                    )}
                </label>
            )}
            <div className={scss.input_svg_wrapper}>
                <input
                    style={{ backgroundColor: bgColor }}
                    onKeyDown={onKeyDown}
                    tabIndex={tabIndex}
                    autoComplete={autoComplete as string}
                    className={inputClass}
                    type={type}
                    onChange={onChange as ChangeEventHandler<HTMLInputElement>}
                    value={value}
                    autoFocus={autoFocus}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    onBlur={onBlur}
                    disabled={disabled}
                />
            </div>
            {handleError && (
                <label className={labelErrorClass}>{handleError}</label>
            )}
        </div>
    );
};
