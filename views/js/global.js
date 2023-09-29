function callLayoutSpecificJS(layoutObj){
    if(layoutObj!=null){
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        const activeLink = document.getElementById(layoutObj['headerId']);
        activeLink.classList.add('active');
    }
}

