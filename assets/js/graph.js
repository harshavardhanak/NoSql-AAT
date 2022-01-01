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
        label: 'Nutrional analysis for cereals',
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