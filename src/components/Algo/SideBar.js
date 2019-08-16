import React, { Component } from 'react';
import PropTypes from 'prop-types';

function SidebarCategory({ category, values,onSidebarChange, selected }) {
    return (
      <div className="sidebar-category">
          <div className="sidebar-name"><i>{category}</i></div>
          <div className="sidebar-values">
              {values.map((item, idx) =>
                  <div key={idx}
                       className={selected === item ? "sidebar-item-selected" : "sidebar-item"}
                       onClick={() => onSidebarChange(item)}
                  >
                      --  {item}
                  </div>)
              }
          </div>
      </div>
    );
}

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.onSidebarChange = this.onSidebarChange.bind(this);
    }

    state = {
        selected: this.props.selected
    };

    static propTypes = {
        sidebarValues: PropTypes.array.isRequired,
        onSidebarChange: PropTypes.func.isRequired,
        selected: PropTypes.string.isRequired,
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevState.selected !== this.props.selected) {
            this.setState({ selected: this.props.selected });
        }
    }

    onSidebarChange(val) {
        this.setState({ selectedValue: val }, () => this.props.onSidebarChange(val));
    }

    render() {
        const { selected } = this.state;
        return (
            <div className="sidebar-container">
                {this.props.sidebarValues.map((item, idx) =>
                    <SidebarCategory key={idx} category={item.category} values={item.values} onSidebarChange={this.onSidebarChange} selected={selected}/>)
                }
            </div>
        );
    }
}


