document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("div a")) {
        return;
    }
    e.preventDefault();
    route2();
});


const hashes = {
    "/whitepaper": {
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
    const hlocation = window.location.pathname;
    if (hlocation.length == 0 || hlocation == "" || hlocation == null) {
        hlocation = "/whitepaper";
    }
    const hroute = hashes[hlocation];
    const hhtml = await fetch(hroute.template).then((response) => response.text());
    document.getElementById("hcontent").innerHTML = hhtml;
    document.title = hroute.title;
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", hroute.description);
};


const printfirst = async () => {
    const flocation = "/whitepaper";
    const froute = hashes[flocation];
    const fhtml = await fetch(froute.template).then((response) => response.text());
    document.getElementById("hcontent").innerHTML = fhtml;
    document.title = froute.title;
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", froute.description);
};


window.onpopstate = printfirst;
window.route = route2;


