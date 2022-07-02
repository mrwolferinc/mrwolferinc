window.addEventListener('DOMContentLoaded', function() {
  const footerCopyright = document.querySelector('.footer .copyright');
  footerCopyright.innerHTML = `Copyright &copy; ${(new Date()).getFullYear()} mrwolferinc. All rights reserved.`;
});
