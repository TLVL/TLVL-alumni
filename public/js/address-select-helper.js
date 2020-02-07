const selectAddress = (lat1, lng1, lat2, lng2, display_name) => {
  $('#results').empty();
  $('<b>', {html: "Вы выбрали адрес: " + display_name}).appendTo('#results');
  $("#lat").val(lat1);
  $("#lon").val(lng1);
  $("#display_name").val(display_name);
};

function chooseAddr(lat1, lng1, lat2, lng2, display_name) {
    $('#results').empty();
    $("#realAddr").val(lat1 + "/" +  lng1);
    $('<b>', { html: "Вы выбрали адрес: " + display_name }).appendTo('#results');
  $("#lat").val(lat1);
  $("#lon").val(lng1);
    $("#display_name").val(display_name);
  
}
function addr_search() {
    let inp = document.getElementById("addr");
    
    $.getJSON('https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' + inp.value, function(data) {
        let items = [];
        let temp = 0;
          if(data.length != 0) {
        $.each(data, function(key, val) {
            bb = val.boundingbox;
                 if(val.type == "administrative" || val.type == "city" || val.type == "town"){
            items.push("<li><a href='#' onclick='chooseAddr(" + bb[0] + ", " + bb[2] + ", " + bb[1] + ", " + bb[3]  + ", \"" + val.display_name + "\");return false;'>" + val.display_name + '</a></li>');
            temp++;
        }
        });
    }
        if(temp == 0) {
           items.push("<p><b>Город не найден.</b></p>");
         }
    else if(data.length == 0){
         console.log("No location found");
    items.push("<p><b>Город не найден.</b></p>");
}
  $('#results').empty();
            $('<ul/>', {
                'class': 'my-new-list',
                html: items.join('')
            }).appendTo('#results');
    });
}
