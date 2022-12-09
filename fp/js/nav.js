const ham = document.getElementsByClassName('toggleButton')[0]
const navbarLinks = document.getElementsByClassName('navbarLinks')[0]

ham.addEventListener('click', () => {
  console.log(ham);
  navbarLinks.classList.toggle('active');
  console.log(navbarLinks);
});

