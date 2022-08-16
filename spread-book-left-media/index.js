const checkboxDomList = [
  ...document.querySelectorAll(`input[type="checkbox"]`),
];

function handleHoge(e) {
  const pageId = e.target.getAttribute('data-page-id');
  const pageDom = document.querySelector(`#${pageId}`);
  console.log(
    pageId,
    window.getComputedStyle(pageDom).zIndex,
    e.target,
    e.target.checked
  );
}

for (let index = 0; index < checkboxDomList.length; index++) {
  const checkboxDom = checkboxDomList[index];
  console.log(checkboxDom);
  checkboxDom.addEventListener('click', handleHoge);
}
