// Commmon JS
window.addEventListener('load', function () {
    snapToggleClassOnCLick();
});

function snapToggleClassOnCLick() {
    const elements = document.getElementsByClassName('snap-click-toggle-class');

    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.addEventListener("click", function () {
            let className = element.hasAttribute("snap-toggle-class-name") ? element.getAttribute("snap-toggle-class-name") : "";
            let clickBeforeFunction = element.hasAttribute("snap-toggle-class-before-function") ? element.getAttribute("snap-toggle-class-before-function") : "";
            let clickAfterFunction = element.hasAttribute("snap-toggle-class-after-function") ? element.getAttribute("snap-toggle-class-after-function") : "";

            if (clickBeforeFunction != "" && typeof window[clickBeforeFunction] === "function") {
                window[clickBeforeFunction](this);
            }

            if (className != "") {
                let targetElementId = element.hasAttribute("snap-toggle-class-target-id") ? element.getAttribute("snap-toggle-class-target-id") : "";

                if (targetElementId == "") {
                    element.classList.toggle(className);
                } else {
                    document.getElementById(targetElementId).classList.toggle(className);
                }
            }

            if (clickAfterFunction != "" && typeof window[clickAfterFunction] === "function") {
                window[clickAfterFunction](this);
            }
        });
    }
}