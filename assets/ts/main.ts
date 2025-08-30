const toggle   = document.getElementById( 'menu-toggle' );
const navLinks = document.getElementById( 'nav-links' );
const main     = document.querySelector( 'main' );
const footer   = document.querySelector( 'footer' );

if( toggle && navLinks && main && footer ){
    toggle.addEventListener( 'click', () => {
        navLinks.classList.toggle( 'active' );
    } );
    main.addEventListener( 'click', () => {
        navLinks.classList.remove( 'active' );
    } );
    footer.addEventListener( 'click', () => {
        navLinks.classList.remove( 'active' );
    } );
    
}


