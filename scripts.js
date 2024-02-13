// helper function to semantically display the returned data
function displayUsers(output, id, data){
    // determine which container on the page we'll be dealing with/the call type
    

    // to track the currently displayed page
    let currentPage = 1;

    // the section where we'll add the users
    let userContainer = document.getElementById(output);

    // the div of buttons for pagination, we'll insert the users before these, and reveal them once we have users on the page
    let btnNav = document.getElementById(id);

    // reveal the pagination before we insert the users into the section before it
    btnNav.removeAttribute("hidden");

    // the arrays to hold the users for each page
    let page1 = [];
    let page2 = [];
    let page3 = [];
    let page4 = [];

    // split the returned data into four arrays, each will represent a "page" of users with three on each page
    // TO DO: divide the data returned into four arrays
    for(let i = 0; i < 12; i++){
        if(i < 3){
            page1.push(data.results[i]);
        }else if(i < 6){
            page2.push(data.results[i]);
        }else if(i <9){
            page3.push(data.results[i]);
        }else{
            page4.push(data.results[i]);
        }
    }

    // displays each user in a section, with semantic markup for their name, email address, and image
    function displayPage(currentPage){
        // TO DO - complete the code to display the JSON data to the page
        for(let user of currentPage){

            // iterate through the data for the page's array and display it on the page
        

            // create a container to store each user's content as we build our output
            let userSection = document.createElement("section");
            

            // add a class to that section/each section containing a user
            userSection.classList.add("user");
            

            // create the image that will hold the user image in each section
            let profilePhoto = document.createElement("img");

            // set the image attributes so that it will display the correct image
            profilePhoto.src = `${user.picture.large}`;
            profilePhoto.alt = `${user.name.first} ${user.name.last}`;
            
            
            // add the image to the current user section
            userSection.appendChild(profilePhoto);
            

            // create the heading to store the user name in each section
            let userName = document.createElement("h3");

            
            // add the name to the element
            userName.textContent = `${user.name.first} ${user.name.last}`;
            
            
            // add the name to the section after the image
            userSection.appendChild(userName);
            

            // create the email address link for the user in each section
            let emailAddress = document.createElement("a");
            
            
            // set the link text and attributes
            emailAddress.href = `mailto:${user.email}`;
            emailAddress.textContent = `${user.email}`;
            
            // add the email address to the section
            userSection.appendChild(emailAddress);
            
            

            // add the completed user section to the page before the pagination controls
            userContainer.appendChild(userSection);

            // empty the section of content to get it ready for the next user
            userSection.nodeValue = "";
        }
            
        
    }

    // get each of the links from the pagination and add event listeners to handle the pagination
    let buttons = document.querySelectorAll("#" + id + " .btn");

    // function to adjust the current-page class based on parameters passed in (current page)
    function updateBtnStylesAndAria(newPage){
        // update the previous and next buttons, depending on which page we're moving to
        if(newPage === 1){
            // update the aria-label on the previous link
            buttons[0].ariaLabel = "Go to the Previous page, page 4";

            // update the aria-label on the next link
            buttons[5].ariaLabel = "Go to the Next page, page 2";

        }else if(newPage === 4){
            // update the aria-label on the previous link
            buttons[0].ariaLabel = "Go to the Previous page, page 3";

            // update the aria-label on the next link
            buttons[5].ariaLabel = "Go to the Next page, page 1";
        }else{
            // update the aria-label on the previous link
            buttons[0].ariaLabel = "Go to the Previous page, page " + (newPage - 1);

            // update the aria-label on the next link
            buttons[5].ariaLabel = "Go to the Next page, page " + (newPage + 1);

        }

        // for all of the numbered buttons, remove the current page class
        for(let i = 1; i < 5; i++){
            buttons[i].classList.remove("current-page");
            buttons[i].ariaCurrent = "false";
            buttons[i].ariaLabel = "Go to page " + i;
        }

        // add the current page class to the button at the given index, update the aria-current attribute, update aria-label attribute
        buttons[newPage].classList.add("current-page");
        buttons[newPage].ariaCurrent = "true";
        buttons[newPage].ariaLabel = "Current Page, page " + newPage;
    }

    // display the first page by default when the content loads, after clearing out any previous content just in case, and make sure to add the currentPage class to the button for page one and remove from all of the other buttons
    userContainer.nodeValue = "";
    displayPage(page1);
    updateBtnStylesAndAria(1);

    // handle the user clicking to visit the previous page
    buttons[0].addEventListener("click", function(e){
        // prevent default link behavior
        e.preventDefault();

        // determine the current page, then call to display the previous one
        if(currentPage === 1){
            userContainer.innerHTML = "";
            displayPage(page4);
            currentPage = 4;
            updateBtnStylesAndAria(4);
        }else if(currentPage === 2){
            userContainer.innerHTML = "";
            displayPage(page1);
            currentPage = 1;
            updateBtnStylesAndAria(1);
        }else if(currentPage === 3){
            userContainer.innerHTML = "";
            displayPage(page2);
            currentPage = 2;
            updateBtnStylesAndAria(2);
        }else{
            userContainer.innerHTML = "";
            displayPage(page3);
            currentPage = 3;
            updateBtnStylesAndAria(3);
        }
    });

    // handle when the user clicks to view page 1
    buttons[1].addEventListener("click", function(e){
        // prevent default link behavior
        e.preventDefault();
        
        userContainer.innerHTML = "";
        displayPage(page1);
        currentPage = 1;
        updateBtnStylesAndAria(1);
    });

    // handle when the user clicks to view page 2
    buttons[2].addEventListener("click", function(e){
        // prevent default link behavior
        e.preventDefault();
        
        userContainer.innerHTML = "";
        displayPage(page2);
        currentPage = 2;
        updateBtnStylesAndAria(2);
    });

    // handle when the user clicks to view page 3
    buttons[3].addEventListener("click", function(e){
        // prevent default link behavior
        e.preventDefault();
        
        userContainer.innerHTML = "";
        displayPage(page3);
        currentPage = 3;
        updateBtnStylesAndAria(3);
    });

    // handle when the user clicks to view page 4
    buttons[4].addEventListener("click", function(e){
        // prevent default link behavior
        e.preventDefault();
        
        userContainer.innerHTML = "";
        displayPage(page4);
        currentPage = 4;
        updateBtnStylesAndAria(4);
    });

    // handle the user clicking to visit the next page
    buttons[5].addEventListener("click", function(e){
        // prevent default link behavior
        e.preventDefault();
        
        // determine the current page, then call to display the previous one
        if(currentPage === 1){
            userContainer.innerHTML = "";
            displayPage(page2);
            currentPage = 2;
            updateBtnStylesAndAria(2);
        }else if(currentPage === 2){
            userContainer.innerHTML = "";
            displayPage(page3);
            currentPage = 3;
            updateBtnStylesAndAria(3);
        }else if(currentPage === 3){
            userContainer.innerHTML = "";
            displayPage(page4);
            currentPage = 4;
            updateBtnStylesAndAria(4);
        }else{
            userContainer.innerHTML = "";
            displayPage(page1);
            currentPage = 1;
            updateBtnStylesAndAria(1);
        }
    });
}

// https://randomuser.me/api/?results=12&nat=us,gb

// fetch call to the API
// TO DO - Complete the code to call the API and display the returned data on the page in the correct place
fetch("https://randomuser.me/api/?results=12&nat=us,gb")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.results);
        displayUsers("userPage1", "pagination1", data);
    })
    .catch(err => console.error(err.message));


// async/await call to the same API
// TO DO - Complete the code to call the API using an async function
async function getUsers(){
    let response = await fetch("https://randomuser.me/api/?results=12&nat=us,gb");

    if(response.error){
        throw new Error(`${response.error}`);
    }

    return await response.json();
}

getUsers()
    .then(json => {
        console.log(json);

        displayUsers("userPage2", "pagination2", json);
    })
    .catch(err => console.error(err.message));
// call our async function and handle the returned promise 
// TO DO - Complete the code to handle the data returned from the API and display the returned data on the page in the correct place