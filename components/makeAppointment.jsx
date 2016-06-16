import React from 'react'

let makeAppointment = React.createClass({

  render() {
    return(
      <div>
        <a className="slds-button slds-button--neutral" onClick={e => {
              document.getElementById("Apointmodal").classList.remove('slds-hide');
              document.getElementById("Apointbackground").classList.remove('slds-backdrop--close');
              document.getElementById("Apointbackground").classList.add('slds-backdrop--open');
          }}>Make Appointment</a>
          <div id="Apointmodal" className="slds-modal slds-fade-in-open slds-hide" role="dialog">
            <div className="slds-modal__container">
              <div className="slds-modal__header">
                <h2 className="slds-text-heading--medium">Make an Appointment</h2>
              </div>
              <div className="slds-modal__content slds-p-around--medium">
                <div>
                  yay
                </div>
              </div>
              <div className="slds-modal__footer">
                <button className="slds-button slds-button--neutral" onClick={e => {
                    document.getElementById("Apointmodal").classList.add('slds-hide');
                    document.getElementById("Apointbackground").classList.remove('slds-backdrop--open');
                    document.getElementById("Apointbackground").classList.add('slds-backdrop--close');
                }}>Close</button>
              </div>
            </div>
          </div>
          <div id="Apointbackground" className="slds-backdrop slds-backdrop--close"></div>
      </div>
    );}
});

export default makeAppointment;