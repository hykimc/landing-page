/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// pointing at sections
const corps=document.body;
const mesSections=corps.getElementsByTagName("section");
let runningTimer=0;
// pointing at Navbar
const entete=document.querySelector("header");
const barreNavigation=entete.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function initialiseNavBar(myNavBar, mySections )
{
    // read section id
    for (i=0;i< mySections.length;i++){
        // realise a table of navigation items
        const myElementList=faitLienDocument(myNavBar,mySections.item(i).id,mySections.item(i).getAttribute("data-nav"));
        myElementList.addEventListener('click',myScrollFunction)
    } 
    //
    afficheNavbar(barreNavigation,false);    
}

function faitLienDocument(elementParent,idElement,nomElement)
{   const elementListe=document.createElement("li");
    const lienVersSection=document.createElement("a");
    //lienVersSection.setAttribute('data-pointingSection',`${idElement}`);
    lienVersSection.id=`linkto_${idElement}`;
    lienVersSection.href=`#${idElement}`;
    lienVersSection.textContent=nomElement;
    lienVersSection.classList.add("menu__link");
    elementListe.appendChild(lienVersSection);
    elementParent.appendChild(elementListe);
    return elementListe;
}

function distanceToTopViewPort(myElement){
    return Math.abs(myElement.getBoundingClientRect().y);
}

function nextToTopview(collectionElements){
    // make it to a statical array image
    const collectionElementsA=Array.from(collectionElements);
    const collectionPositionYA=collectionElementsA.map(monElement=>{
        return distanceToTopViewPort(monElement);
    })
    const elementNextToTop=collectionPositionYA.reduce((prevVal,curr,curri)=>
    {   
        if (curr>prevVal.val){
            return prevVal;
        } else {
            return {ind:curri,val:curr}
        }   
    },{ind:-1,val:Infinity})
    return collectionElements.item(elementNextToTop.ind);
}

function afficheNavbar(myNavBar,affiche){
    //affiche=affiche||true;
    if(affiche) {
        myNavBar.removeAttribute('style');
        console.log('show');
    } else {
        myNavBar.style.display='none';
        console.log("hide");
        
    } 
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
initialiseNavBar(barreNavigation,mesSections);

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll',function(){
    afficheNavbar(barreNavigation,true);
    // activate the section
    const activeSection=nextToTopview(mesSections);
    for ( sectionIndex=0;sectionIndex<mesSections.length;sectionIndex++) {
        const navbarItemId=`linkto_${mesSections.item(sectionIndex).id}`;
        
        if (mesSections.item(sectionIndex)==activeSection) { 
            // activate section and Item
            mesSections.item(sectionIndex).classList.add('active');
            document.getElementById(navbarItemId).classList.add('active');
        } else {
            // inactivate the section and Item
            mesSections.item(sectionIndex).classList.remove('active');
            document.getElementById(navbarItemId).classList.remove('active');
        }
        
    }
    //afficheNavbar(barreNavigation,false);
    if (runningTimer) clearTimeout(runningTimer);
    runningTimer=setTimeout(function(){afficheNavbar(barreNavigation,false)},500);
})



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Scroll to section on link click
function myScrollFunction(e) {
    e.preventDefault();
    const targetScroll = e.target.hash;
    const scrollTo = document.querySelector(targetScroll);
    scrollTo.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
};



