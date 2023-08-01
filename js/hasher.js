document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("div a")) {
        return;
    }
    e.preventDefault();
    route2();
});


const hashes = {
    404: {
        template: "/pages/404.html",
        title: "404",
        description: "Page not found on crossbanc",
    },
    "/whitepaper": {
        template: "/pages/feedback.html",
        title: "Whitepaper on crossbanc",
        description: "Technical discussion(s) on crossbanc. Reach out to crossbanc with your questions.",
    },
    "/whitepaper/interpretation": {
        template: "/pages/interpretation.html",
        title: "Interpretation | Whitepaper on crossbanc",
        description: "Defined terms used to communicate crossbanc.",
    },
    "/whitepaper/statements": {
        template: "/pages/statements.html",
        title: "Questions Presented | Whitepaper on crossbanc",
        description: "Issue Statement(s) perceived and expected to be solved by crossbanc.",
    },
    "/whitepaper/basis": {
        template: "/pages/basis.html",
        title: "Basis for conclusions | Whitepaper on crossbanc",
        description: "Basis for conclusions on technology adoptions to the benefit of crossbanc stakeholders.",
    },
    "/whitepaper/disclaimer": {
        template: "/pages/disclaimer.html",
        title: "Disclaimer | Whitepaper on crossbanc",
        description: "Disclaimer in whitepaper regarding crossbanc.",
    },
};


const route2 = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    hashlocationHandler();
};


const hashlocationHandler = async () => {
    const location = window.location.pathname; 
    if (location.length == 0) {
        location = "/whitepaper";
    }
    const hroute = hashes[location] || hashes["404"];
    const hhtml = await fetch(hroute.template).then((response) => response.text());
    document.getElementById("hcontent").innerHTML = hhtml;
    document.title = hroute.title;
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", hroute.description);
};


window.onpopstate = hashlocationHandler;
window.route = route2;
hashlocationHandler();

