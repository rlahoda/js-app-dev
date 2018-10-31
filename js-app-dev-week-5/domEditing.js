function makeChanges() {
  const list1 = document.querySelector('#list1').children;
  const list2 = document.querySelector('#list2').children;
  const list3 = document.querySelector('#list3');
  const list4 = document.querySelector('#list4').children;
  const list4UL = document.querySelector('#list4');

  list1[1].innerHTML = 'Fair Trade Coffee';
  list2[3].remove();
  const wiz = document.createElement('li');
  wiz.innerHTML = 'Cheese Whiz';
  list3.appendChild(wiz);
  while (list4.length > 0) {
    list4[0].remove();
  }
  const newItems =  ['protein powder', 'muscle milk', 'power bars'];
  for (var item in newItems) {
    const newItem = document.createElement('li');
    newItem.innerHTML = newItems[item];
    list4UL.appendChild(newItem);
  }
  list4[1].classList.add('important');
}

makeChanges();
