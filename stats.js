fetch('./index.json')
.then(response => response.json())
.then(statitics => {
    const stats = document.getElementById('stat_p');
stistics.forEach(statistic => {
stats.innerHTML += `
        <div class="stat_p">
<h4>${statistics.Achievement}</h4>
<p>${statistics.Description}</p>
        </div>
        `;
});
});