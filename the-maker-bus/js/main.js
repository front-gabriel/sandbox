$(function() {
    
    let times, newContent, fragment, target;

    $.ajax({
        beforeSend: function(xhr) {
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType("application/json");
            }
        }
    });

    //FUNCTION THAT COLLECTS DATA FROM THE JSON FILE (../DATA/TIME.JSON)
    function loadTimeTable() {
        $.getJSON('../data/times.json')
        .done( function(data) {
            times = data;
        }).fail(function() {
            $('#timetable').html('Sorry! We could not load the timetable at the moment');
        });
    }

    loadTimeTable();

    //CLICK ON THE EVENT TO LOAD A TIMETABLE
    $('main').on('click', '#events-location a', function(e) {
        e.preventDefault();
        let loc = this.id.toUpperCase();

        newContent = '';
        for (let i = 0; i < times[loc].length; i++) {
            newContent += '<li><span class="time">' + times[loc][i].time + '</span>';
            newContent += '<a class="session-title" href="../descriptions.html#';
            newContent += times[loc][i].title.replace(/ /g, '-') + '">';
            newContent += times[loc][i].title + '</a></li>'
        }

        $('#timetable').html('<ul>' + newContent + '</ul>');

        $('#events-location a span.current').removeClass('current');
        $('a#' + loc).children('span').addClass('current');

        $('#description').text('');
    });

    // CLICK ON A SESSION TO LOAD THE DESCRIPTION
    $('main').on('click', '#timetable li a', function(e) {
        e.preventDefault();
        fragment = this.href;

        fragment = fragment.replace('#', ' #');
        $('#description').load(fragment);

        $('#timetable li a.current').removeClass('current');
        $(this).addClass('current');
    });
});