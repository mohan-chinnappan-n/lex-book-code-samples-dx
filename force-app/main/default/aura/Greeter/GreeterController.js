// Component Controller
//  it can have handlers
//
//  Controller can make use of functions in the Helper
//
//  Helper contains reusable methods the Controller can make use of
//

({


    // onclick handler for the button
    // brings in 'component' and 'helper'
    changeGreeting : function(component, event, helper) {
        // set this component variable (v.greeting) to the 'newGreeting'
        //  with the help of the helper function : updateGreeting(component)
        helper.updateGreeting(component);

    },
    //onselect handler for the buttonMenu
    handleLangMenuSelect: function(component, event, helper) {
        helper.updateGreetingGivenLang(component, event);

    },

    // handles the buttonIconStateful on select event
    handleLikedToggle : function (component, event) {
        var liked = component.get("v.liked");
        component.set("v.liked", !liked);
        var currentNumClicks = component.get("v.numClicks");
        currentNumClicks++;
        component.set("v.numClicks", currentNumClicks)


    }

})