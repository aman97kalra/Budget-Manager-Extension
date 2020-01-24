$(function(){
     chrome.storage.sync.get('limit',function(budget){
        $('#limit').val(budget.limit);
    });

    // Using Jquery
    // $('#saveLimit').click(function(){
    //     var limit = $('#limit').val();
    //     if (limit){
    //         chrome.storage.sync.set({'limit': limit}, function(){
    //             close();
    //         });
    //     }
    // });
    var limitVal = document.getElementById("saveLimit");
    limitVal.addEventListener('click', function(){
        var limit = document.getElementById('limit').value;
        if (limit){
            chrome.storage.sync.set({'limit': limit}, function(){
                close();
            });
        }
    });
    $("#resetTotal").click(function(){
        chrome.storage.sync.set({'total':0},function(){
                var notifOptions = {
                    type : "basic",
                    iconUrl: "get_started16.png",
                    title: "Total Reset",
                    message: "Total has been reset to 0"
                };
                chrome.notifications.create('limitNotif',notifOptions);
        });
    });
});