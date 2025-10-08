const checkStorage = () => {
  const stored = localStorage.getItem("installed");
  if (stored) {
    return JSON.parse(stored);
  } else {
    return [];
  }
};

const addToLocal = (id) => {
  const stored = checkStorage();

  if (stored.includes(id)) {
    // alert("ami achi");
    return true;
  } else {
    stored.push(id);
    const newItem = JSON.stringify(stored);
    localStorage.setItem('installed', newItem)
    return false;
  }
};
export { addToLocal };
