let process = [];
let arrival = [];
let burst = [];
let check = 0;
let solve = document.querySelector(".solve");
let pro = document.getElementById("processInput");
let arri = document.getElementById("arrivalInput");
let bur = document.getElementById("burstInput");
let guide = document.getElementById("outputDes");
let temp = document.getElementById("TempAdd");
let tempTable = document.getElementById("TempTable");
let algoName = document.getElementById("algoname");
let selectedAlgo = document.getElementById("algo");
let RRTime = document.getElementById("TimeQuantum");
let PrioritiesOrder = document.getElementById("Priorities");
let gantchart = document.getElementById("GanttChart");

function spaceremove(s) {
  let temp = [];
  let x = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] != " ") {
      x += s[i];
      if (i == s.length - 1) {
        temp.push(x);
        x = "";
      }
    } else {
      temp.push(x);
      x = "";
    }
  }
  return temp;
}

function disp(a, b, c, d) {
  algoName.innerHTML = a;
  algoName.style.display = b;
  RRTime.style.display = c;
  PrioritiesOrder.style.display = d;
}

function ChartDisplay(x) {
  check = 1;
  let NewBox = document.createElement("div");
  NewBox.innerHTML = `<div id="BlockChart">${x}</div>`;
  temp.parentNode.insertBefore(NewBox, temp);
}

function simple() {
  if (process.length != 0 && check != 0) {
    for (let i = 0; i < check; i++) {
      document.getElementById("BlockChart").remove();
    }
    check = 0;
  }
  process.forEach((x) => ChartDisplay(x));
  check = process.length;
  let NewBox = document.createElement("tr");
  NewBox.innerHTML = "<th>Job</th>";
  tempTable.parentNode.insertBefore(NewBox, tempTable);
}

function output() {
  process = spaceremove(pro.value);
  arrival = spaceremove(arri.value);
  burst = spaceremove(bur.value);
  guide.innerHTML = "Gantt Chart";
  guide.classList.add("outputDes");
  let temp = selectedAlgo.value;
  if (temp === "First Come First Serve, FCFS") {
    disp("FCFS", "block", "none", "none");
    simple();
  } else if (temp === "Shortest Job First, SJF (non-preemptive)") {
    disp("SJF", "block", "none", "none");
    simple();
  } else if (temp === "Shortest Remaining Time First, SRTF") {
    disp("SRTF", "block", "none", "none");
    simple();
  } else if (temp === "Round-Robin, RR") {
    disp("RR", "block", "block", "none");
    simple();
  } else if (temp === "Priority (non-preemptive)") {
    disp("NPP", "block", "none", "block");
    simple();
  } else if (temp === "Priority (preemptive)") {
    disp("PP", "block", "none", "block");
    simple();
  }
}

solve.addEventListener("click", output);
