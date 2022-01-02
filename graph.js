//chart 1
const xlabels = [];
const ycals = [];
chartIt();
async function chartIt() {
await getData();
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
type: 'line',
data: {
    labels: xlabels,
    datasets: [{
        label: 'Cereals vs Calories',
        data: ycals,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
    }]
}
});
}
    getData();
    async function getData() {
    const response = await fetch('/js/cereal.csv');
    const data = await response.text();
    //console.log(data); 

    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const cols = row.split(',');
        const name = cols[0];
        xlabels.push(name);
        const cal = cols[3];
        ycals.push(cal);
        console.log(name, cal);
    })
    //console.log(rows);
    }
    //chart 2
    const xlabels2 = [];
    const ycals2 = [];
    chartIt2();
    async function chartIt2() {
    await getData2();
    const ctx = document.getElementById('myChart2').getContext('2d');
    const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
    labels: xlabels2,
    datasets: [{
        label: 'Cereals vs Proteins',
        data: ycals2,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
    }]
    }
    });
    }
    getData2();
    async function getData2() {
    const response = await fetch('/js/cereal.csv');
    const data = await response.text();
    //console.log(data); 

    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const cols = row.split(',');
        const name = cols[0];
        xlabels2.push(name);
        const cal = cols[4];
        ycals2.push(cal);
        console.log(name, cal);
    })
    //console.log(rows);
    }

    //chart 3
    const xlabels3 = [];
    const ycals3 = [];
    chartIt3();
    async function chartIt3() {
        await getData3();
        const ctx = document.getElementById('myChart3').getContext('2d');
        const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xlabels3,
            datasets: [{
                label: 'Cereals vs Fats',
                data: ycals3,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        }
        });
        }
            getData3();
            async function getData3() {
            const response = await fetch('/js/cereal.csv');
            const data = await response.text();
            //console.log(data); 
        
            const table = data.split('\n').slice(1);
            table.forEach(row => {
                const cols = row.split(',');
                const name = cols[0];
                xlabels3.push(name);
                const cal = cols[5];
                ycals3.push(cal);
                console.log(name, cal);
            })
            //console.log(rows);
            }