let insert = document.querySelector(`#inser`)
        let key = document.querySelector(`.key`);
        window.addEventListener('keydown', (e) => {
            key.innerHTML = `
            <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Keyname</th>
  </tr>
  <tr>
    <td>${e.key===" " ? 'space' :e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
            `;
        })