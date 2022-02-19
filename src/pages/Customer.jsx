import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { set } from "../redux/loginSlice"

import Button from "../components/Button"
import Section, { SectionTitle, SectionBody } from "../components/Section"
import { getMe } from "../redux/user/getMeSlice"

const Customer = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const myProfile = useSelector(state => state.getMe.data)

    const fetchData = async () => {
        await dispatch(getMe(localStorage.getItem("email")))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="profile">
            <Section>
                <SectionTitle>Profile</SectionTitle>
                <SectionBody>
                    <h1>Welcome {myProfile.name} to BTW!!</h1>
                </SectionBody>
            </Section>
            <div className="profile__logout">
                <Button
                    onclick={() => {
                        localStorage.setItem("tokenCustomer", "")
                        localStorage.setItem("email", "")
                        history.push("/")
                    }}
                >
                    Logout
                </Button>
            </div>
        </div>
    )
}

export default Customer
