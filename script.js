//your code here
const input=document.getElementById("newTodoInput");
const button=document.getElementById("addTodoBtn");
const ol=document.getElementById("todoList");

button.addEventListener("click", () =>{
	const text = input.value.trim();
    if (!text) return; 
	const list=document.createElement("li");
	list.textContent=text;
    ol.appendChild(list);
	input.value = "";
});
