document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("nav a")) {
        return;
    }
    e.preventDefault();
    route();
});


const routes = {
    404: {
        template: "/pages/404.html",
        title: "404",
        description: "Page not found on crossbanc",
    },
    "/": {
        template: "/pages/index.html",
        title: "Introducing crossbanc",
        description: "crossbanc is a financial information services application with broad coverage of multiple asset classes.",
    },
    "/features": {
        template: "/pages/features.html",
        title: "Features of crossbanc",
        description: "See features of crossbanc on this page.",
    },
    "/whitepaper": {
        template: "/pages/whitepaper.html",
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
    if (location.length == 0) {
        location = "/";
    }
    const route = routes[location] || routes["404"];
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
