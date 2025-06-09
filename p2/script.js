// const users = []; // users empty array of objects 
// let user = {}; // user is an empty object, 
// const showLogin = () => {
//     let str=`
//     <div>
//     <h1>Login Form</h1>
//     <p><div id ="dvMsg"></div>
//     <p><input type="text" id="txtEmail"></p>
//     <p><input type="password" id="txtPass"></p>
//     <p><button onclick='validateUser()'>Log In</button></p>
//     <p><button onclick='showRegister()'>Create Account</button></p>
//     </div>
//     `
//     root.innerHTML = str
// }

// const showRegister = () => {
//       let str=`
//     <h1>Register Form</h1>
//     <p><input type="text" id="txtName"></p>
//      <p><input type="text" id="txtEmail"></p>
//     <p><input type="password" id="txtPass"></p>
//     <button onclick = 'addUser()'>Register</button>
//     <hr>
//     <button onClick='showLogin()'>Already a Member? Login here...</button>
//     `
//     root.innerHTML = str
// }

// const showHome = (user) => {
//     let str = `
//     <h1>Welcome ${user.name} </h1> 
//     <hr>
//     <p><select>
//         <option value = 0>--select--</option> 
//          <option value = 1>Deposit</option>
//          <option value = 2>Withdraw</options>

//          <select></p>
//          <p>
//          <input type = "number" id = "txtAmount">
//          </p>
//          <p><button>Submit</button> 

//     <button onclick = 'showLogin()'> Logout </button>
//     <hr>
//     <p>Current Balance ${user.balance} </p>
//     `;
//     // Dropdown should have deposit and withdraw
//     //To add Logout button and go back to Login
//     root.innerHTML=str; //$ is used to take in variable name from javascript
// }

// const addUser = () =>{
//     // adds the user into a pseudo database 
//     const obj = {
//         name:document.getElementById("txtName").value,
//         mail:document.getElementById("txtEmail").value,
//         pass:document.getElementById("txtPass").value,
//         balance : 0 
//     };
//     //pushes user from register page into the users object 
//     users.push(obj);
//     console.log(users);
//     //Shows Login page 
//     showLogin();
// }

// const validateUser = () =>{
//     //Capturing the email and password
//     let email = document.getElementById("txtEmail").value;
//     let pass = document.getElementById("txtPass").value;
//     console.log(email)
//     console.log(pass)
//     console.log(user.email)
//     console.log(user.pass)

//     //Finding the user
//     const found = users.find(
//         user => user.email === email && user.pass === pass // here pass and email are initialized here and user.pass and user.email are part of the object 
//     ) 
//     console.log(found);
//     //Validating the user 
//     if (found){ // we can use user instead of found for this if condition 
//         showHome(found.name); //to print the username , if we put found entire object gets passed

//     }
//     else{
//         dvMsg.innerHTML = "Access Denied";
//     }
// }
const users = [];
let currentUser = null;

const showLogin = () => {
    const str = `
        <h1>Login Form</h1>
        <p><div id="dvMsg" style="color:red;"></div></p>
        <p><input type="text" id="txtEmail" placeholder="Email"></p>
        <p><input type="password" id="txtPass" placeholder="Password"></p>
        <p><button onclick="validateUser()">Log In</button></p>
        <p><button onclick="showRegister()">Create Account</button></p>
    `;
       root.innerHTML = str;
};

const showRegister = () => {
    const str = `
        <h1>Register Form</h1>
        <p><input type="text" id="txtName" placeholder="Name"></p>
        <p><input type="text" id="txtEmail" placeholder="Email"></p>
        <p><input type="password" id="txtPass" placeholder="Password"></p>
        <p><button onclick="addUser()">Register</button></p>
        <hr>
        <p><button onclick="showLogin()">Already a Member? Login here...</button></p>
    `;
    root.innerHTML = str;
};

const showHome = (user) => {
    currentUser = user;
    const str = `
        <h1>Welcome ${user.name}</h1>
        <hr>
        <select id="actionSelect">
            <option value="0">--select--</option>
            <option value="1">Deposit</option>
            <option value="2">Withdraw</option>
        </select>
        <p><input type="number" id="txtAmount" placeholder="Amount"></p>
        <p>
            <button onclick="doBalance()">Submit</button>
            <button onclick="showLogin()">Logout</button>
        </p>
        <p>Current Balance: ₹<span id="balanceDisplay">${user.balance}</span></p>

        <button onclick ="fundTransferShow()">Fund Transfer</button>
        <p>

    `;
    root.innerHTML = str;
};

const addUser = () => {
    const user = {
        name: document.getElementById("txtName").value,
        email: document.getElementById("txtEmail").value,
        pass: document.getElementById("txtPass").value,
        balance: 0
    };
    users.push(user);
    showLogin();
};

const validateUser = () => {
    const email = document.getElementById("txtEmail").value;
    const pass = document.getElementById("txtPass").value;
    const found = users.find(u => u.email === email && u.pass === pass);

    if (found) {
        showHome(found);
    } else {
        document.getElementById("dvMsg").innerText = "Access Denied!";
    }
};

const doBalance = () => {
    const action = document.getElementById('actionSelect').value;
    const amount = Number(document.getElementById('txtAmount').value);

    if (!action || amount <= 0 || !currentUser) return;

    if (action === "1") {
        currentUser.balance += amount;
    } else if (action === "2") {
        if (currentUser.balance >= amount) {
            currentUser.balance -= amount;
        } else {
            alert("Insufficient balance!");
            return;
        }
    }

    document.getElementById("balanceDisplay").innerText = currentUser.balance;
};

showLogin();

const updateList = () =>{
    const dropdown = document.getElementById("transferSelect")
    dropdown.innerHTML = ""; //clear existing options 

    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.name;
        option.value = user.email;
        option.value = user.balance;
        dropdown.appendChild(option);
    })

}

const fundTransferShow = () =>{
    str =`
    <select id ="
    `
}