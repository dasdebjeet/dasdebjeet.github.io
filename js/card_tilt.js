$(document).ready(() => {
    // vanilla tilt effect

    VanillaTilt.init(document.querySelectorAll(".work_card"), {
        max: 18,
        speed: 500,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        transition: true,
        scale: 1.1,
        // startX: -20, // the starting tilt on the X axis, in degrees.
        // startY: 50,
        perspective: 1500,
        // reset: false, // If the tilt effect has to be reset on exit.
        glare: true, // if it should have a "glare" effect
        "max-glare": 0.1, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
        "glare-prerender": false,
        gyroscope: true, // Boolean to enable/disable device orientation detection,
        gyroscopeMinAngleX: -45, // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
        gyroscopeMaxAngleX: 45, // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
        gyroscopeMinAngleY: -45, // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
        gyroscopeMaxAngleY: 45, // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
    });
})