const robin = ScrollReveal();

robin.reveal('.scrool_revel', {
    duration: 2000,
    distance: "60px",
    reset: true
});

robin.reveal('.scrool_left', {
    duration: 2000,
    distance: "90px",
    origin: "left",
    opacity: 0,
    rotate: {
        x: 20,
        y: 20
    },
    reset: true
});

robin.reveal('.scrool_right', {
    duration: 2000,
    distance: "90px",
    origin: "right",
    opacity: 0,
    rotate: {
        x: 20,
        y: 20
    },
    reset: true,
});


var options = {
    offset: '#showHere',
    offsetSide: 'top',
    classes: {
        clone: 'banner--clone',
        stick: 'banner--stick',
        unstick: 'banner--unstick'
    }
};

// Initialise with options
var banner = new Headhesive('#nav', options);