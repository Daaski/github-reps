import React, {useState} from "react";
import {CopyComponentProps} from "pages/Home/components/Main/components/ActionsWrapper/types";

import scss from './ActionsWrapper.module.scss'

export const CopyComponent: React.FC<CopyComponentProps> = ({copyValue}) => {
    const [success, setSuccess] = useState(false)
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(copyValue)
            setSuccess(true)
            setTimeout(() => setSuccess(false), 2000)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <button onClick={() => handleCopy()}
                className={scss.button_wrapper}>{success ? 'Сopy!' : 'Скопировать!'} </button>
    )
}