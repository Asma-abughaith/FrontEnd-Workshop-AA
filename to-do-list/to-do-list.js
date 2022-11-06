
let counter = 1;
$("#list-btn").click(function () {
    let value = $("#list-input").val();
    $('#list-new').append(`
    <li data-id="${counter}">
        <div>
            <input class="check" type="checkbox" />
            <label class='value'>${value}</label>
        </div>
        <button class="remove">
            <i class="fa-solid fa-trash"></i>
        </button>
    </li>
    `);
    
    $("#list-input").val("");
   
    $(`li[data-id="${counter}"] button`).click(function () {
        let currentItem = $(this);
        currentItem.parent().remove();

    });

    counter++; 
});


