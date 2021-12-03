const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const head = document.createElement('div');
  const headDate = document.createElement('span');
  const headTitle = document.createElement('h1');
  const headTemp = document.createElement('span');

  headDate.textContent = date;
  headTitle.textContent = title;
  headTemp.textContent = temp;

  head.classList.add('header');
  headDate.classList.add('date');
  headTemp.classList.add('temp');

  head.appendChild(headDate);
  head.appendChild(headTitle);
  head.appendChild(headTemp);

  console.log(head);
  


  return head
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  selector = document.querySelector(selector);
  selector.appendChild(Header("Lambda Times", "January 21, 2022", '34°'));
}

export { Header, headerAppender }
