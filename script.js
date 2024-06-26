var count = 0;

function add() {
  let input_first_name = document.getElementById("first_name").value,
  input_last_name = document.getElementById("last_name").value,
  input_age = document.getElementById("age").value;

  if (input_first_name == "" || input_last_name == "" || input_age == "") return;
  
  if (input_age < 18) {
    let error = document.createTextNode("Your age is less than 18"),
    paragrapg = document.createElement("p");
    paragrapg.appendChild(error);
    if (document.getElementById("p_error")) {
      document.getElementById("age_box").removeChild(document.getElementById("p_error"));
    }
    paragrapg.setAttribute("id", "p_error");
    document.getElementById("age_box").appendChild(paragrapg);
    return;
  }
  if (document.getElementById("p_error")) {
    document.getElementById("age_box").removeChild(document.getElementById("p_error"));
  }

  let user_data = {
    first_name : input_first_name,
    last_name : input_last_name,
    age : input_age
  };

  
  localStorage.setItem(count, user_data);
  count++

  let text = `${user_data.first_name} ${user_data.last_name}, ${user_data.age} years old`;

  let list = document.getElementById("list"),
  new_list = document.createElement("li"),
  data = document.createTextNode(text);
  new_list.appendChild(data);
  list.appendChild(new_list);

  input_first_name = document.getElementById("first_name").value = "";
  input_last_name = document.getElementById("last_name").value = "";
  input_age = document.getElementById("age").value = "";
}