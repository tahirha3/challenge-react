import React from 'react'
import { connect } from 'react-redux'

//import { addTodo, deleteTodo } from '../actions'

const Logs = ({logs, dispatch}) => (
  <div>
    <a className="slds-button slds-button--neutral" onClick={e => {
          document.getElementById("modal").classList.remove('slds-hide');
          document.getElementById("background").classList.remove('slds-backdrop--close');
          document.getElementById("background").classList.add('slds-backdrop--open');
      }}>Call Logs</a>
      <div id="modal" className="slds-modal slds-fade-in-open slds-hide" aria-hidden="true" role="dialog">
        <div className="slds-modal__container">
          <div className="slds-modal__header">
            <h2 className="slds-text-heading--medium">Call Logs</h2>
          </div>
          <div className="slds-modal__content slds-p-around--medium">
            <div>
              <ul>
              {logs.map((log, index) => 
                <li key={index}>
                  <span className="slds-assistive-text">Call</span>
                  <div className="slds-media">
                    <div className="slds-media__body">
                      <div className="slds-media slds-media--timeline slds-timeline__media--call">
                        <div className="slds-media__figure slds-timeline__icon">
                          <div className="slds-icon_container">
                            <svg aria-hidden="false" className="slds-icon slds-icon--small slds-icon-standard-log-a-call">
                            </svg>
                          </div>
                        </div>
                        <div className="slds-media__body">
                          <p className="slds-truncate">{log.desc}</p>
                          <ul className="slds-list--horizontal slds-wrap">
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="slds-media__figure slds-media__figure--reverse">
                      <div className="slds-timeline__actions">
                        <p className="slds-timeline__date">{log.time}</p>
                      </div>
                    </div>
                  </div>
                </li>
                )}
              </ul>
            </div>
          </div>
          <div className="slds-modal__footer">
            <button className="slds-button slds-button--neutral" onClick={e => {
                document.getElementById("modal").classList.add('slds-hide');
                document.getElementById("background").classList.remove('slds-backdrop--open');
                document.getElementById("background").classList.add('slds-backdrop--close');
            }}>Close</button>
          </div>
        </div>
      </div>
      <div id="background" className="slds-backdrop slds-backdrop--close"></div>
  </div>
)

const mapStateToProps = state => ({
    logs: state.logs
});

export default connect(mapStateToProps)(Logs)
