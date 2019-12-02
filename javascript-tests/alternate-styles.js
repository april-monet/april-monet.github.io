window.onload = () => {

    const switchStylesButton = document.getElementById('switchStylesAction');
    const styleForm = document.getElementById("change-style");
    const defaults = document.getElementById('default');
    const alternate = document.getElementById('alternate');

    styleForm.addEventListener("submit", event => {
        event.preventDefault();
        const value = document.querySelector('input[name="switcher"]:checked').value;
        if (value.toLowerCase() === "alternate") {
            disableStylesheet(defaults);
            enableStylesheet(alternate);
        } else {
            disableStylesheet(alternate);
            enableStylesheet(defaults);
        }
    });
}

function enableStylesheet (node) {
    node.rel = 'stylesheet';
    }
    
function disableStylesheet (node) {
    node.rel = 'alternate stylesheet';
}    