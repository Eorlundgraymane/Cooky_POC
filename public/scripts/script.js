$(() => {

    function setClickers(){
        $("#btnOne").on("click",(event) => {
            window.location = "/recipe/create";
        });
        $("#btnTwo").on("click",(event) => {
            window.location = "/recipe/follow";
        });
    }

    setClickers();
});