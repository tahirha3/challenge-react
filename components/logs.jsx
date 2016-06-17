import React from 'react'

let Logs = React.createClass({
  getInitialState: function () {
        return {
            toggle: 0,
            logs:this.props.logs,
            log:''
        };
    },
    handleChange(e) {
      this.setState({ log: e.target.value });
      if(e.keyCode == 13){
        this.newLog();
      }
    },
    toggle:function () {
        this.setState({ toggle: ~this.state.toggle });
    },
    newLog:function () {
      var currentdate = new Date(); 
      var datetime = currentdate.getDate() + "/"
                      + (currentdate.getMonth()+1)  + "/" 
                      + currentdate.getFullYear() + " @ "  
                      + currentdate.getHours() + ":"  
                      + currentdate.getMinutes() + ":" 
                      + currentdate.getSeconds();
      this.props.logs.push({ log: this.state.log, time: datetime });
      this.setState({ log: ''});
      this.setState({ logs: this.props.logs });
    },
  render() {
    return (
      <div>
        <a className="slds-button slds-button--neutral" onClick={e => {this.toggle();}}>Call Logs</a>
        <div className={this.state.toggle ? 'slds-modal slds-fade-in-open' : 'slds-modal slds-fade-in-open slds-hide'} role="dialog">
          <div className="slds-modal__container">
            <div className="slds-modal__header">
              <h2 className="slds-text-heading--medium">Call Logs</h2>
            </div>
            <div className="slds-modal__content slds-p-around--medium">
                <div className="slds-publisher slds-publisher--discussion slds-m-around--medium">
                  <input type="text" value={this.state.log} onChange={ 
                    this.handleChange } onKeyUp={this.handleChange} className="slds-publisher__input slds-textarea slds-text-longform" placeholder="Enter Log here…"></input>
                  <div className="slds-publisher__actions slds-grid slds-grid--align-spread">
                    <button className="slds-button slds-button--brand" onClick={e => {
                        this.newLog();
                      }}>Log</button>
                </div>
            </div>
            
              <div>
                <ul>
                  {this.state.logs ? this.state.logs.map((item, index) =>
                    <li key={index}>
                      <div className="slds-media">
                        <div className="slds-media__body">
                          <div className="slds-media ">
                            <div className="slds-media__figure slds-timeline__icon">
                              <div className="slds-icon_container">
                                <svg className="slds-icon slds-icon--small slds-icon-standard-log-a-call">
                                </svg>
                              </div>
                            </div>
                            <div className="slds-media__body" style={{ whiteSpace: 'pre-wrap' }} >
                              <p className="">{item.log}</p>
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
              <button className="slds-button slds-button--neutral" onClick={e => {this.toggle();}}>Close</button>
            </div>
          </div>
        </div>
        <div className={this.state.toggle ? 'slds-backdrop slds-backdrop--open' : 'slds-backdrop slds-backdrop--close'}></div>
      </div>
    );
  }
});
export default Logs;