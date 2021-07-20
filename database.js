let Database = [
    { id: 1, username: 'Cindy', email: 'cindy123@gmail.com', password: 'cindy123', role: 'user', image: "", reminders: [{id: 1, title: "abc", description: "abcabc", completed: false},{id: 2, title: "zyx", description: "zzzzz", completed: false}] },
    { id: 2, username: 'Alex', email: 'alex123@gmail.com', password: 'alex123', role: 'admin', image: "", reminders: [{id: 1, title: "abc", description: "abcabc", completed: false},] },
    { id: 3, username: 'Serena', email: 'serena604@gmail.com', password: 'serena1988', role: 'user', image: "https://images.unsplash.com/photo-1543675282-b3d2524d137a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", reminders: [] },
];

module.exports = Database;