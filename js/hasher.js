const hashes = {
    interpretation: {
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
    const hashlocation = window.location.hash.replace("#", "");   
    if (hashlocation == undefined || hashlocation == null || hashlocation.length == 0)
    {
        document.getElementById("hashcontent").innerHTML = "/pages/reachus.html";
        document.title = "Whitepaper(s) on crossbanc | Questions";
        document
            .querySelector('meta[name="description"]')
            .setAttribute("hashcontent", "Reach out to crossbanc with your questions.");
    }
    else
    {
        const hash = hashes[hashlocation] || hashes["404"];
        const hhtml = await fetch(hash.template).then((response) => response.text());
        
        document.getElementById("hashcontent").innerHTML = hhtml;
        document.title = hash.title;
        document
            .querySelector('meta[name="description"]')
            .setAttribute("hashcontent", hash.description);
    }
};

window.addEventListener("hashchange", hashlocationHandler);
hashlocationHandler();

