const userHandler = (nameUser, emailUser, commentUser) => {
  const user = {
    name: nameUser,
    email: emailUser,
    comment: commentUser,
  };
  return user;
};
export { userHandler };
