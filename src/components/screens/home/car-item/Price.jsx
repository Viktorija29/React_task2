import PropTypes from "prop-types";
// import React from 'react'

const Price = ({price}) => {
    // console.log('Price render')
    return <p>{new Intl.NumberFormat('en-US',
        {style: 'currency',
            currency: 'USD',
        }).format(price)}</p>
}

Price.propTypes = {
    price: PropTypes.any
};

export default Price
// export default React.memo(Price)