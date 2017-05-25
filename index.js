
'use strict';

process.env.DEBUG = 'actions-on-google:*';
const App = require('actions-on-google').ApiAiApp;

// function getRandomFact (facts) {
//   if (facts.size <= 0) {
//     return null;
//   }
//   let randomIndex = (Math.random() * (facts.size - 1)).toFixed();
//   let randomFactIndex = parseInt(randomIndex, 10);
//   let counter = 0;
//   let randomFact = '';
//   for (let fact of facts.values()) {
//     if (counter === randomFactIndex) {
//       randomFact = fact;
//       break;
//     }
//     counter++;
//   }
//   facts.delete(randomFact);
//   return randomFact;
// }

// [START YourAction]
exports.facts_google = (request, response) => {
  const app = new App({request, response});
  console.log('Request headers: ' + JSON.stringify(request.headers));
  console.log('Request body: ' + JSON.stringify(request.body));

  // Fulfill action business logic
  function responseHandler (app) {
    // Complete your fulfillment logic and send a response
	//let fact  = DEFAULT_FACT;
        let fact_category = app.getArgument('fact-category');
	if(fact_category ==='history')
	{
       let factPrefix = 'Sure, here\'s a history fact. ';
      app.data.historyFacts = Array.from(historyFacts);
      if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
        let image = getRandomImage(GOOGLE_IMAGES);
        app.ask(app.buildRichResponse()
          .addSimpleResponse(factPrefix)
          .addBasicCard(app.buildBasicCard(fact)
            .addButton(LINK_OUT_TEXT, GOOGLE_LINK)
            .setImage(image[0], image[1]))
          .addSimpleResponse(NEXT_FACT_DIRECTIVE)
          .addSuggestions(CONFIRMATION_SUGGESTIONS), NO_INPUTS);
          } 
        else {
        app.ask('athats it');
            }
      return;
    }		
	}
    app.ask('Hello, World!');
  }

  const actionMap = new Map();
  actionMap.set('tell.fact', responseHandler);

  app.handleRequest(actionMap);
};
