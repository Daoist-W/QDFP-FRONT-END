$(document).ready(function() {
    $.ajax({
        url: "http://127.0.0.1:80/jobs"
    }).then(function(data) {
       $('.id').append(data[1].id);
       $('.title').append(data[1].title);
       $('.description').append(data[1].description);
       $('.location').append(data[1].location);
       $('.startdate').append(data[1].startDate);
       $('.enddate').append(data[1].endDate);


    });
});