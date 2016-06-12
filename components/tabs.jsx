import React from 'react';

var Tab = React.createClass({
    handleClick: function(e){
        e.preventDefault();
        this.props.handleClick();
    },
    
    render: function(){
        return (
            <li role="presentation" className={this.props.isCurrent ? 'slds-tabs--default__item slds-text-heading--label slds-active' : 'slds-tabs--default__item slds-text-heading--label'}>
                <a className="slds-tabs--default__link" role="tab" onClick={this.handleClick} href={this.props.url}>
                    {this.props.name}
                </a>
            </li>
        );
    }
});

export default Tab;

var Tabs = React.createClass({
    handleClick: function(tab){
        this.props.changeTab(tab);
    },
    
    render: function(){
        return (
            <nav className="slds-align--absolute-center">
                <ul className="slds-tabs--default__nav" role="tablist">
                {this.props.tabList.map(function(tab) {
                    return (
                        <Tab
                            handleClick={this.handleClick.bind(this, tab)}
                            key={tab.id}
                            url={tab.url}
                            name={tab.name}
                            isCurrent={(this.props.currentTab === tab.id)}
                         />
                    );
                }.bind(this))}
                </ul>
            </nav>
        );
    }
});

export default Tabs;