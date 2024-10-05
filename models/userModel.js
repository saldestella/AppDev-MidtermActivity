let users =[];

const getUsernameByUsername = (username) => {
    return users.find(user => user.username === username);
};

const addUser = (user) => {
    users.push(user);
};

module.exports = { user, getUsernameByUsername, addUser };
