function calculateDemeritPoints() {
    const speedLimit = 70;
    const speedInput = document.getElementById("speedInput").value;
    const speed = parseFloat(speedInput);
    let demeritPoints = 0;

    if (speed <= speedLimit) {
        document.getElementById("result").innerText = "Ok";
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / 5);
        document.getElementById("result").innerText = "Points: " + demeritPoints;
    }

    if (demeritPoints > 12) {
        document.getElementById("result").innerText = "License suspended";
    }
}