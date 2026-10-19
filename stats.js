fetch('index.json')
     .then(response => response.json())
     .then(data => {
        statistics1.innerHTML = `${data[0].achievement1} <br>${data[0].description1}`;
        statistics2.innerHTML = `${data[1].achievement2} <br>${data[1].description2}`;
        statistics3.innerHTML = `${data[2].achievement3} <br>${data[2].description3}`;
        statistics4.innerHTML = `${data[3].achievement4} <br>${data[3].description4}`;
        stat_number1.innerHTML = `${data[0].Value1}`;
        stat_number2.innerHTML = `${data[1].Value2}`;
        stat_number3.innerHTML = `${data[2].Value3}`;
        stat_number4.innerHTML = `${data[3].Value4}`;
     });