import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
    debugger
    return {
        errors: Object.values(state.errors),
        loggedIn: state.session.isAuthenticated
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: user => dispatch(login(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);