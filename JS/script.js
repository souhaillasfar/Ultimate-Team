let players = [];
const addPlayer = (ev)=>{
    ev.preventDefault();
    let player = {
          id: Date.now(),
          name: document.getElementById('name').value,
          position: document.getElementById('position').value
    }
    players.push(player);
    document.querySelector('form').reset();

    console.warn('added',{players});

    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' +JSON.stringify(players, '\t' , 2);

    localStorage.setItem('PlayersList',JSON.stringify(players))
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addPlayer)
})