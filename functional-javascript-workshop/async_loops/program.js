function loadUsers(userIds, load, done) {
  const users = [];
  const completed = 0;

  userIds.forEach(userId => {
    load(userId, user => {
      users.push(user);
      completed++;

      if (completed == userIds.length) {
        return done(users);
      }
    });
  });
}

module.exports = loadUsers;
