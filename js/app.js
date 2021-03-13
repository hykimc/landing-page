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

// pointing at Navbar
const entete=document.querySelector("header");
const barreNavigation=entete.querySelector("#navbar__list");
// item navigation array
const itemNavigation=[];

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
        itemNavigation.push(faitLienDocument(myNavBar,mySections.item(i).id,mySections.item(i).getAttribute("data-nav")));
    }      
}

function faitLienDocument(elementParent,idElement,nomElement)
{   const elementListe=document.createElement("li");
    const lienVersSection=document.createElement("a");
    lienVersSection.setAttribute('data-pointingSection',`${idElement}`);
    lienVersSection.id=`linkto_${nomElement}`;
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


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
initialiseNavBar(barreNavigation,mesSections);

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll',function(){
    // activate the section
    const activeSection=nextToTopview(mesSections);
    for (section  of mesSections) {
        if (section===activeSection) { section.classList.add('active')
        } else {
            section.classList.remove('active');
        }
    }
    // activate section name in Navbar
    for 
})

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
function myScrollFunction(e) {
    e.preventDefault();
    const targetScroll = e.target.hash;
    const scrollTo = document.querySelector(targetScroll);
    scrollTo.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
};
// Set sections as active


