import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'
import Leads from './leads'
import Customers from './customers'
import Appointments from './appointments'
import Tabs from './tabs'
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'

var tabList = [
    { 'id': 1, 'name': 'Leads', 'url': '/leads' },
    { 'id': 2, 'name': 'Customers', 'url': '/customers' },
    { 'id': 3, 'name': 'Appointments', 'url': '/appointments' }
];

var Content = React.createClass({
    render: function(){
        return(
            <div className="slds-align--absolute-center slds-p-around--medium">
                {this.props.currentTab === 1 ?
                <div>
                    <Leads />
                </div>
                :null}

                {this.props.currentTab === 2 ?
                <div>
                    <Customers />
                </div>
                :null}

                {this.props.currentTab === 3 ?
                <div>
                    <Appointments />
                </div>
                :null}

            </div>
        );
    }
});

let App = React.createClass({
  getInitialState: function () {        
      return {
          tabList: tabList,
          currentTab: 1
      };
  },

  changeTab: function(tab) {
      this.setState({ currentTab: tab.id });
  },
  render() {
    return(
      <div>
        <div className="slds-grid slds-grid--vertical-align-center slds-grid--align-center">
          <div className="slds-text-heading--large slds-p-around--medium">Simple CRM</div>
        </div>
        <Tabs
            currentTab={this.state.currentTab}
            tabList={this.state.tabList}
            changeTab={this.changeTab}
        />
        <Content currentTab={this.state.currentTab} />
      </div>
    );}
});
export default App;

let reactElement = document.getElementById('react')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  reactElement
);