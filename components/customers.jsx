import React from 'react';

let Customers = React.createClass({ 

  render() {
    return(
      <div>
        <div className="slds-card">
          <div className="slds-card__header slds-grid">
            <div className="slds-media slds-media--center slds-has-flexi-truncate">
              <div className="slds-media__body slds-truncate">
                <a href="javascript:void(0);" className="slds-text-link--reset">
                  <span className="slds-text-heading--small">Customers (1)</span>
                </a>
              </div>
            </div>
            <div className="slds-no-flex">
              <button className="slds-button slds-button--neutral slds-col--bump-left">New</button>
            </div>
          </div>
          <div className="slds-card__body">
            <table className="slds-table slds-table--bordered slds-no-row-hover slds-table--cell-buffer">
              <thead>
                <tr className="slds-text-heading--label">
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="slds-hint-parent">
                  <th scope="row">
                    <div className="slds-truncate"><a href="javascript:void(0);">Adam Choi</a></div>
                  </th>
                  <td>Company One</td>
                  <td>Director of Operations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );}
});

export default Customers;