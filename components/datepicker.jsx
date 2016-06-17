import React from 'react'
import { connect } from 'react-redux'
import { addAppointment } from '../actions/appointments'
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let DatePicker = React.createClass({
    getInitialState: function () {
        return {
            toggle: 0,
            date: new Date(),
            calander: this.initCalander()
        };
    },
    toggle: function () {
        this.setState({ toggle: ~this.state.toggle });
    },
    daysInMonth: function () {
        return new Date(this.state.date.getFullYear(), this.state.date.getMonth()+1, 0).getDate();
    },
    monthStart: function (month, year) {
        return new Date(year, month, 0).getDay()+1;
    },
    setDate: function (date) {
        this.state.date.setDate(date);
        this.setState({ date: this.state.date });
    },
    getDate: function () {
        return this.state.date.getDate()  + " " + (months[this.state.date.getMonth()]) + " " + this.state.date.getFullYear();
    },
    updateCalander: function () {
        var date=this.state.date;
        date=new Date(date.getFullYear(), date.getMonth()+1, 0);
        var numdays=date.getDate();
        var days = [];
        for ( var i=1; i <= numdays; i++) {
            days.push(i);
        }
        var calander = {
            week11:[],
            week12:[],
            week13:[],
            week14:[],
            week15:[]
        };
        for ( var j = 15 ; j > 10 ; j-- ) {
            for ( var i = 0; i < 7; i++) {
               if(j == 15) {
                    if ( i > date.getDay() ) {
                        calander.week15.push(0);
                    } else {
                        calander.week15[date.getDay()-i]=days.pop();
                    }
               } else if (j == 11) {
                   if (days.length) {
                        calander.week11[6-i]=days.pop();
                   } else {
                        calander.week11[6-i]=0;
                   }
               } else {
                    calander['week'+j][6-i]=days.pop();
               }
            }
        }
        this.setState({ calander: calander });
    },
    initCalander: function () {
        var date=new Date;
        date=new Date(date.getFullYear(), date.getMonth()+1, 0);
        var numdays=date.getDate();
        var days = [];
        for ( var i=1; i <= numdays; i++) {
            days.push(i);
        }
        var calander = {
            week11:[],
            week12:[],
            week13:[],
            week14:[],
            week15:[]
        };
        for ( var j = 15 ; j > 10 ; j-- ) {
            for ( var i = 0; i < 7; i++) {
               if(j == 15) {
                    if ( i > date.getDay() ) {
                        calander.week15.push(0);
                    } else {
                        calander.week15[date.getDay()-i]=days.pop();
                    }
               } else if (j == 11) {
                   if (days.length) {
                        calander.week11[6-i]=days.pop();
                   } else {
                        calander.week11[6-i]=0;
                   }
               } else {
                    calander['week'+j][6-i]=days.pop();
               }
            }
        }
        return calander;
    },
    render() {
        return (
            <div>
                <a className="slds-button slds-button--neutral" onClick={e => {this.toggle();}}>Make Appointment</a>
                <div className={this.state.toggle ? 'slds-datepicker slds-dropdown slds-dropdown--up' : 'slds-datepicker slds-dropdown slds-dropdown--up slds-hidden'} style={{ maxWidth: 'none' }} aria-hidden={false}>
                    <div className="slds-datepicker__filter slds-grid">
                        <div className="slds-datepicker__filter--month slds-grid slds-grid--align-spread slds-grow">
                        <div className="slds-align-middle">
                            <button className="slds-button slds-button--icon-container" onClick={e => {
                                this.state.date.setMonth(this.state.date.getMonth()-1);
                                this.setState({ date: this.state.date });
                                this.updateCalander();
                            }}>
                                <span>Previous</span>
                            </button>
                        </div>
                        <h2 id="month" className="slds-align-middle slds-badge slds-theme--info" aria-live="assertive" aria-atomic={true}>{months[this.state.date.getMonth()]}</h2>
                        <div className="slds-align-middle">
                            <button className="slds-button slds-button--icon-container" onClick={e => {
                                this.state.date.setMonth(this.state.date.getMonth()+1);
                                this.setState({ date: this.state.date });
                                this.updateCalander();
                            }}>
                                <span>Next</span>
                            </button>
                        </div>
                        </div>
                        <div className="slds-shrink-none">
                        <div className="slds-select_container">
                            <select id="select-01" className="slds-select">
                                <option>{this.state.date.getFullYear()}</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <table className="datepicker__month" role="grid" aria-labelledby="month">
                        <thead>
                        <tr id="weekdays">
                            <th id="Sunday" scope="col">
                            <abbr title="Sunday">Sun</abbr>
                            </th>
                            <th id="Monday" scope="col">
                            <abbr title="Monday">Mon</abbr>
                            </th>
                            <th id="Tuesday" scope="col">
                            <abbr title="Tuesday">Tue</abbr>
                            </th>
                            <th id="Wednesday" scope="col">
                            <abbr title="Wednesday">Wed</abbr>
                            </th>
                            <th id="Thursday" scope="col">
                            <abbr title="Thursday">Thu</abbr>
                            </th>
                            <th id="Friday" scope="col">
                            <abbr title="Friday">Fri</abbr>
                            </th>
                            <th id="Saturday" scope="col">
                            <abbr title="Saturday">Sat</abbr>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr id="week11">
                            {this.state.calander.week11.map((date, index) =>
                                <td className={date == this.state.date.getDate() ? "slds-is-selected" : null} key={index} headers="Sunday week15" role="gridcell" aria-selected={false}>
                                    <span onClick={e => {this.setDate(date);}} className={ date ? "slds-day" : null}>{date ? date : null}</span>
                                </td>
                            ) }
                        </tr>
                        <tr id="week12">
                            {this.state.calander.week12.map((date, index) =>
                                <td className={date == this.state.date.getDate() ? "slds-is-selected" : null} key={index} headers="Sunday week15" role="gridcell" aria-selected={false}>
                                    <span onClick={e => {this.setDate(date);}} className={ date ? "slds-day" : null}>{date ? date : null}</span>
                                </td>
                            ) }
                        </tr>
                        <tr id="week13">
                            {this.state.calander.week13.map((date, index) =>
                                <td  className={date == this.state.date.getDate() ? "slds-is-selected" : null} key={index} headers="Sunday week15" role="gridcell" aria-selected={false}>
                                    <span onClick={e => {this.setDate(date);}} className={ date ? "slds-day" : null}>{date ? date : null}</span>
                                </td>
                            ) }
                        </tr>
                        <tr id="week14">
                            {this.state.calander.week14.map((date, index) =>
                                <td className={date == this.state.date.getDate() ? "slds-is-selected" : null} key={index} headers="Sunday week15" role="gridcell" aria-selected={false}>
                                    <span onClick={e => {this.setDate(date);}} className={ date ? "slds-day" : null}>{date ? date : null}</span>
                                </td>
                            ) }
                        </tr>
                        <tr id="week15">
                            {this.state.calander.week15.map((date, index) =>
                                <td className={date == this.state.date.getDate() ? "slds-is-selected" : null} key={index} headers="Sunday week15" role="gridcell" aria-selected={false}>
                                    <span onClick={e => {this.setDate(date);}} className={ date ? "slds-day" : null}>{date ? date : null}</span>
                                </td>
                            ) }
                        </tr>
                        <tr>
                            <td colSpan="7" role="gridcell"><a onClick={e => {
                                    this.props.dispatch(addAppointment(this.props.name,this.props.phone,this.getDate()));
                                    this.toggle();
                                }} className="slds-show--inline-block slds-p-bottom--x-small">Book</a></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
            </div>         
        );
    }
});

const mapDispatchToProps = (dispatch) => {
  return {
    bookAppoint: (name, phone, time) => {
      dispatch(addAppointment(name, phone, time));
    }
  }
}

export default connect(mapDispatchToProps)(DatePicker)