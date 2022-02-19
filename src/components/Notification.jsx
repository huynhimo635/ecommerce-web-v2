import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import { remove } from "../redux/notificationSlice"

const Notification = () => {
    const dispatch = useDispatch()
    const notification = useSelector(state => state.notification.value)
    const ref = useRef(null)

    useEffect(() => {
        if (notification) {
            ref.current.classList.add("active")

            setTimeout(() => {
                ref.current.classList.remove("active")
                dispatch(remove())
            }, 2000)
        }
    }, [notification])

    return (
        <div className="notification" ref={ref}>
            <div className="notification__icon">
                <i class="bx bx-check-double" style={{ color: "#28ec41" }}></i>
            </div>
            <div className="notification__content">
                <span>Success</span>
            </div>
        </div>
    )
}

export default Notification
