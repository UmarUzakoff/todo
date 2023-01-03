let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
  
    formValidation();
  });

  let formValidation = () => {
    if (input.value === "") {
      msg.innerHTML = "Post cannot be empty";
      console.log("failure");
    } else {
      console.log("success");
      msg.innerHTML = "";

      acceptData();
    }
  };

  let data = {};

  let acceptData = () => {
    data["text"] = input.value;
    console.log(data);

    createPost();
  };

  let createPost = () => {
    posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        <i onClick="completedPost(this)" class="fas fa-check-circle"></i>
        <i onClick="undoPost(this)" class="fas fa-undo"></i>
      </span>
    </div>
    `;
    input.value = "";
  };

  let deletePost = (e) => {
    e.parentElement.parentElement.remove();
  };

  let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
    // document.getElementById("posts").style.textDecoration = "line-through";
  };

//   task_completed_button.addEventListener('click', ()=>{
            
//     task_input.style.textDecoration="line-through";
//     task_input.setAttribute("readonly", "readonly");
   
// })

    let completedPost = (e) => {
        e.parentElement.parentElement.style.textDecoration = "line-through";

        // data.style.textDecoration = "line-through";
        e.parentElement.parentElement.setAttribute("readonly", "readonly");
    }

    let undoPost = (e) => {
        e.parentElement.parentElement.style.textDecoration = "none";

        // data.style.textDecoration = "line-through";
        e.parentElement.parentElement.setAttribute("readonly", "readonly");
    }