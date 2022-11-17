const chart_1 = document.querySelector('#chart_canvas_1');
const chart_2 = document.querySelector('#chart_canvas_2');
const chart_3 = document.querySelector('#chart_canvas_3');
const chart_4 = document.querySelector('#chart_canvas_4');
const chart_5 = document.querySelector('#chart_canvas_5');
const chart_6 = document.querySelector('#chart_canvas_6');
const chart_7 = document.querySelector('#chart_canvas_7');

const charts = {
    chart_1: {
        element: chart_1,
        title: 'JavaScript',
        percent: .69,
    },
    chart_2: {
        element: chart_2,
        title: 'CSS3',
        percent: .83,
    },
    chart_3: {
        element: chart_3,
        title: 'HTML5',
        percent: .81,
    },
    chart_4: {
        element: chart_4,
        title: 'React.JS',
        percent: .24,
    },
    chart_5: {
        element: chart_5,
        title: 'Node.JS',
        percent: .27,
    },
    chart_6: {
        element: chart_6,
        title: 'Google Apps Script',
        percent: .98,
    },
    chart_7: {
        element: chart_7,
        title: '1C',
        percent: .24,
    },
}

for (let chart in charts) {
    // charts[chart].element.addEventListener('mouseenter', (e) => animate(e, chart));
    draw(charts[chart].element, chart)
}

function draw(target, chart) {
    const ctx = target.getContext('2d');
    let w, h, percent, title, radius;

    w = charts[chart].element.width;
    h = charts[chart].element.height;

    ctx.clearRect(0, 0, w, h);

    radius = 50;
    percent = charts[chart].percent;
    title = charts[chart].title;

    ctx.lineWidth = 12;
    ctx.textAlign = 'center';
    ctx.font = "normal normal bolder 14px Spartan"

    ctx.beginPath();
    ctx.strokeStyle = "rgba(146, 138, 151, 0.27)";
    ctx.arc((w / 2), (h / 2), radius - 12, 0, Math.PI * 2);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = '#000C24';
    ctx.arc((w / 2), (h / 2), radius - 12, Math.PI / 2, (Math.PI * 2 * percent) + Math.PI / 2);
    ctx.fillText(title, w / 2, 120);
    ctx.fillStyle = '#928A97';
    ctx.fillText(percent * 100 + '%', w / 2 + 2, h / 2 + 5);
    ctx.stroke();
}
