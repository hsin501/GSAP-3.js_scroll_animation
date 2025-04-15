const navItems = document.querySelectorAll('.glass-container li');
const sections = document.querySelectorAll('.section');

navItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    sections[index].scrollIntoView({ behavior: 'smooth' });
  });
});
