import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
                {
                    this.props.sidebarValues.map((item, idx) =>
                        <div key={idx}
                             className={selected === item ? "sidebar-item-selected" : "sidebar-item"}
                             onClick={() => this.onSidebarChange(item)}
                        >
                            {item}
                        </div>
                    )
                }
            </div>
        );
    }
}


