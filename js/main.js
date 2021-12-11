let sendbut = document.querySelector("#send");
let text = document.querySelector("#text");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
sendbut.addEventListener("click",(event)=>{
	let nameReg = /([^\d])/;
	let emailReg = /[\w.-_\d]+@(\w{2,12}).(\w{2,5})/;
	let req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(this.readystate == 4 && this.status ==200){
			alert("all done");
			event.preventDefault();
		}
	};
	req.open("POST","send.php",false);
	let data = newFormData();
	data.append("name",name.value);
	data.append('email',email.value);
	data.append('text',text.value);
	req.send(data);
});