const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const error = document.querySelector('.error');
const bookList = document.getElementById('book-list')
const tbSec = document.querySelector('.table-section');
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    btn.innerHTML = 'Add Book'
    console.log(`clicked`);
    //work on CRUD operation of DOM
    if (title.value === '' || author.value === '' || year.value === '') {
        // error.style.display = 'block';
        error.classList.remove('none')
    }
    else {
        error.classList.add('none');

        bookList.innerHTML += `
                    <section class="table-section">
            <div> ${title.value}</div >
                            <div>${author.value}</div>
                            <div>${year.value}</div>
                            <div onclick="handleEdit(this)">Edit</div>
                            <div onclick="handleDelete(this)">Delete</div>
                            </section>`
        title.value = '';
        author.value = '';
        year.value = '';
    }
}
);



const edit = document.querySelector('.edit');
function handleEdit(e) {
    btn.innerHTML = 'Update Book'
    let child = Array.from(e.parentNode.children);


    title.value = child[0].innerHTML;
    author.value = child[1].innerHTML;
    year.value = child[2].innerHTML;
    e.parentElement.remove();



    console.log(`Handle Edit Called`);


}
function handleDelete(button) {
    let parent = button.parentNode;
    parent.remove();

}
function handleUpdate() {
    btn.innerHTML = 'Update The Book'
    console.log(`Handle Update Called`);
}

