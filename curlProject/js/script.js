$(window).on('load', function () {    
    if ($('#preloader').length) {      
        $('#preloader').delay(100).fadeOut('slow', function () {        
            $(this).remove();      
        });    
    }
});

$('#submitOne').on('click', () => {
    $.ajax({
        url: "php/getInfo1.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: '50',
            lng: '50'
        },
        success: (result) => {
            console.log(result)

            if (result.status.name == 'ok') {

            $('#result').html(
                'Country: ' + result['data']['countryName'] + '<br>' +
                'Country code: ' + result['data']['countryCode']
            )
            }
        },
        error: (jqXHR, textStatus, errorThrown) => {

        }
    })
})

$('#submitTwo').on('click', () => {
    $.ajax({
        url: "php/getInfo2.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: '40',
            lng: '-40'
        },
        success: (result) => {
            console.log(result)

            if (result.status.name == 'ok') {

            $('#result').html(
                'Ocean name: ' + result['data']['ocean']['name']
                )
            }
        },
        error: (jqXHR, textStatus, errorThrown) => {

        }
    })
})

$('#submitThree').on('click', () => {
    $.ajax({
        url: "php/getInfo3.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: '50',
            lng: '10'
        },
        success: (result) => {
            console.log(result)

            if (result.status.name == 'ok') {

            $('#result').html(
                'Srtm1: ' + result['data']['srtm1'] + '<br>' +
                'lng: ' + result['data']['lng'] + '<br>' +
                'lat: ' + result['data']['lat'] 
                )
            }
        },
        error: (jqXHR, textStatus, errorThrown) => {

        }
    })
})