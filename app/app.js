const hierarchySelect = document.querySelector('#hierarchy-select');
const hierarchyTable= document.querySelector('#hierarchy-table');
const choice = document.querySelector('#choice');
const structure = document.querySelector('#structure');
const dollarsTable= document.querySelector('#dollars-table');
const unitsTable = document.querySelector('#units-table');

hierarchySelect.addEventListener('change', ()=> {
    hierarchyTable.classList.remove('hide')
    if(hierarchySelect.value === 'group'){
        choice.innerText = 'Product Group Hieracrchy'
    } else if(hierarchySelect.value === 'buyer'){
        choice.innerText = 'Buyer Group Hieracrchy'
    } else if(hierarchySelect.value === 'supplier'){
        choice.innerText = 'Supplier Hieracrchy'
    } else {
        hierarchyTable.classList.add('hide')
    }
})

structure.addEventListener('change', ()=> {
    if(structure.value === 'both'){
        dollarsTable.classList.remove('hide')
        unitsTable.classList.remove('hide')
    } else if(structure.value === 'dollars'){
        dollarsTable.classList.remove('hide')
        unitsTable.classList.add('hide')
    } else if(structure.value === 'units'){
        unitsTable.classList.remove('hide')
        dollarsTable.classList.add('hide')
    } else {
        dollarsTable.classList.add('hide')
        unitsTable.classList.add('hide')
    }
})
