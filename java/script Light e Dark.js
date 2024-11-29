// Seleciona o botão
const toggleButton = document.getElementById('toggle-theme');

// Verifica o tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
}

// Alterna o tema ao clicar no botão
toggleButton.addEventListener('click', () => {
  if (document.body.classList.contains('light-mode')) {
    document.body.classList.replace('light-mode', 'dark-mode');
    localStorage.setItem('theme', 'dark-mode');
  } else {
    document.body.classList.replace('dark-mode', 'light-mode');
    localStorage.setItem('theme', 'light-mode');
  }
});

// Define o tema padrão caso nenhum esteja salvo
if (!document.body.classList.contains('light-mode') && !document.body.classList.contains('dark-mode')) {
  document.body.classList.add('light-mode');
}
