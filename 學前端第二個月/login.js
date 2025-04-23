const toggle = function(e){
    e.preventDefault()
    document.getElementById("form-2").classList.toggle('hidden');
    document.getElementById("form-1").classList.toggle('hidden');
     
}
document.getElementById("signbn").addEventListener('click',toggle)


document.getElementById("loginbn").addEventListener('click', toggle)

document.querySelector(".contact-form button").addEventListener("click", function (event) {
    event.preventDefault();


    let num = document.getElementById("number").value.trim()
    let password = document.getElementById("password").value.trim()
    let pwsswordch = document.getElementById("chpws").value.trim()


    let formData = new FormData();
    formData.append("number",num);
    formData.append("password",password);

    fetch("team.php",{
        method:"POST",
        body:formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data)
        if(data.includes("註冊成功")){
            window.location.href ="nembertop.html"
        }
    })
    .catch(error => console.log("錯誤",error))
})

