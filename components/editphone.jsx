import React from 'react'

let EditPhone = React.createClass({
    getInitialState: function () {
        return {
            toggle: this.props.edit,
            phone: this.props.phone
        };
    },
    toggle: function () {
        this.setState({ toggle: ~this.state.toggle });
    },
    changePhone: function (event) {
        this.setState({ phone: event.target.value });
    },
    render() {
        return (
            <td className="slds-text-align--center">
                {(this.state.toggle
                    ? <p><input value={this.state.phone} onChange={this.changePhone} id="phone" pattern="\d{3}[\-]\d{3}[\-]\d{4}" title="123-456-7890" type="text"/> <a className="slds-button" onClick={e => {
                        this.toggle();
                    } }>Save</a></p>
                    : <p>{this.state.phone} <a className="slds-button" onClick={e => {
                        this.toggle();
                    } }>Edit</a></p>
                ) }
            </td>
        );
    }
});
export default EditPhone;