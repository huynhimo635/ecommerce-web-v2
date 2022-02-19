import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import { set } from "../redux/themeSlice"

const Theme = () => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme.value)

    const ref = useRef(null)

    const toggleTheme = e => {
        dispatch(set())
    }

    useEffect(() => {
        if (theme) ref.current.checked = true
        else ref.current.checked = false
    }, [])

    return (
        <div className="theme__container">
            <label
                id="switch"
                className="switch"
                onChange={e => toggleTheme(e)}
            >
                <input type="checkbox" id="slider" ref={ref} />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Theme
