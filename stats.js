fetch('index.json')
     .then(response => response.json())
     .then(data => {
        stats_head1.innerHTML = `${data[0].achievement1}`;
        stats_para1.innerHTML = `${data[0].description1}`;
        stats_head2.innerHTML = `${data[1].achievement2}`; 
        stats_para2.innerHTML = `${data[1].description2}`;
        stats_head3.innerHTML = `${data[2].achievement3}`; 
        stats_para3.innerHTML = `${data[2].description3}`;
        stats_head4.innerHTML = `${data[3].achievement4}`;
        stats_para4.innerHTML = `${data[3].description4}`;
        stat_number1.innerHTML = `${data[0].Value1}`;
        stat_number2.innerHTML = `${data[1].Value2}`;
        stat_number3.innerHTML = `${data[2].Value3}`;
        stat_number4.innerHTML = `${data[3].Value4}`;
     })
     .catch(error => {
        console.error('Error fetching data:', error);
     });