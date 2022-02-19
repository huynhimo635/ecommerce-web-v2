import React from "react"
import PropTypes from "prop-types"

const PolicyCart = props => {
    return (
        <div className="policy-card">
            <div className="policy-card__icon">
                <i className={props.icon}></i>
            </div>
            <div className="policy-card__info">
                <div className="policy-card__info__name">{props.name}</div>
                <div className="policy-card__info__desc">{props.desc}</div>
            </div>
        </div>
    )
}

PolicyCart.propTypes = {
    icon: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default PolicyCart
