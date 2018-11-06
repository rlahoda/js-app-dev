let info = {};
// let url = "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json";
// let url = "/scripts/elements.json";
// the ajax request
function ajax(url, method, myCallback) {
  let xhr = new XMLHttpRequest();
  // console.log(xhr);
  xhr.open(method, url, true);
  xhr.onreadystatechange = callback;
  // console.log(xhr.readyState, xhr.status, xhr.statusText);
  xhr.send();
  let response = {};
  function callback() {
    // console.log(xhr.readyState, xhr.status, xhr.statusText);
    if (xhr.readyState == 4) {
      response = JSON.parse(xhr.responseText);
      console.log(response);
      // info = response;
      // console.log(info.elements.length);
      myCallback(response);
    }
  }
  return response;
}

function ajaxContent(url, method, content, myCallback) {
  let xhr = new XMLHttpRequest();
  // console.log(xhr);
  xhr.open(method, url, true);
  xhr.onreadystatechange = callback;
  // console.log(xhr.readyState, xhr.status, xhr.statusText);
  xhr.send();
  let response = {};
  function callback() {
    // console.log(xhr.readyState, xhr.status, xhr.statusText);
    if (xhr.readyState == 4) {
      response = JSON.parse(xhr.responseText);
      console.log(response);
      // info = response;
      // console.log(info.elements.length);
      myCallback(response);
    }
  }
  return response;
}

// console.log(info);
function getAllPosts() {
  const url = 'http://jsonplaceholder.typicode.com/posts'
  ajax(url, 'GET', getAllPostsCallback);
}
function getAllPostsCallback(data) {
  const responseContainer = document.querySelector('.responseContainer');
  function posts() {
    let compiled = '';
    for (post in data) {
      compiled += `

        <div>
        <div class="uk-card uk-card-default uk-width-1-2@m">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">${data[post].title}</h3>
                        <p class="uk-text-meta uk-margin-remove-top">User: ${data[post].userId}, ID: ${data[post].id}</p>
                    </div>
                </div>
            </div>
            <div class="uk-card-body">
                <p>${data[post].body}</p>
            </div>
            <div class="uk-card-footer">
                <a href="#" class="uk-button uk-button-text">Comments</a>
            </div>
        </div>
</div>

        `;
    }
    return compiled;
  }
  responseContainer.innerHTML = posts();
}

function getPost10() {
  const url = 'http://jsonplaceholder.typicode.com/posts/10'
  ajax(url, 'GET', getPost10Callback);
  const responseContainer = document.querySelector('.responseContainer');
}
function getPost10Callback(data) {
  const responseContainer = document.querySelector('.responseContainer');
  function posts() {
    let compiled = '';
    for (post in data) {
      compiled += `

        <div>
        <div class="uk-card uk-card-default uk-width-1-2@m">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">${data[post].title}</h3>
                        <p class="uk-text-meta uk-margin-remove-top">User: ${data[post].userId}, ID: ${data[post].id}</p>
                    </div>
                </div>
            </div>
            <div class="uk-card-body">
                <p>${data[post].body}</p>
            </div>
            <div class="uk-card-footer">
                <a href="#" class="uk-button uk-button-text">Comments</a>
            </div>
        </div>
</div>

        `;
    }
    return compiled;
  }
  responseContainer.innerHTML = posts();
}

function getCommentsPost12() {
  const url = 'http://jsonplaceholder.typicode.com/posts/12/comments'
  ajax(url, 'GET', getCommentsPost12Callback);
}
function getCommentsPost12Callback(data) {
  const responseContainer = document.querySelector('.responseContainer');
  function posts() {
    let compiled = '';
    for (post in data) {
      compiled += `

        <div>
        <div class="uk-card uk-card-default uk-width-1-2@m">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">${data[post].title}</h3>
                        <p class="uk-text-meta uk-margin-remove-top">User: ${data[post].userId}, ID: ${data[post].id}</p>
                    </div>
                </div>
            </div>
            <div class="uk-card-body">
                <p>${data[post].body}</p>
            </div>
            <div class="uk-card-footer">
                <a href="#" class="uk-button uk-button-text">Comments</a>
            </div>
        </div>
</div>

        `;
    }
    return compiled;
  }
  responseContainer.innerHTML = posts();
}

function getPostsByUser2() {
  const url = 'http://jsonplaceholder.typicode.com/posts?userId=2'
  ajax(url, 'GET', getPostsByUser2Callback);
}
function getPostsByUser2Callback(data) {
  const responseContainer = document.querySelector('.responseContainer');
  function posts() {
    let compiled = '';
    for (post in data) {
      compiled += `

        <div>
        <div class="uk-card uk-card-default uk-width-1-2@m">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">${data[post].title}</h3>
                        <p class="uk-text-meta uk-margin-remove-top">User: ${data[post].userId}, ID: ${data[post].id}</p>
                    </div>
                </div>
            </div>
            <div class="uk-card-body">
                <p>${data[post].body}</p>
            </div>
            <div class="uk-card-footer">
                <a href="#" class="uk-button uk-button-text">Comments</a>
            </div>
        </div>
</div>

        `;
    }
    return compiled;
  }
  responseContainer.innerHTML = posts();
}

function makeNewPost() {
  const url = 'http://jsonplaceholder.typicode.com/posts'
  const newPost = JSON.stringify({
      title: 'My Title',
      body: 'stuff and all',
      userId: 14
    });
  ajaxContent(url, 'POST', newPost, makeNewPostCallback);
}
function makeNewPostCallback(data) {
  const responseContainer = document.querySelector('.responseContainer');
  function posts() {
    let compiled = '';
    for (post in data) {
      compiled += `

        <div>
        <div class="uk-card uk-card-default uk-width-1-2@m">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">${data[post].title}</h3>
                        <p class="uk-text-meta uk-margin-remove-top">User: ${data[post].userId}, ID: ${data[post].id}</p>
                    </div>
                </div>
            </div>
            <div class="uk-card-body">
                <p>${data[post].body}</p>
            </div>
            <div class="uk-card-footer">
                <a href="#" class="uk-button uk-button-text">Comments</a>
            </div>
        </div>
</div>

        `;
    }
    return compiled;
  }
  responseContainer.innerHTML = posts();
}

function replacePost12() {
  const url = 'http://jsonplaceholder.typicode.com/posts/12'
  const newPost = JSON.stringify({
      title: 'My Title',
      body: 'stuff and all',
      userId: 14
    });
  ajaxContent(url, 'PUT', newPost, replacePost12Callback);
}
function replacePost12Callback(data) {
  const responseContainer = document.querySelector('.responseContainer');
  function posts() {
    let compiled = '';
    for (post in data) {
      compiled += `

        <div>
        <div class="uk-card uk-card-default uk-width-1-2@m">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">${data[post].title}</h3>
                        <p class="uk-text-meta uk-margin-remove-top">User: ${data[post].userId}, ID: ${data[post].id}</p>
                    </div>
                </div>
            </div>
            <div class="uk-card-body">
                <p>${data[post].body}</p>
            </div>
            <div class="uk-card-footer">
                <a href="#" class="uk-button uk-button-text">Comments</a>
            </div>
        </div>
</div>

        `;
    }
    return compiled;
  }
  responseContainer.innerHTML = posts();
}

function updateTitlePost12() {
  const url = 'http://jsonplaceholder.typicode.com/posts/12'
  const updatePost = JSON.stringify({
    title: 'New Title',
    body: 'Stuff'
  });
  ajaxContent(url, 'POST', updatePost, updateTitlePost12Callback);
}
function updateTitlePost12Callback(data) {
  const responseContainer = document.querySelector('.responseContainer');
  function posts() {
    let compiled = '';
    for (post in data) {
      compiled += `

        <div>
        <div class="uk-card uk-card-default uk-width-1-2@m">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">${data[post].title}</h3>
                        <p class="uk-text-meta uk-margin-remove-top">User: ${data[post].userId}, ID: ${data[post].id}</p>
                    </div>
                </div>
            </div>
            <div class="uk-card-body">
                <p>${data[post].body}</p>
            </div>
            <div class="uk-card-footer">
                <a href="#" class="uk-button uk-button-text">Comments</a>
            </div>
        </div>
</div>

        `;
    }
    return compiled;
  }
  responseContainer.innerHTML = posts();
}

function deletePost12() {
  const url = 'http://jsonplaceholder.typicode.com/posts/12'
  ajax(url, 'DELETE', deletePost12Callback);
}
function deletePost12Callback(data) {
  const responseContainer = document.querySelector('.responseContainer');
  responseContainer.innerHTML = JSON.stringify(data, null, 1);
}


function listeners() {
  const getAllPostsButton = document.querySelector('#getAllPosts');
  getAllPostsButton.addEventListener('click', function(){
    getAllPosts();
  });
  const getPost10Button = document.querySelector('#getPost10');
  getPost10Button.addEventListener('click', function(){
    getPost10();
  });
  const getCommentsPost12Button = document.querySelector('#getCommentsPost12');
  getCommentsPost12Button.addEventListener('click', function(){
    getCommentsPost12();
  });
  const getPostsByUser2Button = document.querySelector('#getPostsByUser2');
  getPostsByUser2Button.addEventListener('click', function(){
    getPostsByUser2();
  });
  const makeNewPostButton = document.querySelector('#makeNewPost');
  makeNewPostButton.addEventListener('click', function(){
    makeNewPost();
  });
  const replacePost12Button = document.querySelector('#replacePost12');
  replacePost12Button.addEventListener('click', function(){
    replacePost12();
  });
  const updateTitlePost12Button = document.querySelector('#updateTitlePost12');
  updateTitlePost12Button.addEventListener('click', function(){
    updateTitlePost12();
  });
  const deletePost12Button = document.querySelector('#deletePost12');
  deletePost12Button.addEventListener('click', function(){
    deletePost12();
  });
  const displayPostsButton = document.querySelector('#displayPosts');
  displayPostsButton.addEventListener('click', function(){
    displayPosts();
  });
}

listeners();
