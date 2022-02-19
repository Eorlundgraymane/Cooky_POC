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
    var ingList = $("#ingredientList");
    var ingDropDown = $("#ing");
    if(!ingDropDown.attr("disabled")){
        var newIng = $("#ing").val();
        if(ingList.val() !== "")
        {
            ingList.val(ingList.val() + ",");
        }
        ingList.val(ingList.val()+newIng);
    }    
    else{
        if(ingList.val() !== "")
        {
            ingList.val(ingList.val() + ",");
        }
        var newIng = $("#newIngredient").val();
        ingList.val(ingList.val()+newIng);
    }
    $("#newIngredient").val("");
    ingDropDown.removeAttr("disabled");
}
function disableIngList(){
    var newIng = $("#newIngredient");
    if(! /^\s*$/.test(newIng.val())){
        $("#ing").attr("disabled","disabled");   
    }    
    else{
        $("#ing").removeAttr("disabled");
    }
}