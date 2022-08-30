'use strict';

// global varriables

let goatContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');

let clicks = 0;
let maxClicksAllowed = 9;
let uniqueImageCount = 4;
let indexArray = [];

// functional logic

function idkYet(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
  idkYet.allidkYetsArray.push(this);
}

idkYet.allidkYetsArray = [];

function getRandomNumber() {
  return Math.floor(Math.random() * idkYet.idkYetsArray.length);
}

function renderidkYets() {
  
  while (indexArray.length < uniqueImageCount) {
    let randomNumber = getRandomNumber();
    if (!indexArray.includes(randomNumber)) {
      indexArray.push(randomNumber);
    }
  }
  /* refer to goat-array-includes.png in the facilitator/whiteboard-diagrams folder for a visualization of this */
  console.log(indexArray);

  let idkYet1 = indexArray.shift();
  let idkYet2 = indexArray.shift();
  image1.src = idkYet.idkYetsArray[idkYet1].src;
  image2.src = idkYet.idkYetsArray[idkYet2].src;
  image1.alt = idkYet.idkYetsArray[idkYet1].name;
  image2.alt = idkYet.idkYetsArray[idkYet2].name;
  idkYet.idkYetsArray[idkYet1].views++;
  idkYet.idkYetsArray[idkYet2].views++;
}

function handleidkYetClick(event) {
  if (event.target === idkYetContainer) {
    alert('Please click an image');
  }
  clicks++;
  let clickidkYet = event.target.alt;
  for (let i = 0; i < idkYet.idkYetsArray.length; i++) {
    if (clickidkYet === idkYet.idkYetsArray[i].name) {
        idkYet.idkYetsArray[i].clicks++;
      break;
    }
  }
  
  if (clicks === maxClicksAllowed) {
    idkYetContainer.removeEventListener('click', handleidkYetClick);
    idkYetContainer.className = 'no-voting';
    renderChart();
  } else {
    renderidkYets();
  }
}

function renderChart() {
  let idkYetNames = [];
  let idkYetLikes = [];
  let idkyetViews = [];
  for (let i = 0; i < idkYet.idkYetsArray.length; i++) {
    idkYets.push(idkYet.idkYetsArray[i].name);
    idkYetLikes.push(idkYet.idkYetsArray[i].clicks);
    idkYetViews.push(idkYet.idkYetsArray[i].views);
  }

  /* refer to Chart.js > Chart Types > Bar Chart: 
  https://www.chartjs.org/docs/latest/charts/bar.html 
  and refer to Chart.js > Getting Started > Getting Started:
  https://www.chartjs.org/docs/latest/getting-started/ */
  const data = {
    labels: idkYetNames,
    datasets: [{
      label: 'Likes',
      data: idkYetLikes,
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
      data: idkYetViews,
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

new idkYet('Cruising Goat', './images/cruisin-goat.jpg');
new idkYet('Float Your Goat', './images/float-your-goat.jpg');
new idkYet('Goat Out of Hand', './images/goat-out-of-hand.jpg');
new idkYet('Kissing Goat', './images/kissing-goat.jpg');
new idkYet('Sassy Goat', './images/sassy-goat.jpg');
new idkYet('Smiling Goat', './images/smiling-goat.jpg');
new idkYet('Sweater Goat', './images/sweater-goat.jpg');

renderidkYets();

idkYetContainer.addEventListener('click', handleidkYetClick);