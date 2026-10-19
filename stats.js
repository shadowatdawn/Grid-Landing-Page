fetch('index.json')
.then(response => response.json())
.then(statistics => {
    const stats = document.getElementById('stat_p');
statistics.forEach(statistics => {
stats.innerHTML += `
        <div class="stat_p">
<h4>${statistics.Achievement}</h4>
<p>${statistics.Description}</p>
        </div>
        `;
});
});