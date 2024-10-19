const wrappers = document.querySelectorAll(".wrapper"); // Get all wrappers
const signs = document.querySelectorAll("#signs"); // Get all signs btn

    wrappers.forEach(wrapper => {
        const subject = wrapper.querySelector("h1"); // Get the subject (h1) inside each wrapper
        const toggleButton = wrapper.querySelector("#toggle"); // Get the toggle button inside each wrapper
        const gradeContainer = document.querySelector(".grade_container");
        const titleSubject = document.getElementById("title_subject");
        const signs = document.querySelectorAll("#sign");

        // Attach an event listener to each toggle button
        toggleButton.addEventListener("click", () => {
            gradeContainer.classList.add("active");
            titleSubject.textContent = subject.textContent;
        });

        signs.forEach(sign => {
            sign.addEventListener("click", ()=> {
                console.log(sign.textContent);
                data.push(sign.textContent)
            });
        });
    });

//studen grade calc

const nums = [10, 10, 10, 8, 8, 10, 9, 8, 9, 10, 10, 10, 10, 10, 10, 10];
const sum = nums.reduce((acc, num) => acc + num, 0);
const gradeCalc = sum / nums.length;
const round = Math.round(gradeCalc);

console.log(round);

//grade system

    const data = [10, 11, 2, 5, 6, 7, 8, 9, 20];  // Example data
    const labels = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];  // Corresponding labels
  
    const barChart = document.getElementById('barChart');
    // Create bars
    data.forEach((value, index) => {
      const bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.height = `${value * 9}px`;  // Scale the bar heights
      bar.textContent = value;
  
      barChart.appendChild(bar);
    });
  
    // Add X-axis labels
    const xAxis = document.createElement('div');
    xAxis.classList.add('x-axis-labels');
    labels.forEach(label => {
      const labelDiv = document.createElement('div');
      labelDiv.textContent = label;
      xAxis.appendChild(labelDiv);
    });
    barChart.appendChild(xAxis);