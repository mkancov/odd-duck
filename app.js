'use strict';

// global variables

let goatContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');

let clicks = 0;
let maxClicksAllowed = 9;
let uniqueImageCount = 4;
let indexArray = [];

// functional logic

function goat(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
  goat.allgoatsArray.push(this);
}

goat.allgoatsArray = [];

function getRandomNumber() {
  return Math.floor(Math.random() * goat.goatsArray.length);
}

function rendergoats() {
  
  while (indexArray.length < uniqueImageCount) {
    let randomNumber = getRandomNumber();
    if (!indexArray.includes(randomNumber)) {
      indexArray.push(randomNumber);
    }
  }
  /* refer to goat-array-includes.png in the facilitator/whiteboard-diagrams folder for a visualization of this */
  console.log(indexArray);

  let goat1 = indexArray.shift();
  let goat2 = indexArray.shift();
  image1.src = goat.goatsArray[goat1].src;
  image2.src = goat.goatsArray[goat2].src;
  image1.alt = goat.goatsArray[goat1].name;
  image2.alt = goat.goatsArray[goat2].name;
  goat.goatsArray[goat1].views++;
  goat.goatsArray[goat2].views++;
}

function handlegoatClick(event) {
  if (event.target === goatContainer) {
    alert('Please click an image');
  }
  clicks++;
  let clickgoat = event.target.alt;
  for (let i = 0; i < goat.goatsArray.length; i++) {
    if (clickgoat === goat.goatsArray[i].name) {
        idkYet.goatsArray[i].clicks++;
      break;
    }
  }
  
  if (clicks === maxClicksAllowed) {
    goatContainer.removeEventListener('click', handlegoatClick);
    goatContainer.className = 'no-voting';
    renderChart();
  } else {
    rendergoats();
  }
}

function renderChart() {
  let goatNames = [];
  let goatLikes = [];
  let goatViews = [];
  for (let i = 0; i < goat.goatsArray.length; i++) {
    goats.push(goat.goatsArray[i].name);
    goatLikes.push(goat.goatsArray[i].clicks);
    goatViews.push(goat.goatsArray[i].views);
  }

  /* refer to Chart.js > Chart Types > Bar Chart: 
  https://www.chartjs.org/docs/latest/charts/bar.html 
  and refer to Chart.js > Getting Started > Getting Started:
  https://www.chartjs.org/docs/latest/getting-started/ */
  const data = {
    labels: goatNames,
    datasets: [{
      label: 'Likes',
      data: goatLikes,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)'
      ],
      borderWidth: 1
    },
    {
      label: 'Views',
      data: goatViews,
      backgroundColor: [
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgb(255, 159, 64)'
      ],
      borderWidth: 1
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  let canvasChart = document.getElementById('myChart');
  const myChart = new Chart(canvasChart, config);
}

// executable code

new goat('Cruising Goat', 
new goat('Float Your Goat', './images/float-your-goat.jpg');
new goat('Goat Out of Hand', './images/goat-out-of-hand.jpg');
new goat('Kissing Goat', './images/kissing-goat.jpg');
new goat('Sassy Goat', './images/sassy-goat.jpg');
new goat('Smiling Goat', './images/smiling-goat.jpg');
new goat('Sweater Goat', './images/sweater-goat.jpg');

rendergoats();

goatContainer.addEventListener('click', handlegoatClick);