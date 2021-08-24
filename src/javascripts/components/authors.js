// FIXME: STUDENTS show your authors

const showAuthors = (array) => {
  document.querySelector('#store').innerHTML = '';
  // CREATE A BUTTON TO ADD BOOKS

  array.forEach((item) => {
    // FIXME: STUDENTS create cards for your authors
    document.querySelector('#store').innerHTML += `<div class="card w-50">
    <div class="card-body">
      <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
      <p class="card-text">${item.email}</p>
      <a href="#" class="btn btn-primary">Update</a>
      <a href="#" class="btn btn-danger">Delete</a>
    </div>
  </div>
  `;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
