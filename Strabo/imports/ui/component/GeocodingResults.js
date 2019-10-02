import React, { Component } from 'react';
import classnames from 'classnames';
import ResultList from './ResultList';
import ResultJSON from './ResultJSON';
const RESULT_TAB = 'RESULT_TAB';
const JSON_TAB = 'JSON_TAB';
class GeocodingResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: RESULT_TAB,
    };
  }
  renderTab(title, tab, icon, activeTab) {
    return (
      <li className={classnames({ 'is-active': activeTab === tab })}>
        <a
          href="/"
          onClick={e => {
            e.preventDefault();
            this.setState({
              activeTab: tab,
            });
          }}
        >
          <span className="icon is-small">
            <i className={icon} aria-hidden="true" />
          </span>
          <span>{title}</span>
        </a>
      </li>
    );
  }
  render() {
    const { activeTab } = this.state;
    const results = this.props.response.results || [];
    return (
      <div className="box results">
        <div className="tabs is-boxed vh">
        </div>
        {/* List of results */}
        {activeTab === RESULT_TAB &&
          results.length > 0 && <ResultList response={this.props.response} />}
      </div>
    );
  }
}
export default GeocodingResults;