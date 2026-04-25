function changeDetails() {
    let newName = prompt("Enter your new name:");
    let newDetail = prompt("Enter your new details:");

    if (newName) {
        document.getElementById("name").innerText = newName;
    }

    if (newDetail) {
        document.getElementById("details").innerText = newDetail;
    }

    alert("Details updated!");
}
