const users = []

// Add user
const addUser = ({ id, username, room }) => {
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if(!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    // Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username ===  username
    })

    // Validate username
    if(existingUser) {
        return { 
            error: 'Username is already in use!'
        }
    }

    // Store user
    const user =  { id, username, room }
    users.push(user)
    return { user }
}

// Get user 
const getUser = (id) => {
    return users.find((user) => user.id === id)
}

// Users in Room
const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

// Remove user
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1) {      // -1 is used for no-match, 0 or > if there is a match --- index ! == -1 means, if we get any match
        return users.splice(index, 1)[0]    // index is the position of the item to remove and 1 is the argument that how much total items will be removed
    }                                      // [0] is used to access and display the first item of the users array
} 

module.exports = {
    addUser,
    getUser,
    getUsersInRoom,
    removeUser
}                          // exports all the functions....