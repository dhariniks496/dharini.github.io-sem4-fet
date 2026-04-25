function changeDetails() {
    let newName = prompt("Enter your new name:");
    let newDetail = prompt("Enter your new details:");

    if (!newName || !newDetail) {
        alert("Details not updated! PLEASE ENTER!");
        return;
    }

    document.getElementById("name").innerText = newName;
    document.getElementById("details").innerText = newDetail;

    alert("Details updated!");
}
