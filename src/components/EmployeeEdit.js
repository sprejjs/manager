import React, {Component} from 'react';
import {Card, CardSection, Button, Confirm} from "./common";
import EmployeeForm from "./EmployeeForm";
import {connect} from "react-redux";
import {employeeDelete, employeeSave, employeeUpdate} from "../actions";
import _ from 'lodash';
import * as Communications from "react-native-communications";

class EmployeeEdit extends Component {
    state = {showModal: false};

    onFireAcceptPress() {
        const {uid} = this.props.employee;

        this.props.employeeDelete({uid})
    }

    onFireDeclinePress() {
        this.setState({showModal: false})
    }

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        });
    }

    onButtonPress() {
        const {name, phone, shift} = this.props;

        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid})
    }

    onTextPress() {
        const {phone, shift} = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onFirePress() {
        this.setState({showModal: true})
    }

    render() {
        return(
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onFirePress.bind(this)}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onFireAcceptPress.bind(this)}
                    onDecline={this.onFireDeclinePress.bind(this)}
                    >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);