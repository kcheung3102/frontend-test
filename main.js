function toggleSpinner() {
    const btnSpin = document.getElementById('btn-spin');
    const spinBox = document.getElementById('spinning-box');
    if(btnSpin.innerText === "Pause"){
        btnSpin.innerText = "Start";
        spinBox.style.animationPlayState= "Paused";
    } else {
        btnSpin.innerText = "Pause";
        spinBox.style.animationPlayState='Running';
    }
    
}

// btnSping.innerText === "Pause" ? btn.Spin.innerText = "Start" : btnSpin.innerText = "Paused";

