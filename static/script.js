window.addEventListener("load", function() {
  const copyrightNotice = document.querySelector("footer.footer p#copyright-notice");

  let currentYear = (new Date()).getFullYear();
  copyrightNotice.innerHTML = `Copyright &copy; ${currentYear} mrwolferinc<br>All rights reserved.`;
});
