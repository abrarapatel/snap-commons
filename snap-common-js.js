// Commmon JS
window.addEventListener('load', function () {
    snapToggleClassOnCLick();
});

function snapToggleClassOnCLick(specificContainer = null) {
    let elements;
    if (specificContainer != null) {
        elements = specificContainer.getElementsByClassName('snap-click-toggle-class');
    } else {
        elements = document.getElementsByClassName('snap-click-toggle-class');
    }

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

function snapDaysBetweenDays(fromdate, todate = new Date()) {
    if (typeof fromdate === 'string') {
        fromdate = new Date(fromdate);
    }
    if (typeof todate === 'string') {
        todate = new Date(todate);
    }

    if (!(fromdate instanceof Date) || !(todate instanceof Date)) {
        throw new Error("Both parameters must be Date objects or convertible to Date objects");
    }

    return Math.floor((fromdate - todate) / (1000 * 60 * 60 * 24)) + 1;
}

function getParentWithClass(element, className) {
    let parent = element.parentNode;

    while (parent && !parent.classList.contains(className)) {
        parent = parent.parentNode;
    }

    return parent;
}