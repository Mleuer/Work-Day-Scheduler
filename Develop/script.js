
var times = ["09:00AM", "10:00AM", "11:00AM", "12:00PM", "01:00PM", "02:00PM", "03:00PM", "04:00PM"];

function renderTimeSlots() {
    $(".container").empty();

    for(var i = 0; i < times.length; i++) {
        var timeSlot = $("<div>").attr("class", "input-group");
        var timeLabel = $("<div>").attr("class", "input-group-prepend").text(times[i]);
        var inputField = $("<textarea>").addClass("form-control").addClass(times[i]);
        var saveBtn = $("<button>").attr("data-timeSlot", times[i]).addClass("saveBtn").addClass("input-group-append").text("Save");
        timeSlot.append(timeLabel, inputField, saveBtn);
        $(".container").append(timeSlot);
    }
}
$(".container").on("click", ".saveBtn", function(event) {
    event.preventDefault();

    var timeSlot = $(this).attr("data-timeSlot");
    console.log(timeSlot);



})

renderTimeSlots();








