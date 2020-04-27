document.addEventListener('DOMContentLoaded', function() {
    function headerToggler() {
        const header = document.querySelector('.js-header');
        const nav = header.querySelector('[data-nav]');
        const html = document.documentElement;
        const menuBtn = header.querySelector('[data-toggler]');

        function toggleMenu() {
            nav.classList.toggle("is-open");
        }

        function noScroll() {
            html.classList.toggle('no-scroll');
        }

        menuBtn.addEventListener('click', function() {
            toggleMenu();
            noScroll();
        });
    }
    headerToggler();

    function showTeam() {
        const team = document.querySelector('.js-team');
        const item = team.querySelector('[data-item]');
        const text = team.querySelector('[data-text]');

        function mouseOn(e) {
            let target = e.target;
            console.log(target)
        }
    }

    showTeam();
})


function changeClient(elem) {
    let arrText = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sequi eligendi ad eum ratione hic corporis, consequuntur unde quis! Est sed officiis cupiditate numquam distinctio veniam corporis enim assumenda nesciunt." ,

        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Sed ut perspiciatis unde omnis ist enatus error sit voluptatem accusantium doloremque laudantium." ,

        "Attachment apartments in delightful by motionless it no. And now she burst sir learn total. Hearing hearted shewing own ask. Solicitude uncommonly use her motionless not collecting age. The properly servants required mistaken outlived bed and. "
    ]

    let arrName = [
        "Jinny Snow, Company SEO" ,
        "John Snow, King of the North",
        "John Smith, Doctor"
    ]

    const client = document.querySelector('.js-client');
    const photo = client.querySelector('[data-photo]');
    const testimonial = client.querySelector('[data-text]');
    const name = client.querySelector('[data-name]');


    photo.src = elem.src;
    testimonial.innerHTML = arrText[elem.id];
    name.innerHTML = arrName[elem.id];
}

// Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.



