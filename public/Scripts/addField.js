document.querySelector("#add-time")

.addEventListener('click', cloneField)

function cloneField()
{
   const NewFieldsContainer = document.querySelector('.schedule-item').cloneNode(true);

   const fields = NewFieldsContainer.querySelectorAll('input');

    fields.forEach(function(field)
    {
        field.value ="";
    });

    document.querySelector('#schedule-items').appendChild(NewFieldsContainer);
}