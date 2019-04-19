import React from 'react';

function Items(props) {
    return <div className='items'>
        <h2>Items in Category: {`(${props.name})`}</h2>
        <table className='ui celled striped table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.itemList.map(ele => {
                        return <tr key={ele.id}>
                            <td data-label='Name'>{ele.name}</td>
                            <td data-label='Description'>{ele.description}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </div>
}



export default Items;