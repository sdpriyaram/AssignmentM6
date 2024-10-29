// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (id) => document.getElementById(id)
function displayData()
{
    console.info(`ID: ${$('employeeId').value}`);
    console.log(`Name: ${$('fullName').value}`);
    console.log(`Extension: ${$('extension').value}`);
    console.log(`Email: ${$('email').value}`);
    console.log(`Department: ${$('department').value}`);
}
const form = document.getElementById('empForm');
form.addEventListener('submit', (event) => {event.preventDefault(); displayData(); })
