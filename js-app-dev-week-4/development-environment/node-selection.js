// Get the header element
const head = document.querySelector('header');
console.log(head);
// Get all the section elements
const sections = document.querySelectorAll('section');
console.log(sections);
// Get the section element with class="current"
const sectionCurrent = document.querySelector("section.current");
console.log(sectionCurrent);
// Get the section that comes after the current section
const sectionBeforeCurrent = sectionCurrent.previousElementSibling;
console.log(sectionBeforeCurrent);
// Get the h2 node from the section before the 'current' section
const h2InSectionCurrent = sectionBeforeCurrent.firstElementChild;
console.log(h2InSectionCurrent);
// Get the div that contains the section that has an h2 with a class of 'highlight'
const divSectionH2 = document.querySelector('h2.highlight').parentElement.parentElement;
console.log(divSectionH2);
// Get all the sections that contain an H2 (using a single statement);
// const sectionsWithH2 = document.querySelectorAll('h2');
// const sectionsAgain = sectionsWithH2.parentElement;
const sectionsAgain = [];
const sectionsWithH2 = document.getElementsByTagName('h2');
const sectionsH2Array = Array.from(sectionsWithH2);
for (var h2 of sectionsWithH2) {
  sectionsAgain.push(h2.parentElement);
}

console.log(sectionsWithH2);
console.log(sectionsH2Array);
console.log(sectionsAgain);
