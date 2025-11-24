// CHANGE A TEAM NAME
let newATeam = document.querySelector(".aNamn");

const bytA = document.querySelector("#bytA");

const btnA = document.querySelector(".btnA");

btnA.addEventListener("click", () => {
    newATeam.innerText = bytA.value

    document.querySelector("#bytA").value = "";
})


// CHANGE B TEAM NAME
let newBTeam = document.querySelector(".bNamn");

const bytB = document.querySelector("#bytB");

const btnB = document.querySelector(".btnB");

btnB.addEventListener("click", () => {
    newBTeam.innerText = bytB.value

    document.querySelector("#bytB").value = "";
})


// CREATE INPUT FOR PLAYERS AND AN ADD BUTTON
let newPlayer = document.querySelector("#playerAdd");
let btnAdd = document.querySelector(".btnAdd");

// CREATE UL (UNORDERED LISTS) FOR EACH TEAM
const ulA = document.querySelector(".aSpelare");
const ulB = document.querySelector(".bSpelare");

// CREATE LI (LIST ITEMS) FOR THE PLAYERS WHEN ADD BUTTON IS CLICKED
btnAdd.addEventListener("click", () => {
    let li = document.createElement('li')
    
// ADD TEAMPLAYERS (MAXIMUM 10)
// IF MORE THEN 5 IN FIRST TEAM, NEW PLAYERS ARE PUT IN THE SECOND TEAM
// ALERT IF MORE THEN 10 PLAYERS IN TOTAL
    if (ulA.children.length < 5) {
        ulA.append(li)
    } else if (ulB.children.length < 5) {
        ulB.append(li)
    } else {
        alert("You've maxed out both teams!")
    }

// CREATE A YELLOW LEAVE BUTTON
const leave = document.createElement("button")
    leave.innerText = "Leave Team"
    leave.style.backgroundColor = "yellow"

// CREATE A GREEN-ISH CHANGE TEAM BUTTON
const change = document.createElement("button")
    change.innerText = "Change Team"
    change.style.backgroundColor = "chartreuse"

// CREATE A PINK CHANGE PLAYER NAME BUTTON    
const newName = document.createElement("button")
    newName.innerText = "Change Name"
    newName.style.backgroundColor = "pink"

// WHEN INPUT OF NEW PLAYER IS ADDED TO THE LI, THE LEAVE BUTTON + CHANGE TEAM BUTTON WILL ALSO BE ADDED
    li.innerText = newPlayer.value
    li.append(leave, change, newName)

// LEAVE TEAM WHEN LEAVE BUTTON IS CLICKED
    leave.addEventListener("click", () => {
        li.remove();
    })

// CHANGE TEAM WHEN CHANGE TEAM BUTTON IS CLICKED
    change.addEventListener("click", () => {
        let currentTeam = li.parentElement;

        if (currentTeam.id === "ulA") {
            if (ulB.children.length < 5) {
                ulB.append(li);
            } else {
                alert("The other team is full!");
            }
        } else {
            if (ulA.children.length < 5) {
                ulA.append(li);
            } else {
                alert("The other team is full!");
            }
        }
    })

    document.querySelector("#playerAdd").value = "";
});
