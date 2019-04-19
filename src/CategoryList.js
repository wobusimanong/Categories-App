import React from 'react';

class CategoryList extends React.Component {
    render() {
        return <ul>
            {
                this.props.list.map(ele => {
                    return <li key={ele.id} onClick={() => this.props.handleSelected(ele.short_name)}>{`${ele.name}-${ele.short_name}`}</li>
                })
            }
        </ul>
    }
}

export default CategoryList;