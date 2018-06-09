import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import uuid from 'uuid';

export default class HelpForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.helpItem ? props.helpItem.id : uuid(),
            title: props.helpItem ? props.helpItem.title : '',
            description: props.helpItem ? props.helpItem.description : '',
            fromDate: props.helpItem ? moment(props.helpItem.fromDate) : moment(),
            fromDateFocused: true,
            toDate: props.helpItem ? moment(props.helpItem.toDate) : moment(),
            toDateFocused: true,
            phone: props.helpItem ? props.helpItem.phone : '',
            email: props.helpItem ? props.helpItem.email : '', 
            isPageInvalid: '',
            titleError: '',
            descriptionError: '',
            phoneError: '',
            emailError: '',
            dateRangeError: ''
        }
    }
    
    setTitle = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
        if(!this.state.title || this.state.title.length === 0){
            this.setState(() => ({
                titleError: 'Title field can\'t be empty',
            }));
        }
        else{
            this.setState(() => ({
                titleError: '',
            }));
        }
    }
    setDescription = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
        if(!this.state.description){
            this.setState(() => ({
                descriptionError: 'Description field can\'t be empty',
            }));
        }
        else{
            this.setState(() => ({
                descriptionError: '',
            }));
        }
    }
    setEmail = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
        if(this.state.email && !this.state.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
        {
            this.setState(() => ({
                emailError: 'Email id is not valid',
            }));
        }
        else{
            this.setState(() => ({
                emailError: '',
            }));
        }
    }
    setPhoneNumber = (e) => {
        const phone = e.target.value;
        this.setState(() => ({ phone }));
        if(this.state.phone && !this.state.phone.match(/^[6-9]\d{9}$/))
        {
            this.setState(() => ({
                phoneError: 'Phone number must start with 6/7/9 and should contain 10 digits',
            }));
        }
        else
        {
            this.setState(() => ({
                phoneError: '',
            }));
        }
    }
    setFromDate = (fromDate) => {
        if(fromDate){
            this.setState(() => ({ fromDate }));
        }
    }
    setFromDateFocus = ({ focused }) => {
        this.setState(() => ({ fromDateFocused: focused }));
    }
    setToDate = (toDate) => {
        if(toDate){
            this.setState(() => ({ toDate }));
        }
        if(this.state.fromDate > this.state.toDate){
            this.setState(() => ({
                dateRangeError: "To Date should be greater than From Date",
            }));
        }
        else{
            this.setState(() => ({
                dateRangeError: '',
            }));
        }
    }
    setToDateFocus = ({ focused }) => {
        this.setState(() => ({ toDateFocused: focused }));
    }
    onSubmit = (e) => {
        e.preventDefault();

        if(this.state.titleError || this.state.descriptionError || 
        this.state.emailError || this.state.phoneError || 
        this.state.dateRangeError)
        {
            this.setState(() => ({
                isPageInvalid: true
            }));
        }
        else
        {
            this.setState(() => ({
                isPageInvalid: false
            }));
        }
        
        if(!this.state.isPageInvalid && this.state.isPageInvalid === false)
        {
            this.props.onSubmit({
                id: this.state.id,
                title: this.state.title,
                description: this.state.description,
                fromDate: this.state.fromDate.valueOf(),
                toDate: this.state.toDate.valueOf(),
                phone: this.state.phone,
                email: this.state.email,
        });
        }
    }
    render(){
        return(
            <div>
            <form onSubmit={this.onSubmit}>
                Help Form to Add/Edit Help item <br />
                <div>
                    Title: 
                    <input type="text" value={this.state.title} onChange={this.setTitle}/> 
                    {this.state.titleError && <p>{this.state.titleError}</p>}
                </div> <br />
                <div>
                    Description: 
                    <textarea value={this.state.description} onChange={this.setDescription}></textarea> 
                    {this.state.titleError && <p>{this.state.titleError}</p>}
                </div> <br />
                <div>
                    Available From: 
                    <SingleDatePicker
                        date={this.state.fromDate}
                        onDateChange={this.setFromDate}
                        focused={this.state.fromDateFocused}
                        onFocusChange={this.setFromDateFocus}
                        numberOfMonths={1}
                    />
                </div> <br />
                <div>
                    Available Upto:
                    <SingleDatePicker
                        date={this.state.toDate}
                        onDateChange={this.setToDate}
                        focused={this.state.toDateFocused}
                        onFocusChange={this.setToDateFocus}
                        numberOfMonths={1}
                    />
                </div> <br />
                <div>
                    Email: <input type="text" value={this.state.email} onChange={this.setEmail}/>
                </div> <br />
                <div>
                    Phone: <input type="text" value={this.state.phone} onChange={this.setPhoneNumber}/> <br />
                </div> <br />
                <button>Save</button>
            </form>
            </div>
        );
    }
}