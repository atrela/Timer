$(function () {
    var hub = $.connection.countingHub;
    hub.client.sendMessage = function (message) {
        prepareElapsedTimeModal(message);
        $('#mdlElapsedTime').modal('show');

        setActionRangeInformationMessage($('#inMinValue').val(), $('#inMaxValue').val());
        setControlsDisabled(false);
    };

    $.connection.hub.start().done(function () {
        $("#btnSubmit").click(function () {
            if (isSelectedValueValid($('#inSelection').val(),
                $('#inMinValue').val(), $('#inMaxValue').val())) {
                setControlsDisabled(true);
                setActionWaitInformationMessage();
                hub.server.send($('#inSelection').val());
            }

            else {
                $('#mdlError').modal('show');
            }
        });
    });
});

$(function () {
    var connection = $.hubConnection();
    var hubProxy = connection.createHubProxy('CountingHub');

    $.connection.countingHub.client.broadcastMessage = function (message) {
        $('#inSelection').val(message);
        $("#btnSubmit").click();
    };
});