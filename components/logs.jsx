import React from 'react'

let Logs = React.createClass({

  render() {
    return (
      <div>
        <a className="slds-button slds-button--neutral" onClick={e => {
          document.getElementById("modal").classList.remove('slds-hide');
          document.getElementById("background").classList.remove('slds-backdrop--close');
          document.getElementById("background").classList.add('slds-backdrop--open');
        } }>Call Logs</a>
        <div id="modal" className="slds-modal slds-fade-in-open slds-hide" role="dialog">
          <div className="slds-modal__container">
            <div className="slds-modal__header">
              <h2 className="slds-text-heading--medium"> Call Logs</h2>
            </div>
            <div className="slds-modal__content slds-p-around--medium">
              <div>
                <ul>
                  {this.props.logs ? this.props.logs.map((item, index) =>
                    <li key={index}>
                      <span className="slds-assistive-text">Call</span>
                      <div className="slds-media">
                        <div className="slds-media__body">
                          <div className="slds-media slds-media--timeline slds-timeline__media--call">
                            <div className="slds-media__figure slds-timeline__icon">
                              <div className="slds-icon_container">
                                <svg className="slds-icon slds-icon--small slds-icon-standard-log-a-call">
                                </svg>
                              </div>
                            </div>
                            <div className="slds-media__body">
                              <p className="slds-truncate">{item.log}</p>
                              <ul className="slds-list--horizontal slds-wrap">
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="slds-media__figure slds-media__figure--reverse">
                          <div className="slds-timeline__actions">
                            <p className="slds-timeline__date">{item.time}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
            <div className="slds-modal__footer">
              <button className="slds-button slds-button--neutral" onClick={e => {
                document.getElementById("modal").classList.add('slds-hide');
                document.getElementById("background").classList.remove('slds-backdrop--open');
                document.getElementById("background").classList.add('slds-backdrop--close');
              } }>Close</button>
            </div>
          </div>
        </div>
        <div id="background" className="slds-backdrop slds-backdrop--close"></div>
      </div>
    );
  }
});
export default Logs;