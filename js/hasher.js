const hashes = {
    "/definations": {
        template: "/pages/definations.html",
        title: "",
        description: "",
    },
    "/statements": {
        template: "/pages/statements.html",
        title: "",
        description: "",
    },
    "/disclaimer": {
        template: "/pages/disclaimer.html",
        title: "",
        description: "",
    },
};


const locationHandler = async () => {
    var location = window.location.hash.replace("#", "");
    if (location.length == 0) {
        location = "/definations";
    }
    const route = hashes[location] || hashes["404"];
    const html = await fetch(route.template).then((response) => response.text());
    document.getElementById("content").innerHTML = html;
    document.title = route.title;
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);
};

window.addEventListener("hashchange", locationHandler);
locationHandler();

