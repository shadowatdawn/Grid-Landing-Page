
    function shownav(){
    const nav = document.querySelector('nav')
    const midpart = document.querySelector('.midpart')
    const footer = document.querySelector('footer')
    nav.style.display = 'flex';
    midpart.style.backgroundColor = 'hsl(228, 99%, 58%)';
    footer.style.backgroundColor = 'hsl(228, 99%, 58%)';
    }
    function closenav(){
    const midpart = document.querySelector('.midpart')
    const footer = document.querySelector('footer')
    const nav = document.querySelector('nav')
    nav.style.display = 'none';
    midpart.style.backgroundColor = 'hsl(228, 100%, 60%)';
    footer.style.backgroundColor = 'hsl(228, 100%, 60%)';
    }