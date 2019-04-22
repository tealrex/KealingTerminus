/*
 __  __     ______     ______     __         __     __   __     ______        ______   ______     ______     __    __     __     __   __     __  __     ______    
/\ \/ /    /\  ___\   /\  __ \   /\ \       /\ \   /\ "-.\ \   /\  ___\      /\__  _\ /\  ___\   /\  == \   /\ "-./  \   /\ \   /\ "-.\ \   /\ \/\ \   /\  ___\   
\ \  _"-.  \ \  __\   \ \  __ \  \ \ \____  \ \ \  \ \ \-.  \  \ \ \__ \     \/_/\ \/ \ \  __\   \ \  __<   \ \ \-./\ \  \ \ \  \ \ \-.  \  \ \ \_\ \  \ \___  \  
 \ \_\ \_\  \ \_____\  \ \_\ \_\  \ \_____\  \ \_\  \ \_\\"\_\  \ \_____\       \ \_\  \ \_____\  \ \_\ \_\  \ \_\ \ \_\  \ \_\  \ \_\\"\_\  \ \_____\  \/\_____\ 
  \/_/\/_/   \/_____/   \/_/\/_/   \/_____/   \/_/   \/_/ \/_/   \/_____/        \/_/   \/_____/   \/_/ /_/   \/_/  \/_/   \/_/   \/_/ \/_/   \/_____/   \/_____/ 
                                                                                                                                                                  
*/

/**********************************************************************************************************************************************************************/
/*                                                                              Objects                                                                               */
/**********************************************************************************************************************************************************************/

/*********************************************************************************/
/*                                    Area 1                                     */
/*********************************************************************************/
var TrainStation1 = {
	name:     "TrainStation1",
	type:     "location",
	folders:  "<br>MainStreet<br>TrainStation2<br>TrainStation3<br>TrainStation4<br>",
	items:    "<br>TrainConductor<br>HurryingPassenger<br>",
	response: "You have arrived at Train Station 1",
}
	var TrainConductor = {
		name: "TrainConductor",
		type: "person",
		info: "All aboard! There is no time to waste!",
	}
	var HurryingPassenger = {
		name: "HurryingPassenger",
		type: "person",
		info: "Excuse me! I'm going to be late for my train!",
	}
var MainStreet = {
	name:     "MainStreet",
	type:     "location",
	folders:  "<br>TrainStation1<br>Home<br>Store<br>Path<br>Barn<br>",
	items:    "<br>Mailman<br>Jogger<br>StopSign<br>",
	response: "You have entered the Main Street",
}
	var Mailman = {
		name: "Mailman",
		type: "person",
		info: "Howdy! it sure is a fine day out here!",
	}
	var Jogger = {
		name: "Jogger",
		type: "person",
		info: "Sorry, can't talk right now!",
	}
	var StopSign = {
		name:     "StopSign",
		type:     "item",
		info:     "Just a stop sign",
	}
var Home = {
	name:     "Home",
	type:     "location",
	folders:  "<br>MainStreet<br>",
	items:    "<br>WelcomeLetter<br>",
	response: "You have returned Home",
}
	var WelcomeLetter = {
		name:     "WelcomeLetter",
		type:     "item",
		info:     "Welcome to Kealing Terminus!<br>"
				 +"<br>"
				 +"To look around type 'dir'<br>"
				 +"To go to a location, type 'cd LOCATION'<br>"
				 +"To find the syntax on a command, type 'COMMAND /?'<br>"
				 +"If you ever get stuck, type 'help' or 'help /?'<br>"
				 +"<br>"
				 +"There is a special item in the game, the MAP<br>"
				 +"This will be there whenever you need it<br>"
				 +"Type 'more < Map' to see your current spot<br>"
				 +"<br>"
				 +"Good luck!"
}
var Store = {
	name:     "Store",
	type:     "location",
	folders:  "<br>MainStreet<br>",
	items:    "<br>Salesman<br>Buyer<br>",
	response: "You have entered the store",
}
	var Salesman = {
		name: "Salesman",
		type: "person",
		info: "Hi there! I don't see you have anything to check out with!",
	}
	var Buyer = {
		name: "Buyer",
		type: "person",
		info: "I'm going to buy this new TV! I can't wait for the new season of Star Ships!",
	}
var Path = {
	name:     "Path",
	type:     "location",
	folders:  "<br>MainStreet<br>Well<br>",
	items:    "<br>BackSign<br>",
	response: "You have entered an old beat up path",
}
	var InfoSign = {
		name:     "BackSign",
		type:     "item",
		info:     "There is an old sign up ahead. It says: 'cd ..' will let you go back to wherever you came from",
	}
var Well = {
	name:     "Well",
	type:     "location",
	folders:  "<br>Path<br>",
	items:    "<br>",
	response: "This Well is missing a bucket",
}
var Barn = {
	name:     "Barn",
	type:     "location",
	folders:  "<br>MainStreet<br>",
	items:    "<br>Farmer<br>WagonWheel<br>",
	response: "You have entered the Barn",
}
	var Farmer = {
		name: "Farmer",
		type: "person",
		info: "I can't believe my crops are gone! At least I still have my Barn",
	}
	var WagonWheel = {
		name:     "WagonWheel",
		type:     "item",
		info:     "Just a wheel for a wagon",
	}

/*********************************************************************************/
/*                                    Area 2                                     */
/*********************************************************************************/
var TrainStation2 = {
	name:     "TrainStation2",
	type:     "location",
	folders:  "<br>AbandonedStreet<br>TrainStation1<br>TrainStation3<br>TrainStation4<br>",
	items:    "<br>TrainConductor<br>",
	response: "You have arrived at Train Station 2",
}
var AbandonedStreet = {
		name:     "AbandonedStreet",
		type:     "location",
		folders:  "<br>TrainStation2<br>OldShop<br>OldHouse<br>OldFarm<br>",
		items:    "<br>",
		response: "The air itself feels dead. Nothing stirs and nobody is to be seen",
}
var OldShop = {
	name:     "OldShop",
	type:     "location",
	folders:  "<br>AbandonedStreet<br>",
	items:    "<br>",
	response: "You have entered the Old Shop",
}
var OldHouse = {
	name:     "OldHouse",
	type:     "location",
	folders:  "<br>AbandonedStreet<br>",
	items:    "<br>",
	response: "You have entered the Old House",
}
var OldFarm = {
	name:     "OldFarm",
	type:     "location",
	folders:  "<br>AbandonedStreet<br>",
	items:    "<br>",
	response: "You have entered the Old Farm",
}

/*********************************************************************************/
/*                                    Area 3                                     */
/*********************************************************************************/
var TrainStation3 = {
	name:     "TrainStation3",
	type:     "location",
	folders:  "<br>AncientPath<br>TrainStation1<br>TrainStation2<br>TrainStation4<br>",
	items:    "<br>TrainConductor<br>",
	response: "You have arrived at Train Station 3",
}
var AncientPath = {
	name:     "AncientPath",
	type:     "location",
	folders:  "<br>TrainStation3<br>DarkCastle<br>",
	items:    "<br>",
	response: "You have started upon the ancient path",
}
var DarkCastle = {
	name:     "DarkCastle",
	type:     "location",
	folders:  "<br>AncientPathy<br>",
	items:    "<br>EvilKing<br>",
	response: "You have entered the Dark Castle",
}
	var EvilKing = {
		name: "EvilKing",
		type: "person",
		info: "Welcome Traveler to my humble domain. You have traveled far to get here. No doubt you have come here to stop me, however I doubt you can do that, for I am unstoppable! HA HA HA!",
	}

/*********************************************************************************/
/*                                    Area 4                                     */
/*********************************************************************************/
var TrainStation4 = {
	name:     "TrainStation4",
	type:     "location",
	folders:  "<br>Highway<br>TrainStation1<br>TrainStation2<br>TrainStation3<br>",
	items:    "<br>TrainConductor<br>",
	response: "You have entered Train Station 4",
}
var Highway = {
	name:     "Highway",
	type:     "location",
	folders:  "<br>TrainStation4<br>Marketplace<br>Bank<br>Armory<br>TempleOfWisdom<br>",
	items:    "<br>",
	response: "You have entered the main Highway. It is filled with people and strange vehicles you have never seen before",
}
var MarketPlace = {
	name:     "Marketplace",
	type:     "location",
	folders:  "<br>Highway<br>",
	items:    "<br>",
	response: "You have entered the Marketplace",
}
var Bank = {
	name:     "Bank",
	type:     "location",
	folders:  "<br>Highway<br>",
	items:    "<br>",
	response: "You have entered the Bank",
}
var Armory = {
	name:     "Armory",
	type:     "location",
	folders:  "<br>Highway<br>",
	items:    "<br>",
	response: "You have entered the Armory",
}
var TempleOfWisdom = {
	name:     "TempleOfWisdom",
	type:     "location",
	folders:  "<br>Highway<br>",
	items:    "<br>",
	response: "You have entered the Temple Of Wisdom, where the smartest people in the area gather to reflect and study",
}

/*********************************************************************************/
/*                                    Area 5                                     */
/*********************************************************************************/
var Forest = {
	name: "Forest",
	type: "location",
	folders: "<br>",
	items: "<br>AncientForestBeing<br>",
	response: "You have entered the Ancient Forest",
}
	var AncientForestBeing = {
		name: "AncientForestBeing",
		type: "person",
		info: "Welcome Traveler... Somehow you broke the game so good for you I guess. But now you are trapped in the Forest forever"
	}

/**********************************************************************************************************************************************************************/
/*                                                                           Past Versions                                                                            */
/**********************************************************************************************************************************************************************/

/*********************************************************************************/
/*                                 Basic Notepad                                 */
/*********************************************************************************/
/*

 " /---------\                                                           <br>"
+"/ /-------\ |                                                          <br>"
+"\ \--------/                                                           <br>"
+"|\-------------------------------------------------------------------\ <br>"
+"|                                                          /--------\ \<br>"
+"|   ###################################################   | \-------/ /<br>"
+"|   ###################################################    \---------/|<br>"
+"|   ###################################################   |           |<br>"
+"|   ###################################################   |           |<br>"
+"|   ###################################################   |           |<br>"
+"|   ###################################################   |           |<br>"
+"|   ###################################################   |           |<br>"
+"|   ###################################################   |           |<br>"
+"|   ###################################################   |           |<br>"
+"|   ###################################################   |           |<br>"
+"|   ###################################################   |           |<br>"
+"|   ###################################################   |           |<br>"
+"|   ###################################################   |           |<br>"
+"|   ###################################################   |           |<br>"
+"|   ###################################################   |           |<br>"
+"|   ###################################################   |           |<br>"
+"|   ###################################################   |           |<br>"
+"|                                                         |           |<br>"
+"|---------------------------------------------------------|           |<br>"
+"                                                          |-----------|"

*/

/*********************************************************************************/
/*                                   Basic Map                                   */
/*********************************************************************************/
/*

		all_text += " /---------\                                                                                                                                                                <br>"
				   +"/ /-------\ |                                                                                                                                                               <br>"
				   +"\ \--------/                                                                                                                                                                <br>"
				   +"|\------------------------------------------------------------------------------------------------------------------------------------------------------------------------\ <br>"
				   +"|                                                                                                                                                               /--------\ \<br>"
				   +"|   |------|     |-------|     |-----------------|    ---------------------------------------------------------    |-----------------|    |----------|         | \-------/ /<br>"
				   +"|   | Home |     | Store |     | Train Station 1 | -- ||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -- | Train Station 2 |    | Old Shop |          \---------/|<br>"
				   +"|   |------|     |-------|     |-----------------|    ---------------------------------------------------------    |-----------------|    |----------|         |           |<br>"
				   +"|      |             |                 |                                                                              |        |               |               |           |<br>"
				   +"|   |-------------------------------------------|                                                                   | __ |  |------------------------------|   |           |<br>"
				   +"|   |                Main Street                |      |--------------------------------------------------|         | __ |  |       Abandoned Street       |   |           |<br>"
				   +"|   |-------------------------------------------|      | @@@   @@@   @@@   @@@   @@@   @@@   @@@   @@@    |         | __ |  |------------------------------|   |           |<br>"
				   +"|      |                              |                | @@@   @@@   @@@   @@@   @@@   @@@   @@@   @@@    |         | __ |       |                 |           |           |<br>"
				   +"|   |------|                       |------|            |  |     |     |     |     |     |     |     |     |         | __ |   |-----------|   |----------|      |           |<br>"
				   +"|   |      |                       | Barn |            |    @@@   @@@   @@@   @@@   @@@   @@@   @@@   @@@ |         | __ |   | Old House |   |          |      |           |<br>"
				   +"|   |      |                       |------|            |    @@@   @@@   @@@   @@@   @@@   @@@   @@@   @@@ |         | __ |   |-----------|   | Old Farm |      |           |<br>"
				   +"|   | Path |    |------|                               |     |     |     |     |     |     |     |     |  |         | __ |                   |          |      |           |<br>"
				   +"|   |      | -- | Well |                               |  @@@   @@@   @@@   @@@   @@@   @@@   @@@   @@@   |         | __ |                   |----------|      |           |<br>"
				   +"|   |      |    |------|                               |  @@@   @@@   @@@   @@@   @@@   @@@   @@@   @@@   |         | __ |                                     |           |<br>"
				   +"|   |------|                                           |   |     |     |     |     |     |     |     |    |         | __ |                                     |           |<br>"
				   +"|                                                      |--------------------------------------------------|         | __ |                                     |           |<br>"
				   +"|                                                                           Forest                                  |    |                                     |           |<br>"
				   +"|                                                                                                                     |                                        |           |<br>"
				   +"|                       |-----------------|    ----------------------------------------------------------------    |-----------------|                         |           |<br>"
				   +"|                       | Train Station 4 | -- |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -- | Train Station 3 |                         |           |<br>"
				   +"|                       |-----------------|    ----------------------------------------------------------------    |-----------------|   |-----------------|   |           |<br>"
				   +"|                               |                                                                                     |                  |                 |   |           |<br>"
				   +"|   |--------------|    |-------------------|    |------------------|                                            |------------------|    |                 |   |           |<br>"
				   +"|   | Market Place | -- |      Highway      | -- | Temple of Wisdom |                                            |   Ancient Path   | -- |   Dark Castle   |   |           |<br>"
				   +"|   |--------------|    |-------------------|    |------------------|                                            |------------------|    |                 |   |           |<br>"
				   +"|                          |           |                                                                                                 |                 |   |           |<br>"
				   +"|                       |------|   |--------|                                                                                            |-----------------|   |           |<br>"
				   +"|                       | Bank |   | Armory |                                                                                                                  |           |<br>"
				   +"|                       |------|   |--------|                                                                                                                  |           |<br>"
				   +"|                                                                                                                                                              |           |<br>"
				   +"|--------------------------------------------------------------------------------------------------------------------------------------------------------------|           |<br>"
				   +"                                                                                                                                                               |-----------|<br>"
				   +"<br>> "+cursor;

*/

/*********************************************************************************/
/*                             Map with <span> tags                              */
/*********************************************************************************/
/*

		all_text += " <span class='notepad'>/---------\\</span>                                                                                                                                                                <br>"
				   +"<span class='notepad'>/ /-------\\ |</span>                                                                                                                                                               <br>"
				   +"<span class='notepad'>\\ \\--------/ </span>                                                                                                                                                               <br>"
				   +"<span class='notepad'>|\\------------------------------------------------------------------------------------------------------------------------------------------------------------------------\\</span> <br>"
				   +"<span class='notepad'>|                                                                                                                                                               /--------\\ \\</span><br>"
				   +"<span class='notepad'>|   <span class='Home'>|------|</span>     <span class='Store'>|-------|</span>     <span class='TrainStation1'>|-----------------|</span>    ---------------------------------------------------------    <span class='TrainStation2'>|-----------------|</span>    <span class='OldShop'>|----------|</span>         | \\-------/ /</span><br>"
				   +"<span class='notepad'>|   <span class='Home'>| Home |</span>     <span class='Store'>| Store |</span>     <span class='TrainStation1'>| Train Station 1 |</span> -- ||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -- <span class='TrainStation2'>| Train Station 2 |</span>    <span class='OldShop'>| Old Shop |</span>          \\---------/|</span><br>"
				   +"<span class='notepad'>|   <span class='Home'>|------|</span>     <span class='Store'>|-------|</span>     <span class='TrainStation1'>|-----------------|</span>    ---------------------------------------------------------    <span class='TrainStation2'>|-----------------|</span>    <span class='OldShop'>|----------|</span>         |           |<br>"
				   +"|      |             |                 |                                                                              |        |               |               |           |<br>"
				   +"|   <span class='MainStreet'>|-------------------------------------------|</span>                                                                   | __ |  <span class='AbandonedStreet'>|------------------------------|</span>   |           |<br>"
				   +"|   <span class='MainStreet'>|                Main Street                |</span>      <span class='Forest'>|--------------------------------------------------|</span>         | __ |  <span class='AbandonedStreet'>|       Abandoned Street       |</span>   |           |<br>"
				   +"|   <span class='MainStreet'>|-------------------------------------------|</span>      <span class='Forest'>| <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>    |</span>         | __ |  <span class='AbandonedStreet'>|------------------------------|</span>   |           |<br>"
				   +"|      |                              |                <span class='Forest'>| <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>    |</span>         | __ |       |                 |           |           |<br>"
				   +"|   <span class='Path'>|------|</span>                       <span class='Barn'>|------|</span>            <span class='Forest'>|  <span class='yellow'>|</span>     <span class='yellow'>|</span>     <span class='yellow'>|</span>     <span class='yellow'>|</span>     <span class='yellow'>|</span>     <span class='yellow'>|</span>     <span class='yellow'>|</span>     <span class='yellow'>|</span>     |</span>         | __ |   <span class='OldHouse'>|-----------|</span>   <span class='OldFarm'>|----------|</span>      |           |<br>"
				   +"|   <span class='Path'>|      |</span>                       <span class='Barn'>| Barn |</span>            <span class='Forest'>|    <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span> |</span>         | __ |   <span class='OldHouse'>| Old House |</span>   <span class='OldFarm'>|          |</span>      |           |<br>"
				   +"|   <span class='Path'>|      |</span>                       <span class='Barn'>|------|</span>            <span class='Forest'>|    <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span> |</span>         | __ |   <span class='OldHouse'>|-----------|</span>   <span class='OldFarm'>| Old Farm |</span>      |           |<br>"
				   +"|   <span class='Path'>| Path |</span>    <span class='Well'>|------|</span>                               <span class='Forest'>|     <span class='yellow'>|</span>     <span class='yellow'>|</span>     <span class='yellow'>|</span>     <span class='yellow'>|</span>     <span class='yellow'>|</span>     <span class='yellow'>|</span>     <span class='yellow'>|</span>     <span class='yellow'>|</span>  |</span>         | __ |                   <span class='OldFarm'>|          |</span>      |           |<br>"
				   +"|   <span class='Path'>|      |</span> -- <span class='Well'>| Well |</span>                               <span class='Forest'>|  <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   |</span>         | __ |                   <span class='OldFarm'>|----------|</span>      |           |<br>"
				   +"|   <span class='Path'>|      |</span>    <span class='Well'>|------|</span>                               <span class='Forest'>|  <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   <span class='green'>@@@</span>   |</span>         | __ |                                     |           |<br>"
				   +"|   <span class='Path'>|------|</span>                                           <span class='Forest'>|   <span class='yellow'>|</span>     <span class='yellow'>|</span>     <span class='yellow'>|</span>     <span class='yellow'>|</span>     <span class='yellow'>|</span>     <span class='yellow'>|</span>     <span class='yellow'>|</span>     <span class='yellow'>|</span>    |</span>         | __ |                                     |           |<br>"
				   +"|                                                      <span class='Forest'>|--------------------------------------------------|</span>         | __ |                                     |           |<br>"
				   +"|                                                      <span class='Forest'>                     Forest                         </span>         |    |                                     |           |<br>"
				   +"|                                                                                                                     |                                        |           |<br>"
				   +"|                       <span class='TrainStation4'>|-----------------|</span>    ----------------------------------------------------------------    <span class='TrainStation3'>|-----------------|</span>                         |           |<br>"
				   +"|                       <span class='TrainStation4'>| Train Station 4 |</span> -- |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -- <span class='TrainStation3'>| Train Station 3 |</span>                         |           |<br>"
				   +"|                       <span class='TrainStation4'>|-----------------|</span>    ----------------------------------------------------------------    <span class='TrainStation3'>|-----------------|</span>   <span class='DarkCastle'>|-----------------|</span>   |           |<br>"
				   +"|                               |                                                                                     |                  <span class='DarkCastle'>|                 |</span>   |           |<br>"
				   +"|   <span class='MarketPlace'>|--------------|</span>    <span class='Highway'>|-------------------|</span>    <span class='TempleOfWisdom'>|------------------|</span>                                            <span class='AncientPath'>|------------------|</span>    <span class='DarkCastle'>|                 |</span>   |           |<br>"
				   +"|   <span class='MarketPlace'>| Market Place |</span> -- <span class='Highway'>|      Highway      |</span> -- <span class='TempleOfWisdom'>| Temple of Wisdom |</span>                                            <span class='AncientPath'>|   Ancient Path   |</span> -- <span class='DarkCastle'>|   Dark Castle   |</span>   |           |<br>"
				   +"|   <span class='MarketPlace'>|--------------|</span>    <span class='Highway'>|-------------------|</span>    <span class='TempleOfWisdom'>|------------------|</span>                                            <span class='AncientPath'>|------------------|</span>    <span class='DarkCastle'>|                 |</span>   |           |<br>"
				   +"|                          |           |                                                                                                 <span class='DarkCastle'>|                 |</span>   |           |<br>"
				   +"|                       <span class='Bank'>|------|</span>   <span class='Armory'>|--------|</span>                                                                                            <span class='DarkCastle'>|-----------------|</span>   |           |<br>"
				   +"|                       <span class='Bank'>| Bank |</span>   <span class='Armory'>| Armory |</span>                                                                                                                  |           |<br>"
				   +"|                       <span class='Bank'>|------|</span>   <span class='Armory'>|--------|</span>                                                                                                                  |           |<br>"
				   +"|                                                                                                                                                              |           |<br>"
				   +"|--------------------------------------------------------------------------------------------------------------------------------------------------------------|           |</span><br>"
				   +"                                                                                                                                                               <span class='notepad'>|-----------|</span><br>"
				   +"<br>> "+cursor;

*/

/*********************************************************************************/
/*                                Map with %nbsp;                                */
/*********************************************************************************/
/*

		all_text += "&nbsp;<span class='notepad'>/---------\\</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>"
						   +"<span class='notepad'>/&nbsp;/-------\\&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>"
						   +"<span class='notepad'>\\&nbsp;\\--------/&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>"
						   +"<span class='notepad'>|\\------------------------------------------------------------------------------------------------------------------------------------------------------------------------\\</span>&nbsp;<br>"
						   +"<span class='notepad'>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/--------\\&nbsp;\\</span><br>"
						   +"<span class='notepad'>|&nbsp;&nbsp;&nbsp;<span class='Home'>|------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='Store'>|-------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='TrainStation1'>|-----------------|</span>&nbsp;&nbsp;&nbsp;&nbsp;---------------------------------------------------------&nbsp;&nbsp;&nbsp;&nbsp;<span class='TrainStation2'>|-----------------|</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class='OldShop'>|----------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;\\-------/&nbsp;/</span><br>"
						   +"<span class='notepad'>|&nbsp;&nbsp;&nbsp;<span class='Home'>|&nbsp;Home&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='Store'>|&nbsp;Store&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='TrainStation1'>|&nbsp;Train&nbsp;Station&nbsp;1&nbsp;|</span>&nbsp;--&nbsp;|||||||||||||||||||||||||||||||||||||||||||||||||||||||||&nbsp;--&nbsp;<span class='TrainStation2'>|&nbsp;Train&nbsp;Station&nbsp;2&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class='OldShop'>|&nbsp;Old&nbsp;Shop&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\---------/|</span><br>"
						   +"<span class='notepad'>|&nbsp;&nbsp;&nbsp;<span class='Home'>|------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='Store'>|-------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='TrainStation1'>|-----------------|</span>&nbsp;&nbsp;&nbsp;&nbsp;---------------------------------------------------------&nbsp;&nbsp;&nbsp;&nbsp;<span class='TrainStation2'>|-----------------|</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class='OldShop'>|----------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;<span class='MainStreet'>|-------------------------------------------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;__&nbsp;|&nbsp;&nbsp;<span class='AbandonedStreet'>|------------------------------|</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;<span class='MainStreet'>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Main&nbsp;Street&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='Forest'>|--------------------------------------------------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;__&nbsp;|&nbsp;&nbsp;<span class='AbandonedStreet'>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Abandoned&nbsp;Street&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;<span class='MainStreet'>|-------------------------------------------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='Forest'>|&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;__&nbsp;|&nbsp;&nbsp;<span class='AbandonedStreet'>|------------------------------|</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='Forest'>|&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;__&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;<span class='Path'>|------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='Barn'>|------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='Forest'>|&nbsp;&nbsp<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;__&nbsp;|&nbsp;&nbsp;&nbsp;<span class='OldHouse'>|-----------|</span>&nbsp;&nbsp;&nbsp;<span class='OldFarm'>|----------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;<span class='Path'>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='Barn'>|&nbsp;Barn&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='Forest'>|&nbsp;&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;__&nbsp;|&nbsp;&nbsp;&nbsp;<span class='OldHouse'>|&nbsp;Old&nbsp;House&nbsp;|</span>&nbsp;&nbsp;&nbsp;<span class='OldFarm'>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;<span class='Path'>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='Barn'>|------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='Forest'>|&nbsp;&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;__&nbsp;|&nbsp;&nbsp;&nbsp;<span class='OldHouse'>|-----------|</span>&nbsp;&nbsp;&nbsp;<span class='OldFarm'>|&nbsp;Old&nbsp;Farm&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;<span class='Path'>|&nbsp;Path&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class='Well'>|------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='Forest'>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>|</span>&nbsp;&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;__&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='OldFarm'>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;<span class='Path'>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>&nbsp;--&nbsp;<span class='Well'>|&nbsp;Well&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='Forest'>|&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;__&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='OldFarm'>|----------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;<span class='Path'>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class='Well'>|------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='Forest'>|&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;<span class='green'>@@@</span>&nbsp;&nbsp;&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;__&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;<span class='Path'>|------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='Forest'>|&nbsp;&nbsp;&nbsp<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;__&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='Forest'>|--------------------------------------------------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;__&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='Forest'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forest&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='TrainStation4'>|-----------------|</span>&nbsp;&nbsp;&nbsp;&nbsp;----------------------------------------------------------------&nbsp;&nbsp;&nbsp;&nbsp;<span class='TrainStation3'>|-----------------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='TrainStation4'>|&nbsp;Train&nbsp;Station&nbsp;4&nbsp;|</span>&nbsp;--&nbsp;||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||&nbsp;--&nbsp;<span class='TrainStation3'>|&nbsp;Train&nbsp;Station&nbsp;3&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='TrainStation4'>|-----------------|</span>&nbsp;&nbsp;&nbsp;&nbsp;----------------------------------------------------------------&nbsp;&nbsp;&nbsp;&nbsp;<span class='TrainStation3'>|-----------------|</span>&nbsp;&nbsp;&nbsp;<span class='DarkCastle'>|-----------------|</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='DarkCastle'>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;<span class='MarketPlace'>|--------------|</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class='Highway'>|-------------------|</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class='TempleOfWisdom'>|------------------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='AncientPath'>|------------------|</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class='DarkCastle'>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;<span class='MarketPlace'>|&nbsp;Market&nbsp;Place&nbsp;|</span>&nbsp;--&nbsp;<span class='Highway'>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Highway&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>&nbsp;--&nbsp;<span class='TempleOfWisdom'>|&nbsp;Temple&nbsp;of&nbsp;Wisdom&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='AncientPath'>|&nbsp;&nbsp;&nbsp;Ancient&nbsp;Path&nbsp;&nbsp;&nbsp;|</span>&nbsp;--&nbsp;<span class='DarkCastle'>|&nbsp;&nbsp;&nbsp;Dark&nbsp;Castle&nbsp;&nbsp;&nbsp;|</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;<span class='MarketPlace'>|--------------|</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class='Highway'>|-------------------|</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class='TempleOfWisdom'>|------------------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='AncientPath'>|------------------|</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class='DarkCastle'>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='DarkCastle'>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='Bank'>|------|</span>&nbsp;&nbsp;&nbsp;<span class='Armory'>|--------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='DarkCastle'>|-----------------|</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='Bank'>|&nbsp;Bank&nbsp;|</span>&nbsp;&nbsp;&nbsp;<span class='Armory'>|&nbsp;Armory&nbsp;|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='Bank'>|------|</span>&nbsp;&nbsp;&nbsp;<span class='Armory'>|--------|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
						   +"|--------------------------------------------------------------------------------------------------------------------------------------------------------------|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span><br>"
						   +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='notepad'>|-----------|</span><br>"
						   +"<br>> "+cursor;

*/