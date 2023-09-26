import React, { useState } from 'react';
import { data, addData, deleteData, updateData } from './Database';

function Display() {
    const [displayData, setDisplayData] = useState(data);

    // const updatedata = (id) => {
    //     updateData(id);
    // };

    const DeleteData = (id) => {
        deleteData(id);
        // Update the displayData state to remove the deleted item
        setDisplayData(displayData.filter((item) => item.id !== id));
    };

    const listItems = displayData.map((person) => {
        return (
            <tr key={person.name}>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.position}</td>
                {/* <td>
                    <button className='btn btn-success' onClick={() => updatedata(person.id)}>Update Data</button>
                </td> */}
                <td>
                    <button className='btn btn-danger' onClick={() => DeleteData(person.id)}>Delete</button>
                </td>
            </tr>
        );
    });


    const handleSubmit=(e)=>{

        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const age = formData.get('age');
        const position = formData.get('position');
        // addData(name,age,position);
        console.log(formData.get('name'));

        setDisplayData([
            ...displayData,
            {
                id: displayData.length + 1,
                name: name,
                age: age,
                position: position,
            },
        ])

    }

    return (
        <div className='container'>


            <form onSubmit={handleSubmit} className='container-fluid'>
                    <label className='ms-2'>
                        <h4>Name:</h4> <input name="name" class="form-control" defaultValue="Susheel Kumar" />
                    </label>
                    <label className='ms-2'>
                        <h4>Age:</h4> <input name="age" class="form-control" defaultValue="22" />
                    </label>
                    <label className='ms-2'>
                        <h4>Position:</h4> <input name="position" class="form-control" defaultValue="Java Backend Developer" />
                    </label>
                    <button className='btn btn-primary ms-3' type="submit">Submit form</button>
            </form>


            <table className='table table-bordered mt-3 border-dark rounded'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Position</th>
                        {/* <th>Add</th> */}
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{listItems}</tbody>
            </table>
        </div>
    );
}

export default Display;
