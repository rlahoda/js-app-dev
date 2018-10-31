$(document).ready(function() {
  const header = $('header');
  const sections = $('sections');

  console.log(header);
  console.log(sections);

  const current = $('section.current');
  console.log(current);
  const next = $(current).next();
  console.log(next);
  const prevH2 = $(current).prev().children('h2');
  console.log(prevH2);
  const divH2Highlight = $('h2.highlight').parents('div');
  console.log(divH2Highlight);
  const sectionsWithH2 = $('section h2').parent('section').get(); // without a parameter .get() returns an array

  console.log(sectionsWithH2);
});
