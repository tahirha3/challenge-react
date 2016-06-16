import React from 'react';
import { connect } from 'react-redux'
import { deleteAppointment } from '../actions/appointments'
const Appointments = ({appointments, dispatch}) => (
  <div>
      <div className="slds-card">
        <div className="slds-card__header slds-grid">
          <div className="slds-media slds-media--center slds-has-flexi-truncate">
            <div className="slds-media__body slds-truncate">
              <a href="javascript:void(0);" className="slds-text-link--reset">
                <span className="slds-text-heading--small">Appointments ({appointments.size})</span>
              </a>
            </div>
          </div>
        </div>
        <div className="slds-card__body">
          <table className="slds-table slds-table--bordered slds-no-row-hover slds-table--cell-buffer">
            <thead>
              <tr className="slds-text-heading--label">
                <th className="slds-text-align--center" scope="col">Time</th>
                <th className="slds-text-align--center" scope="col">Name</th>
                <th className="slds-text-align--center" scope="col">Phone</th>
                <th className="slds-text-align--center" scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => 
                <tr className="slds-hint-parent" key={index}>
                  <td className="slds-text-align--center">{appointment.time}</td> 
                  <td className="slds-text-align--center">{appointment.name}</td> 
                  <td className="slds-text-align--center">{appointment.phone}</td>
                  <td>
                    <div className="slds-button-group" role="group">
                      <a className="slds-button slds-button--destructive" onClick={e => {
                          dispatch(deleteAppointment(index))
                        }}>Delete</a>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
)

const mapStateToProps = state => ({
    appointments: state.appointments
});

export default connect(mapStateToProps)(Appointments)