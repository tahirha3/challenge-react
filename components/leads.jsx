import React from 'react';
import { connect } from 'react-redux'
import { addLead, deleteLead } from '../actions/leads'
import { addCustomer } from '../actions/customers'
import Logs from './logs'

const Leads = ({leads, dispatch}) => (
  <div>
      <div className="slds-card">
        <div className="slds-card__header slds-grid">
          <div className="slds-media slds-media--center slds-has-flexi-truncate">
            <div className="slds-media__body slds-truncate">
              <a href="javascript:void(0);" className="slds-text-link--reset">
                <span className="slds-text-heading--small">Leads ({leads.size})</span>
              </a>
            </div>
          </div>
        </div>
        <div className="slds-card__body">
        <form onSubmit={e => {
                      e.preventDefault();
                      if (e.target.name.value != '' && e.target.phone.value != '') {
                        dispatch(addLead(e.target.name.value, e.target.phone.value))
                        e.target.name.value = e.target.phone.value = ''
                      }
                    }}>
          <table className="slds-table slds-table--bordered slds-no-row-hover slds-table--cell-buffer">
            <thead>
              <tr className="slds-text-heading--label">
                <th className="slds-text-align--center" scope="col">Name</th>
                <th className="slds-text-align--center" scope="col">Phone</th>
                <th className="slds-text-align--center" scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="slds-hint-parent slds-is-selected">
              <td className="slds-text-align--center"><input id="name" type="text" /></td>
              <td className="slds-text-align--center"><input id="phone" pattern="\d{3}[\-]\d{3}[\-]\d{4}" title="123-456-7890" type="text"/></td>
              <td className="slds-text-align--center"><button className="slds-button slds-button--brand slds-col--bump-left" type="submit">New</button></td>
              </tr>
              {leads.map((lead, index) => 
                <tr className="slds-hint-parent" key={index}>
                  <td className="slds-text-align--center">{lead.name}</td> 
                  <td className="slds-text-align--center">{lead.phone}</td>
                  <td>
                    <div className="slds-button-group" role="group">
                      <Logs />
                      <a className="slds-button slds-button--neutral" onClick={e => {
                          dispatch(addCustomer(lead.name, lead.phone));
                          dispatch(deleteLead(index));
                        }}>Make Customer</a>
                      <a className="slds-button slds-button--destructive" onClick={e => {
                          dispatch(deleteLead(index))
                        }}>Delete</a>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          </form>
        </div>
      </div>
    </div>
)

const mapStateToProps = state => ({
    leads: state.leads
});

export default connect(mapStateToProps)(Leads)