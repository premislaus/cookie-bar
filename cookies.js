window.addEventListener('load', init);

function init() {
    // Cookie Bar Element
    const cookieBar = document.createElement("div");
    cookieBar.setAttribute("id", "cookie-bar");

    // Cookie Text Element
    const cookieText = document.createElement("div");
    cookieText.setAttribute("id", "cookie-text");
    const cookieTextNode = document.createTextNode("By using this site you agree to our cookie policy");

    // Cookie Controller Element
    const cookieController = document.createElement("div");
    cookieController.setAttribute("id", "cookie-controller");

    // Cookie Controller Span
    const cookieControllerSpan = document.createElement("span");
    cookieControllerSpan.setAttribute("id", "cookie-controller-span");
    const cookieControllerSpanNode = document.createTextNode("[X]");

    // Onclick Event
    cookieControllerSpan.onclick = function() {
        document.getElementById("cookie-bar").style.display = 'none';
    };

    // Append text as a child of Cookie Text
    cookieText.appendChild(cookieTextNode);

    // Append Cookie Controller Span Node as a child of Controller Span
    cookieControllerSpan.appendChild(cookieControllerSpanNode);

    // Append span as a child of Cookie Controller
    cookieController.appendChild(cookieControllerSpan);

    // Append all elements as a children of Cookie Bar
    cookieBar.appendChild(cookieText);
    cookieBar.appendChild(cookieController);

    // Append Cookie Bar as a child of Body
    document.body.appendChild(cookieBar);
}