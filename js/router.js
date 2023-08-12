document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("nav a")) {
        return;
    }
    e.preventDefault();
    route();
});


const routes = {
    "/": {
        template: "/pages/pr.html",
        title: "Introducing crossbanc",
        description: "crossbanc is a financial information services application with broad coverage of multiple asset classes.",
    },
    "/features": {
        template: "/features.html",
        title: "Features of crossbanc",
        description: "See features of crossbanc on this page.",
    },
    "/whitepaper": {
        template: "/whitepaper.html",
        title: "Whitepaper on crossbanc",
        description: "Technical discussion(s) on crossbanc. Reach out to crossbanc with your questions.",
    },
};


const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    locationHandler();
};


const locationHandler = async () => {
    const location = window.location.pathname; 
    if (location.length == 0 || location == "" || location == null) {
        location = "/";
    }
    const route = routes[location];
    const html = await fetch(route.template).then((response) => response.text());
    document.getElementById("content").innerHTML = html;
    document.title = route.title;
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);
};


window.onpopstate = locationHandler;
window.route = route;
locationHandler();
