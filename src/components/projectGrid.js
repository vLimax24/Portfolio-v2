document.addEventListener("DOMContentLoaded", function () {
    const projectContainer = document.getElementById("projectContainer");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const sidebar = document.getElementById("projectSidebar");

    // Sample projects data (replace with your actual project data)
    const projects = [
        /*
            SCHEMA:

            {
                title: string
                image:  string
                websiteLink: string
                additionalInfo: string
            }
        */
        {
            title: "Project 1",
            image: "https://plus.unsplash.com/premium_photo-1680902988871-70d583ca1e95?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            websiteLink: "https://example.com/project1",
            additionalInfo: "Further information about Project 1.",
        },
        {
            title: "Project 1",
            image: "https://placehold.co/100x200",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            websiteLink: "https://example.com/project1",
            additionalInfo: "Further information about Project 2.",
        },
        {
            title: "Project 1",
            image: "https://placehold.co/100x200",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            websiteLink: "https://example.com/project1",
            additionalInfo: "Further information about Project 3.",
        },
        {
            title: "Project 1",
            image: "https://placehold.co/100x200",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            websiteLink: "https://example.com/project1",
            additionalInfo: "Further information about Project 4.",
        },
        {
            title: "Project 1",
            image: "https://placehold.co/100x200",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            websiteLink: "https://example.com/project1",
            additionalInfo: "Further information about Project 5.",
        },
    ];

    let projectsDisplayed = 4; // Number of projects initially displayed
    const projectsPerPage = 4; // Number of projects to display per click

    let counter = 1;
    setInterval(function() {
        document.getElementById('radio' + counter).checked -= true;
        counter++
        if (counter > 4) {
            counter = 1
        }
    }, 4000)

    function displayProjects() {
        // Display projects in rows
        for (let i = 0; i < projectsDisplayed; i++) {
            if (i % 2 === 0) {
                // Create a new row for every 2 projects
                const projectRow = document.createElement("div");
                projectRow.className = "projectRow";
                projectContainer.appendChild(projectRow);
            }
    
            const projectBox = document.createElement("div");
            projectBox.className = "projectBox";
    
            // Left side of the project box
            const projectBoxLeft = document.createElement("div");
            projectBoxLeft.className = "projectBoxLeft";
    
            // Create an H1 title element
            const projectTitle = document.createElement("h1");
            projectTitle.classList = 'projectTitle';
            projectTitle.textContent = projects[i].title;
    
            // Create a "Learn More" button
            const learnMoreBtn = createButton("Learn More");
            learnMoreBtn.addEventListener("click", function () {
                openSidebar(projects[i].image);
            });
    
            // Create a "Website" button
            const websiteLinkBtn = createButton("Website");
            websiteLinkBtn.addEventListener("click", function () {
                openLinkToSite(projects[i].websiteLink);
            });

            websiteLinkBtn.classList.add('projectBtn')
            learnMoreBtn.classList.add('projectBtn')
    
            // Append elements to projectBoxLeft
            projectBoxLeft.appendChild(projectTitle);
            projectBoxLeft.appendChild(learnMoreBtn);
            projectBoxLeft.appendChild(websiteLinkBtn);
    
            // Right side of the project box
            const projectBoxRight = document.createElement("div");
            projectBoxRight.className = "projectBoxRight";
    
            // Create an image element
            const projectImage = document.createElement("img");
            projectImage.src = projects[i].image;
            projectImage.alt = "";
    
            // Append image to projectBoxRight
            projectBoxRight.appendChild(projectImage);
    
            // Append projectBoxLeft and projectBoxRight to projectBox
            projectBox.appendChild(projectBoxLeft);
            projectBox.appendChild(projectBoxRight);
    
            // Append the project box to the last row
            projectContainer.lastChild.appendChild(projectBox);
        }
    }

    function createButton(text) {
        const button = document.createElement("button");
        button.textContent = text;
        return button;
    }

    function openLinkToSite(websiteLink) {
        // Open the website link in a new tab
        window.open(websiteLink, "_blank");
    }

    function openSidebar(info) {
        // Set sidebar content
        sidebar.innerHTML = `
        <button id='closeBtn'>&#10006;</button>
        <div class="slider">
        <div class="slides">
            <input type="radio" name="radio-btn" id="radio1">
            <input type="radio" name="radio-btn" id="radio2">
            <input type="radio" name="radio-btn" id="radio3">
            <input type="radio" name="radio-btn" id="radio4">
            <input type="radio" name="radio-btn" id="radio5">

            <div class="slide first">
                <img src=${info} alt="">
            </div>
            <div class="slide">
                <img src=${info} alt="">
            </div>
            <div class="slide">
                <img src=${info} alt="">
            </div>
            <div class="slide">
                <img src=${info} alt="">
            </div>
            <div class="slide">
                <img src=${info} alt="">
            </div>
            <div class="navigation-auto">
                <div class="auto-btn1"></div>
                <div class="auto-btn2"></div>
                <div class="auto-btn3"></div>
                <div class="auto-btn4"></div>
                <div class="auto-btn5"></div>
            </div>
        </div>

        <div class="navigation-manual">
            <label for="radio1" class="manual-btn"></label>
            <label for="radio2" class="manual-btn"></label>
            <label for="radio3" class="manual-btn"></label>
            <label for="radio4" class="manual-btn"></label>
            <label for="radio5" class="manual-btn"></label>
        </div>
    </div>
        
        `;
    
        // Open the sidebar with slide-in animation
        sidebar.style.width = "100%";
        sidebar.style.opacity = "1";
        sidebar.style.transition = "width 0.5s"
        sidebar.style.zIndex = '1000'
    
        // Attach the event listener to the close button
        const closeBtn = document.getElementById("closeBtn");
        closeBtn.addEventListener("click", closeSidebar);
    }

    function closeSidebar() {
        // Set the opacity to 0
        
    
        // Set the transition for slide-out animation
        sidebar.style.transition = "width 0.5s";
    
        // Close the sidebar with slide-out animation
        sidebar.style.width = "0";
        sidebar.innerHTML=''
        sidebar.style.zIndex = '99999999999999999999999999999999999999999'
    
        // Set a timeout to reset transition and opacity after the animation
        setTimeout(function () {
            sidebar.style.transition = "none";
            sidebar.style.opacity = "0";
        }, 500); // Adjust the duration to match the transition duration
    }

    // Initial display
    displayProjects();

    // Load more button click event
    loadMoreBtn.addEventListener("click", function () {
        // Check if there are more projects to display
        if (projectsDisplayed < projects.length) {
            // Increment the number of projects to display
            projectsDisplayed += projectsPerPage;

            // Remove existing projects
            while (projectContainer.firstChild) {
                projectContainer.removeChild(projectContainer.firstChild);
            }

            // Display additional projects
            displayProjects();
        } else {
            console.log('all projects displayed')
        }
    });
});
