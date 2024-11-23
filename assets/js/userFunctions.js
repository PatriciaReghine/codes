/* MEDICAMENTOS */
const containerMedicines = document.getElementById('containerMedicines');

const contentToMedicines = `
    <div class="medicine">
        <p>Paracetamol</p>
        <p>Tomando a 5 dias</p>
    </div>
    <div class="status">
        <p>dia - 08:40</p>   
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
        <p>janeiro/2024</p>   
        <span>não tomou</span> 
    </div>
`;

containerVaccines.innerHTML = contentToVaccines;
