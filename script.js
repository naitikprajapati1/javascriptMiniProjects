document.addEventListener('DOMContentLoaded', () => {
    const year=document.querySelector(".year");
    year.innerHTML=`${new Date().getFullYear()}`
    const tabs = document.querySelectorAll('.tab');
    const projects = document.querySelectorAll('.project-card');
    const themeToggle = document.getElementById('theme-toggle');
  
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const difficulty = tab.dataset.difficulty;

            projects.forEach(project => {
                if (difficulty === 'all' || project.classList.contains(difficulty)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});