import PropTypes from "prop-types";

const ErrorMessage = ({error}) => {
    if(!error) return null
    return error && (<p style={{color: 'red'}}>Name is required</p>)
}

ErrorMessage.propTypes = {
    error: PropTypes.any
};
export default ErrorMessage