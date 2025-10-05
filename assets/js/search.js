const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();

  if (query) {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.location.href = googleSearchUrl;
  }
});

searchInput.addEventListener('focus', () => {
  searchForm.classList.add('focused');
});

searchInput.addEventListener('blur', () => {
  searchForm.classList.remove('focused');
});
