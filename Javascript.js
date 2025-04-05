function dyname()
{document.getElementById("top-name").innerHTML="<p>hello</p>";


}

function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("show");
  }

  function showLogoutModal() {
    document.getElementById("logoutModal").style.display = "block";
  }

  function hideLogoutModal() {
    document.getElementById("logoutModal").style.display = "none";
  }

  function logout() {
    window.location.href = "index.html";
  }

  window.onclick = function(event) {
    const modal = document.getElementById("logoutModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  window.onclick = function(event) {
    const modal = document.getElementById("logoutModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  window.onclick = function(event) {
    const modal = document.getElementById("logoutModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }};

    function validateLogin(event) {
        event.preventDefault(); // Prevent form from submitting normally
  
        const userId = document.getElementById("userId").value.trim();
        const password = document.getElementById("password").value.trim();
        const errorDiv = document.getElementById("error");
        const successDiv = document.getElementById("success");
  
        errorDiv.style.display = "none";
        successDiv.style.display = "none";
  
        if (!/^\d+$/.test(userId)) {
          errorDiv.textContent = "User ID must be numeric only.";
          errorDiv.style.display = "block";
          return;
        }
  
        if (userId.length > 5) {
          errorDiv.textContent = "User ID must not exceed 5 digits.";
          errorDiv.style.display = "block";
          return;
        }
  
        if (password.length === 0) {
          errorDiv.textContent = "Please enter your Password.";
          errorDiv.style.display = "block";
          return;
        }
  
        if (password.length < 6 || password.length > 30) {
          errorDiv.textContent = "Password must be between 6 and 30 characters.";
          errorDiv.style.display = "block";
          return;
        }
  
        const credentials = {
          "12345": "pass123",
          "09876": "pass234",
          "010203": "pass345"
        };
        const credUser={
"12345":"Rahul",
"09876":"Yash",
"010203":"Esha"

        };
  



        if (!credentials.hasOwnProperty(userId)) {
          errorDiv.textContent = "User ID not found.";
          errorDiv.style.display = "block";
          return;
        }
  
        if (credentials[userId] !== password) {
          errorDiv.textContent = "Incorrect password.";
          errorDiv.style.display = "block";
          return;
        }

        successDiv.textContent = "Login successful! Redirecting...";
        successDiv.style.display = "block";
      const nameOut = credUser[userId];
document.getElementById
        setTimeout(() => {
          window.location.href = "homepage.html";
        }, 1500);
      }

      function validateForm() {
        const fname = document.getElementById("fname").value.trim();
        const lname = document.getElementById("lname").value.trim();
        const dob = document.getElementById("dob").value;
        const contact = document.getElementById("contact").value.trim();
        const email = document.getElementById("email").value.trim();
        const successPopup = document.getElementById("successPopup");
  
        // Clear previous error messages
        document.getElementById("fnameError").textContent = "";
        document.getElementById("lnameError").textContent = "";
        document.getElementById("dobError").textContent = "";
        document.getElementById("contactError").textContent = "";
        document.getElementById("emailError").textContent = "";
        successPopup.style.display = "none";
  
        let valid = true;
  
        // Required fields
        if (!fname) {
          document.getElementById("fnameError").textContent = "First name is required.";
          valid = false;
        }
  
        if (!lname) {
          document.getElementById("lnameError").textContent = "Last name is required.";
          valid = false;
        }
  
        if (!dob) {
          document.getElementById("dobError").textContent = "Date of birth is required.";
          valid = false;
        } else {
          const enteredDate = new Date(dob);
          const minDate = new Date("1924-01-01");
          if (enteredDate < minDate) {
            document.getElementById("dobError").textContent = "Choose a date greater than 01/01/1924.";
            valid = false;
          }
        }
  
        // Contact validation
        const contactPattern = /^[6-9]\d{9}$/;
        if (!contactPattern.test(contact)) {
          document.getElementById("contactError").textContent = "Enter a valid contact number.";
          valid = false;
        }
  
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          document.getElementById("emailError").textContent = "Enter a valid mail ID.";
          valid = false;
        }
  
        if (valid) {
          const passengerId = Math.floor(10000 + Math.random() * 90000); // 5-digit numeric ID
          const password = fname + "@123";
          successPopup.innerHTML = `
            <strong>Passenger registration successful!</strong><br><br>
            Passenger ID: <strong>${passengerId}</strong><br>
            Password: <strong>${password}</strong><br><br>
            <a href="index.html" class="login-button">Login</a>
          `;
          successPopup.style.display = "block";
          document.getElementById("registrationForm").reset();
        }
      }
  
      function confirmReset() {
        const confirmAction = confirm("Are you sure you want to reset all fields?");
        if (confirmAction) {
          document.getElementById("registrationForm").reset();
          document.getElementById("successPopup").style.display = "none";
  
          // Clear errors
          document.getElementById("fnameError").textContent = "";
          document.getElementById("lnameError").textContent = "";
          document.getElementById("dobError").textContent = "";
          document.getElementById("contactError").textContent = "";
          document.getElementById("emailError").textContent = "";
        }
      }