$(document).ready(function () {
    setActionRangeInformationMessage($('#inMinValue').val(), $('#inMaxValue').val());
});

function setControlsDisabled(isTrue) {
    $("#btnSubmit").prop("disabled", isTrue);
    $("#inSelection").prop("disabled", isTrue);
}

function setActionRangeInformationMessage(min, max) {
    $('#pActionInfo').empty();
    $('#pActionInfo').append('Please select a value between {0} and {1} (seconds)'.format(min, max));
}

function setActionWaitInformationMessage() {
    $('#pActionInfo').empty();
    $('#pActionInfo').append("Please wait...")
}

function prepareElapsedTimeModal(message) {
    $('#mdlElapsedTimeMessage').empty();
    $('#mdlElapsedTimeMessage').append('You waited {0} second(s)'.format(message));
}

function isSelectedValueValid(selectedValue, min, max) {
    var selection = parseInt(selectedValue);

    return (selection >= parseInt(min) && selection <= parseInt(max) && selectedValue.length > 0)
}