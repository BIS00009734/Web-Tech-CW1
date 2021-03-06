var showcaseitems = {
    Img1: ['movies/joker.html', "img/joker.jpg", 'Joker', 'Joker 2019', 'img/jokerP.jpg'],
    Img2: ['movies/tenet.html', 'img/tenet.jpg', 'Tenet', 'Tenet 2020', 'img/tenetP.jpg'],
    Img3: ['movies/solar.html', 'img/solar.jpg', 'Solar', 'Solar Opposites 2020', 'img/solarP.jpg']
}
// changes nav ul class attr in small screen when menu icon clicked
document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.mainnav').classList.toggle('show'));

// Changing showcase
function showcaseChange (sideLi) { 

    // swaps showcase items
    if (sideLi == 0) {
        showcaseitems.Img1 = [...showcaseitems.Img2, showcaseitems.Img2 = showcaseitems.Img1]
    } else {
        showcaseitems.Img3 = [...showcaseitems.Img2, showcaseitems.Img2 = showcaseitems.Img3]
    }

    //reassigning showcase items
    document.getElementById('showcaseImg1').src = showcaseitems.Img1[4]
    document.getElementById('showcaseImg2').src = showcaseitems.Img2[1]
    document.getElementById('showcaseImg3').src = showcaseitems.Img3[4]

    document.getElementById('showcaseImg1').alt = showcaseitems.Img1[2]
    document.getElementById('showcaseImg2').alt = showcaseitems.Img1[2]
    document.getElementById('showcaseImg3').alt = showcaseitems.Img1[2]

    document.getElementById('centerLink').href = showcaseitems.Img2[0]
    document.getElementById('showcaseInfo').innerHTML = showcaseitems.Img2[3]
}
