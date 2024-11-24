/* MEDICAMENTOS */
const containerMedicines = document.getElementById('containerMedicines');

const contentToMedicines = `
    <div class="medicine">
        <p>Paracetamol</p>
        <p>Tomando a 5 dias</p>
    </div>
    <div class="status">
        <p>dia X - 08:40</p>   
        <span>tomou</span> 
    </div>
`;

containerMedicines.innerHTML = contentToMedicines;

/* VACINAS */
const containerVaccines = document.getElementById('containerVaccines');

const contentToVaccines = `
    <div class="medicine">
        <p>Vacina para dengue</p>
        <p>Há cada 6 meses</p>
    </div>
    <div class="status">
        <p>jan/2024</p>   
        <span>não tomou</span> 
    </div>
`;

containerVaccines.innerHTML = contentToVaccines;

/* NAV */
const containerNav = document.getElementById('nav');

const contentToNav = `
    <nav class="navigation">
        <ul>
            <li><a href="#home"><img width="50" height="50" src="https://img.icons8.com/ios/50/home-page.png" alt="home-page"/></a></li>
            <li><a href="#requests"><img width="50" height="50" src="https://img.icons8.com/laces/64/apple-watch-apps.png" alt="apple-watch-apps"/></a></li>
            <li><a href="#appointments"><img width="50" height="50" src="https://img.icons8.com/parakeet-line/48/moleskine.png" alt="moleskine"/></a></li>
        </ul>
    </nav>
`;

containerNav.innerHTML = contentToNav;