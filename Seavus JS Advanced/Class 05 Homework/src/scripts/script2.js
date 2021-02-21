let timesCalled = 0;
let navigationService = {
    peopleBtn : document.getElementById("peopleBtn"),
    shipBtn : document.getElementById("shipsBtn"),
    planetsBtn : document.getElementById("planetsBtn"),
    nextBtn : document.getElementById("nextBtn"),
    previousBtn : document.getElementById("prevBtn"),
    currentPage: 1,
    pageType: "",
    registerListeners: function() {
        this.peopleBtn.addEventListener("click", function() {
            if(navigationService.pageType === "people") return;
            // if (timesCalled > 10){
            //     console.log(`yep`);
            //     return;
            // }

            uiService.toggleLoader(true);
            starWarsApiService.getPeople(1);
            navigationService.currentPage = 1
            navigationService.pageType = "people"
        }),
        this.shipBtn.addEventListener("click", function() {
            if(navigationService.pageType === "ships") return;
            // if (timesCalled > 10){
            //     console.log(`yep`);
            //     return;
            // }
            
            uiService.toggleLoader(true);
            starWarsApiService.getShips(1);
            navigationService.currentPage = 1
            navigationService.pageType = "ships"
        }),
        this.planetsBtn.addEventListener("click", function() {
            if(navigationService.pageType === "planets") return;
            // if (timesCalled > 10){
            //     console.log(`yep`);
            //     return;
            // }
            
            uiService.toggleLoader(true);
            starWarsApiService.getPlanets(1);
            navigationService.currentPage = 1
            navigationService.pageType = "planets"
        }),
        this.nextBtn.addEventListener("click", this.nextPage),
        this.previousBtn.addEventListener("click", this.previousPage)
    },
    nextPage: function() {
        // if (timesCalled > 10 && sett){
        //     console.log(`yep`);
        //     return;
        // }
        navigationService.currentPage++;
        uiService.toggleLoader(true)
        if (navigationService.pageType === "people") starWarsApiService.getPeople(navigationService.currentPage)
        if (navigationService.pageType === "ships") starWarsApiService.getShips(navigationService.currentPage)
        if (navigationService.pageType === "planets") starWarsApiService.getPlanets(navigationService.currentPage)
    },
    previousPage: function() {
        // if (timesCalled > 10){
        //     console.log(`yep`);
        //     return;
        // }
        navigationService.currentPage--;
        uiService.toggleLoader(true)
        if (navigationService.pageType === "people") starWarsApiService.getPeople(navigationService.currentPage)
        if (navigationService.pageType === "ships") starWarsApiService.getShips(navigationService.currentPage)
        if (navigationService.pageType === "planets") starWarsApiService.getPlanets(navigationService.currentPage)
    },
    navButtonsCheck: function(response) {
        if (response.next === null || timesCalled > 10) {
            this.nextBtn.style.display = "none"
        } else {
            this.nextBtn.style.display = "block"
        }

        if (response.previous === null || timesCalled > 10) {
            this.previousBtn.style.display = "none"
        } else {
            this.previousBtn.style.display = "block"
        }
    }
}

let starWarsApiService = {
    url: "https://swapi.dev/api/",
    getPeople: function(page) {
        if (timesCalled > 10){
            console.log(`yep`);
            uiService.errorMessage("im trying ok");
            uiService.toggleLoader(false)
            return;
        }
        let peopleUrl = `${this.url}people/?page=${page}`;
        $.ajax({
            url: peopleUrl,
            success: function(response) {
                //console.log("success")
                //console.log(response)
                navigationService.navButtonsCheck(response)
                uiService.loadPeoplePage(response.results)
            },
            error: function(response) {
                console.warn("error has occured")
            },
            complete: function() {
                uiService.toggleLoader(false)
            }
        })
        timesCalled++;
    },
    getShips: function(page) {
        if (timesCalled > 10){
            console.log(`yep`);
            uiService.errorMessage("im trying ok");
            uiService.toggleLoader(false)
            return;
        }
        let shipsUrl = `${this.url}starships/?page=${page}`;
        $.ajax({
            url: shipsUrl,
            success: function(response) {
                //console.log("success")
                //console.log(response)
                navigationService.navButtonsCheck(response)
                uiService.loadShipsPage(response.results)
            },
            error: function(response) {
                console.warn("error has occured")
            },
            complete: function() {
                uiService.toggleLoader(false)
            }
        })
        timesCalled++;
    },
    getPlanets: function(page) {
        if (timesCalled > 10){
            console.log(`yep`);
            uiService.errorMessage("im trying ok");
            uiService.toggleLoader(false)
            return;
        }
        let planetsUrl = `${this.url}planets/?page=${page}`;
        $.ajax({
            url: planetsUrl,
            success: function(response) {
                //console.log("success")
                //console.log(response)
                navigationService.navButtonsCheck(response)
                uiService.loadPlanetsPage(response.results)
            },
            error: function(response) {
                console.warn("error has occured")
            },
            complete: function() {
                uiService.toggleLoader(false)
            }
        })
        timesCalled++;
    }
}

let uiService = {
    resultElement: document.getElementById("result"),
    loader: document.getElementById("loader"),
    loadPeoplePage: function(data) {
        this.resultElement.innerHTML = "";
        this.resultElement.innerHTML += `
            <div class="row yellow padding">
                <div class="col-md-3">Name</div>
                <div class="col-md-2">Height</div>
                <div class="col-md-2">Mass</div>
                <div class="col-md-2">Gender</div>
                <div class="col-md-2">Birth Year</div>
                <div class="col-md-1">Films</div>
            </div>
        `;
        for (let person of data) {
            this.resultElement.innerHTML += `
            <div class="row white padding">
                <div class="col-md-3">${person.name}</div>
                <div class="col-md-2">${person.height}</div>
                <div class="col-md-2">${person.mass}</div>
                <div class="col-md-2">${person.gender}</div>
                <div class="col-md-2">${person.birth_year}</div>
                <div class="col-md-1">${person.films.length}</div>
            </div>
            `;
        }
    },
    loadShipsPage: function(data) {
        this.resultElement.innerHTML = "";
        this.resultElement.innerHTML += `
            <div class="row yellow padding">
                <div class="col-md-3">Name</div>
                <div class="col-md-2">Model</div>
                <div class="col-md-2">Manufacturer</div>
                <div class="col-md-2">Cost</div>
                <div class="col-md-2">Capacity</div>
                <div class="col-md-1">Class</div>
            </div>
        `;
        for (let ship of data) {
            this.resultElement.innerHTML += `
            <div class="row white padding">
                <div class="col-md-3">${ship.name}</div>
                <div class="col-md-2">${ship.model}</div>
                <div class="col-md-2">${ship.manufacturer}</div>
                <div class="col-md-2">${ship.cost_in_credits}</div>
                <div class="col-md-2">${ship.passengers}</div>
                <div class="col-md-1">${ship.starship_class}</div>
            </div>
            `;
        }
    },
    loadPlanetsPage: function(data) {
        this.resultElement.innerHTML = "";
        this.resultElement.innerHTML += `
            <div class="row yellow padding">
                <div class="col-md-3">Name</div>
                <div class="col-md-2">Rotation Period</div>
                <div class="col-md-2">Orbital Period</div>
                <div class="col-md-2">Diameter</div>
                <div class="col-md-2">Gravity</div>
                <div class="col-md-1">Population</div>
            </div>
        `;
        for (let planet of data) {
            this.resultElement.innerHTML += `
            <div class="row white padding">
                <div class="col-md-3">${planet.name}</div>
                <div class="col-md-2">${planet.rotation_period}</div>
                <div class="col-md-2">${planet.orbital_period}</div>
                <div class="col-md-2">${planet.diameter}</div>
                <div class="col-md-2">${planet.gravity}</div>
                <div class="col-md-1">${planet.population}</div>
            </div>
            `;
        }
    },
    toggleLoader: function(toggle) {
        if (toggle) this.loader.style.display = "block";
        else this.loader.style.display = "none";
    },
    errorMessage: function(text){
        this.resultElement.innerText = `${text}`
    }
}

navigationService.registerListeners()