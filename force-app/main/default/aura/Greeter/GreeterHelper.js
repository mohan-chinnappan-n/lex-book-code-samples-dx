// Helper
// Helper provides reusable functions to the Controller

//  -------------------Benefits of the helper----------------------
/* Since Helper is shared across everything,
 *  it allows us to share and keep logic across of Controllers and Renderers in one place
 *
 * It also helps us keep logic within Controllers and Renderers lean.
*/
//  ----------------------------------------------------------------


({
    updateGreeting : function(component) {
        // get a randomized greeting message
        var newGreetings= ["Bonjour!", "வணக்கம் ", " Buenos días", "Buon giorno!", " السلام علیکم", "ನಮಸ್ಕಾರ", "నమస్కారం " ];
        var rand = Math.floor((Math.random() * 6 ) );
        // update the button label with the new lang greeting
        component.set("v.greeting", newGreetings[rand]);

    },

    // updates the given button (component ) text to
    //  value got out-of onselect event from the buttonMenu component
    updateGreetingGivenLang : function(component, event) {

        var greetLang =  { "en": "Hello World",
                           "fr": "Bonjour!",
                           "ta": "வணக்கம் ",
                           "es": " Buenos días",
                           "it": "Buon giorno!",
                           "ur":  " السلام علیکم",
                           "kn": "ನಮಸ್ಕಾರ",
                           "te": "నమస్కారం ",
                           "ml": "നമസ്തേ",
                           "hi": "नमस्ते ।"
        }
        // value got out-of onselect event from the buttonMenu component
        var lang = event.getParam('value');
        // update the button label with the new lang greeting
        component.set("v.greeting", greetLang[lang]);


    }

})