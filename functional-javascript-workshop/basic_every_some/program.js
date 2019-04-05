const checkUsersValid = goodUsers => {
  const allUsersValid = submittedUsers => {
    return submittedUsers.every(user =>
      goodUsers.some(gUser => gUser.id === user.id)
    );
  };

  return allUsersValid;
};

module.exports = checkUsersValid;
