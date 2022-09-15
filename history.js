const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount) {
  //time parseInt
  const timeParseInt = parseInt(timeTaken);
  const newRow = document.createElement("div");
  newRow.classList.add("card"); timeTaken

  newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <p>You took: <span class="bold">${timeParseInt}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeParseInt, errorCount });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("container");

    newRow.innerHTML = `
    <div id="row-color" class="row py-4 px-2 my-2">
     <div class="col-lg-6 col-sm-12">  <h5>${test.questionText}</h5></div>
     <div class="col-lg-3 col-sm-12"><p>You took: <span class="bold">${test.timeParseInt}</span> seconds</p></div>
     <div class="col-lg-3 col-sm-12"><p>You made <span class="bold red">${test.errorCount}</span> mistakes</p></div>
      
    </div>
  


  `;

    histories.appendChild(newRow);
  });
}