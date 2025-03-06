import { useState } from 'react'

interface Item {
    category: string
    values: string[]
}

interface SidebarCategoryProps {
    category: string
    values: string[]
    onSidebarChange(item: any): void
    selected: string
}

function SidebarCategory({ category, values, onSidebarChange, selected }: SidebarCategoryProps) {
    return (
      <div className="sidebar-category">
          <div className="sidebar-name"><i>{category}</i></div>
          <div className="sidebar-values">
              {values.map((item: any, idx) =>
                  <div key={idx}
                       className={selected === item ? "sidebar-item-selected" : "sidebar-item"}
                       onClick={() => onSidebarChange(item)}
                  >
                      {item}
                  </div>)
              }
          </div>
      </div>
    )
}

interface SideBarProps {
    selected: string
    sidebarValues: Item[]
    onSidebarChange(event: any): void
}

const Sidebar = (props: SideBarProps) => {
    const { selected: selectedProps, sidebarValues, onSidebarChange } = props
    const [selected, onSelectedChanged] = useState(selectedProps)

    const sidebarChange = (value: string) => {
        onSelectedChanged(value)
        onSidebarChange(value)
    }

    return (
        <div className="sidebar-container">
            {sidebarValues.map((item: Item, idx: number) =>
                <SidebarCategory key={idx} category={item.category} values={item.values} onSidebarChange={sidebarChange} selected={selected}/>)
            }
        </div>
    )
}

export default Sidebar