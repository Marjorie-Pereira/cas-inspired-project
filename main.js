const female = document.getElementById('female');
const male = document.getElementById('male');
const sim = document.getElementById('sim');

female.addEventListener('click', (e) => {
    sim.style.backgroundColor = 'red';
    sim.innerText = 'female sim';
})
male.addEventListener('click', (e) => {
    sim.style.backgroundColor = 'aliceblue';
    sim.innerText = 'male sim';
})

console.log();