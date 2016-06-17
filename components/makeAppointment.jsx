import React from 'react'

let makeAppointment = React.createClass({
  
  render() {
    return(
      <div>
        <button className="slds-button slds-button--icon-border-filled" aria-haspopup="true">
            Make an Appointment
            <span className="slds-assistive-text">Show More</span>
          </button>
          <div className="slds-dropdown slds-dropdown--left slds-dropdown--small">
            <div className="slds-dropdown__header">
              <span className="slds-text-heading--label">Day</span>
            </div>
            <ul className="dropdown__list" role="menu">
              <li className="slds-dropdown__item">
                <fieldset className="slds-form-element">
                  <div className="slds-form-element__control">
                    <div className="slds-radio--button-group">
                      <label className="slds-button slds-radio--button" for="monday">
                        <input name="radio" type="radio" id="monday" />
                        <span className="slds-radio--faux">Mon</span>
                      </label>
                      <label className="slds-button slds-radio--button" for="tuesday">
                        <input name="radio" type="radio" id="tuesday" />
                        <span className="slds-radio--faux">Tue</span>
                      </label>
                      <label className="slds-button slds-radio--button" for="wednesday">
                        <input name="radio" type="radio" id="wednesday" />
                        <span className="slds-radio--faux">Wed</span>
                      </label>
                      <label className="slds-button slds-radio--button" for="thursday">
                        <input name="radio" type="radio" id="thursday" />
                        <span className="slds-radio--faux">Thu</span>
                      </label>
                      <label className="slds-button slds-radio--button" for="friday">
                        <input name="radio" type="radio" id="friday" />
                        <span className="slds-radio--faux">Fri</span>
                      </label>
                    </div>
                  </div>
                </fieldset>
              </li>
            </ul>
            <div className="slds-dropdown__header">
              <span className="slds-text-heading--label">Time</span>
            </div>
            <ul className="dropdown__list " role="menu">
              <li className="slds-dropdown__item">
                <fieldset className="slds-form-element">
                  <div className="slds-form-element__control slds-text-align--center">
                    <ul className="slds-radio--button-group">
                      <li>
                      <label className="slds-button slds-radio--button" for="monday">
                        <input name="radio" type="radio" id="monday" />
                        <span className="slds-radio--faux">8am</span>
                      </label>
                      <label className="slds-button slds-radio--button" for="tuesday">
                        <input name="radio" type="radio" id="tuesday" />
                        <span className="slds-radio--faux">12pm</span>
                      </label>
                      <label className="slds-button slds-radio--button" for="wednesday">
                        <input name="radio" type="radio" id="wednesday" />
                        <span className="slds-radio--faux">4pm</span>
                      </label>
                      </li>
                      <li>
                      <label className="slds-button slds-radio--button" for="monday">
                        <input name="radio" type="radio" id="monday" />
                        <span className="slds-radio--faux">9am</span>
                      </label>
                      <label className="slds-button slds-radio--button" for="tuesday">
                        <input name="radio" type="radio" id="tuesday" />
                        <span className="slds-radio--faux">1pm</span>
                      </label>
                      <label className="slds-button slds-radio--button" for="wednesday">
                        <input name="radio" type="radio" id="wednesday" />
                        <span className="slds-radio--faux">5pm</span>
                      </label>
                      </li>
                      <li>
                      <label className="slds-button slds-radio--button" for="monday">
                        <input name="radio" type="radio" id="monday" />
                        <span className="slds-radio--faux">10am</span>
                      </label>
                      <label className="slds-button slds-radio--button" for="tuesday">
                        <input name="radio" type="radio" id="tuesday" />
                        <span className="slds-radio--faux">2pm</span>
                      </label>
                      </li>
                      <li>
                      <label className="slds-button slds-radio--button" for="monday">
                        <input name="radio" type="radio" id="monday" />
                        <span className="slds-radio--faux">11am</span>
                      </label>
                      <label className="slds-button slds-radio--button" for="tuesday">
                        <input name="radio" type="radio" id="tuesday" />
                        <span className="slds-radio--faux">3pm</span>
                      </label>
                      </li> 
                    </ul>
                  </div>
                </fieldset>
              </li>
              <li className="slds-dropdown__item">
                <div className="slds-button-group" role="group">
                  <button className="slds-button slds-button--neutral">Close</button>
                  <button className="slds-button slds-button--neutral">Save</button>
                </div>
              </li>
            </ul>
          </div>
      </div>
    );}
});

export default makeAppointment;