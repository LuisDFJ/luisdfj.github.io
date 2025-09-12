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

const toggle_theme_button = document.getElementById( 'toggle-theme-button' );
const toggle_theme = document.getElementById( 'toggle-theme' );
const body = document.getElementById( 'body' );
if( toggle_theme_button && toggle_theme && body ){
    toggle_theme_button.addEventListener( 'click', () => {
        toggle_theme_button.classList.toggle( 'active' )
        if( 'fa-moon' == toggle_theme.classList[1] ){
            toggle_theme.classList.remove( 'fa-moon' )
            toggle_theme.classList.add( 'fa-sun' )
            body.classList.remove( 'dark' )
            body.classList.add( 'light' )
        } else {
            toggle_theme.classList.remove( 'fa-sun' )
            toggle_theme.classList.add( 'fa-moon' )
            body.classList.remove( 'light' )
            body.classList.add( 'dark' )
        }
    } );
}


