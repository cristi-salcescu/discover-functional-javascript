function CurrentUser() {
  function isAuthenticated() {
    return true;
  }

  return Object.freeze({
    isAuthenticated
  });
}

const currentUser = CurrentUser();

export default { ...currentUser };
