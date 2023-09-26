let data = [
    { id: 1, name: "Susheel Kumar", age: 22, position: "Full stack web developer" },
    { id: 2, name: "Himanshu Sahu", age: 21, position: "Java backend developer" },
    { id: 3, name: "Aman Kumar", age: 24, position: "Python developer" },
];

let count = data.length;

export { data, addData, updateData, deleteData };

 function addData(name, age, position) {
    data.push({
        id: count + 1,
        name: name,
        age: age,
        position: position,
    });
    count++;
    console.log("Data added successfully");
}

 function updateData(id, name, age, position) {
    const indexToUpdate = data.findIndex((item) => item.id === id);

    if (indexToUpdate !== -1) {
        const updatedObject = {
            id: id,
            name: name,
            age: age,
            position: position,
        };

        // Update the data array with the new object
        data[indexToUpdate] = updatedObject;

        console.log("Data updated successfully");
    } else {
        // If the object with the given id does not exist, you can handle it here
        console.log(`Object with id ${id} not found.`);
    }
}

 function deleteData(id) {
    // Use the filter method to create a new array without the item to delete
    data = data.filter((item) => item.id !== id);
    console.log("Data deleted successfully");
}
