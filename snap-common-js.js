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

            if (className != "") {
                let targetElementId = element.hasAttribute("snap-toggle-class-target-id") ? element.getAttribute("snap-toggle-class-target-id") : "";

                if (targetElementId == "") {
                    element.classList.toggle(className);
                } else {
                    document.getElementById(targetElementId).classList.toggle(className);
                }
            }
        });
    }
}