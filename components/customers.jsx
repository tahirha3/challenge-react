import React from 'react';
import { connect } from 'react-redux'
import { addCustomer, deleteCustomer } from '../actions/customers'
import Logs from './logs'

const Customers = ({customers, dispatch}) => (
  <div>
      <div className="slds-card">
        <div className="slds-card__header slds-grid">
          <div className="slds-media slds-media--center slds-has-flexi-truncate">
            <div className="slds-media__body slds-truncate">
              <a href="javascript:void(0);" className="slds-text-link--reset">
                <span className="slds-text-heading--small">Customers ({customers.size})</span>
              </a>
            </div>
          </div>
        </div>
        <div className="slds-card__body">
          <table className="slds-table slds-table--bordered slds-no-row-hover slds-table--cell-buffer">
            <thead>
              <tr className="slds-text-heading--label">
                <th className="slds-text-align--center" scope="col">Name</th>
                <th className="slds-text-align--center" scope="col">Phone</th>
                <th className="slds-text-align--center" scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => 
                <tr className="slds-hint-parent" key={index}>
                  <td className="slds-text-align--center">{customer.name}</td> 
                  <td className="slds-text-align--center">{customer.phone}</td>
                  <td>
                    <div className="slds-button-group" role="group">
                      <Logs />
                      <a className="slds-button slds-button--destructive" onClick={e => {
                          dispatch(deleteCustomer(index))
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
    customers: state.customers
});

export default connect(mapStateToProps)(Customers)