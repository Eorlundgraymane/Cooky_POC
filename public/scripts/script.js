$(() => {   
    setClickers();
});

function setClickers(){    
    $("#btnOne").on("click",(event) => {
        window.location = "/recipe/create";
    });
    $("#btnTwo").on("click",(event) => {
        window.location = "/recipe/follow";
    });
} 
function addIngredient(){    
    var ingList = $("#ingredientList").val();
    var newIng = $("#ing").val();
    if(ingList !== "")
    {
        ingList += ",";
    }
    $("#ingredientList").val(ingList+newIng);
}