import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SidebarCategory({ category, values, onSidebarChange, selected }) {
    return (
      <div className="sidebar-category">
          <div className="sidebar-name"><i>{category}</i></div>
          <div className="sidebar-values">
              {values.map((item, idx) =>
                  <div key={idx}
                       className={selected === item ? "sidebar-item-selected" : "sidebar-item"}
                       onClick={() => onSidebarChange(item)}
                  >
                      &nbsp;&nbsp;&nbsp;{item}
                  </div>)
              }
          </div>
      </div>
    );
}


const Sidebar = (props) => {
    const { selected: selectedProps, sidebarValues, onSidebarChange } = props;
    const [selected, onSelectedChanged] = useState(selectedProps);

    const sidebarChange = (value) => {
        onSelectedChanged(value);
        onSidebarChange(value)
    };

    return (
        <div className="sidebar-container">
            {sidebarValues.map((item, idx) =>
                <SidebarCategory key={idx} category={item.category} values={item.values} onSidebarChange={sidebarChange} selected={selected}/>)
            }
        </div>
    );
};

Sidebar.propTypes = {
    sidebarValues: PropTypes.array.isRequired,
    onSidebarChange: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
};

export default Sidebar;