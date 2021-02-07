var autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("autocomplete")
);

var geocoder = new google.maps.Geocoder;

//Will get the address from the autocomplete box
function getAddress(){
    return autocomplete.getPlace().formatted_address;
}

//Uses the above address to generate lat and long values. Runs async so can't just return the object, will have to use the callback for any interfacing with the model
function toLatLong(address){
    return geocoder.geocode({'address':address}, function(results,status){
        console.log(results);
    });
}