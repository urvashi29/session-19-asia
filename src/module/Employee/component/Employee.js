import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { v4 as uuid } from 'uuid';
import { onAddData, openModal } from '../../action';
import EmployeeDisplay from './EmployeeDisplay';
import { connect } from 'react-redux';
import Modal from './ModalEmployee';

class Employee extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            formIsValid: false,
            emailError: "",
            passwordError: ""
        };
    }

    handleChange = (e) => {
        if (e.target.id == 'email') {
            this.validateEmail(e.target.value);
        }
        if (e.target.id == 'password') {
            this.validatePassword(e.target.value);
        }

    }

    validateEmail = (email) => {
        let emailError = this.state.emailError;
        let formIsValid = this.state.formIsValid;

        if (String(email).trim() === "") {
            emailError = "*Please enter your email-ID.";
            formIsValid = false;
        } else {
            var pattern = new RegExp(
                /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
            );
            if (pattern.test(email)) {
                formIsValid = true;
                emailError = "";
            } else {
                emailError = "*Please enter valid email-ID.";
                formIsValid = false;
            }
        }

        this.setState({
            email,
            emailError,
            formIsValid
        });
        return formIsValid;
    };

    validatePassword = (password) => {
        let formIsValid = this.state.formIsValid;
        //add regex
        this.setState({
            password: password,
            formIsValid: formIsValid
        });
        return formIsValid;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateEmail(this.state.email) && this.validatePassword(this.state.password)) {

            console.log(uuid());
            const unique_id = uuid().slice(0, 8);//'fygdyegu-fiufififo'


            //modal 
            this.props.onOpenModal(true);
            this.props.onAddItem({ ...this.state, id: unique_id });


            let email = "";
            let password = "";
            let emailError = "";
            let passwordError = "";

            this.setState({
                email: email,
                password: password,
                emailError: emailError,
                passwordError: passwordError
            });
        } else {
            let passwordError = this.state.passwordError;
            let password = this.state.password;
            if (String(password).trim() === "") {
                passwordError = "*Please enter password.";
            } else {
                passwordError = "Enter Correct Credentials";
            }
            this.setState({
                passwordError: passwordError,
                password: password
            });
        }
    }

    render() {
        const { employee, modal } = this.props;//destructuring

        return (
            <>
                <Container component="main" maxWidth="xs" style={{ marginTop: "20px" }}>

                    <TextField
                        id="email"
                        label="Email Address"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Enter Email"
                    />
                    <p style={{ color: "red" }}>{this.state.emailError}</p>

                    <TextField
                        name="password"
                        label="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="Enter Password"
                        id="password"
                    />
                    <p style={{ color: "red" }}>{this.state.passwordError}</p>

                    {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    /> */}

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={this.handleSubmit}
                    >
                        Submit
                    </Button>

                    {/* <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid> */}

                    {employee.length ? (<EmployeeDisplay employeeData={employee} />) : ([])}

                    <Modal modal={modal} />

                </Container>

            </>

        );
    }
}


const mapStateToProps = state => {
    return {
        employee: state.employee,
        modal: state.modal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddItem: (item) => dispatch(onAddData(item)),
        onOpenModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee);