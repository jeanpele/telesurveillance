const firebaseConfig = {
  apiKey: "AIzaSyC0_j9dyQo4-KYP0jAEcPHu2TzWJAtfZ10",
  authDomain: "surv-ce149.firebaseapp.com",
  databaseURL: "https://surv-ce149-default-rtdb.firebaseio.com",
  projectId: "surv-ce149",
  storageBucket: "surv-ce149.appspot.com",
  messagingSenderId: "849419198374",
  appId: "1:849419198374:web:c198804af4aed8d396b967"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.getElementById('searchButton').addEventListener('click', function() {
    const a = document.getElementById('searchBox').value;
    if (a) {
        const bpmRef = database.ref(a + '/BPM');
        const o2Ref = database.ref(a + '/o2');
        const tempRef = database.ref(a + '/temp');
        
        bpmRef.on('value', (snapshot) => {
            const bpm = snapshot.val();
            console.log(bpm);
            document.getElementById('bpm').innerText = parseFloat(bpm).toFixed(2) + ' BPM';
        });

        o2Ref.on('value', (snapshot) => {
            const o2 = snapshot.val();
            document.getElementById('o2').innerText = parseFloat(o2).toFixed(2) + ' %';
        });

        tempRef.on('value', (snapshot) => {
            const temp = snapshot.val();
            document.getElementById('temp').innerText = parseFloat(temp).toFixed(2) + ' °C';
        });
    } else {
        alert('Please enter a valid path.');
    }
});
