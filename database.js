let Database = [
    { id: 1, username: 'Cindy', email: 'cindy123@gmail.com', password: 'cindy123', role: 'user', reminders: [{id: 1, title: "abc", description: "abcabc", completed: false},{id: 2, title: "zyx", description: "zzzzz", completed: false}] },
    { id: 2, username: 'Alex', email: 'alex123@gmail.com', password: 'alex123', role: 'admin', reminders: [{id: 1, title: "abc", description: "abcabc", completed: false}] },
    {id: 3, username: 'Serena', email: 'serena604@gmail.com', password: 'serena1988', role: 'user', reminders: [] },
];

module.exports = Database;