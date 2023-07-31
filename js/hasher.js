const hashes = {
    "/": {
        template: "/pages/hashes/interpretation.html",
        title: "Whitepaper(s) on crossbanc | Interpretation",
        description: "Defined terms used to communicate crossbanc.",
    },
    statements: {
        template: "/pages/hashes/statements.html",
        title: "Whitepaper(s) on crossbanc | Questions Presented",
        description: "Problem Statement(s) perceived and expected to be solved by crossbanc.",
    },
    basis: {
        template: "/pages/hashes/basis.html",
        title: "Whitepaper(s) on crossbanc | Basis for conclusions",
        description: "Basis for conclusions on technology adoptions to the benefit of crossbanc stakeholders.",
    },
    disclaimer: {
        template: "/pages/hashes/disclaimer.html",
        title: "Whitepaper(s) on crossbanc | Disclaimer",
        description: "Disclaimer in whitepaper(s) regarding crossbanc.",
    },
};


const hashlocationHandler = async () => {
    var location = window.location.hash.replace("#", "");
    if (location.length == 0) {
        location = "/";
    }
    const route = hashes[location] || hashes["404"];
    const html = await fetch(route.template).then((response) => response.text());
    document.getElementById("hashcontent").innerHTML = html;
    document.title = route.title;
    document
        .querySelector('meta[name="description"]')
        .setAttribute("hashcontent", route.description);
};

window.addEventListener("hashchange", hashlocationHandler);
hashlocationHandler();

