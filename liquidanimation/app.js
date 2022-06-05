/**
 * Here we define the type of images we are going to use 
 * We begin by initialising the hover effect library by starting with new hoverEffect
 * Hover Effect takes an object and the object takes in a few parameters. 
 * Just a note in here we define what effect we are going to use and how strong its going to be
 * The parent is the distortion div where the  images are going to be injected in.
 * 
 */
new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity: 0.2,
    image1: 'assets/images/asap/ASAP-3-tall-right-664x801-c-center.jpeg',
    image2: 'assets/images/asap/0733b7caffb1acaab2df9ab0d077084d.jpeg',
    image3: 'assets/images/asap/asap-rocky-gq-cover-june-july-2021-06.webp',
    displacementImage: 'assets/images/asap/f43fee7007af1c80aa2f95822ad49b5d.jpeg',
});