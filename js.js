const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})  

// async function basiclogin (email, password) {
//     const response = await zlFetch.post(loginEndpoint, {
//       auth: {
//         username: email,
//         password: password
//       },
//       body: { /.../ }
//     })
//   }