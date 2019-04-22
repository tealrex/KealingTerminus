/*
 __  __     ______     ______     __         __     __   __     ______        ______   ______     ______     __    __     __     __   __     __  __     ______    
/\ \/ /    /\  ___\   /\  __ \   /\ \       /\ \   /\ "-.\ \   /\  ___\      /\__  _\ /\  ___\   /\  == \   /\ "-./  \   /\ \   /\ "-.\ \   /\ \/\ \   /\  ___\   
\ \  _"-.  \ \  __\   \ \  __ \  \ \ \____  \ \ \  \ \ \-.  \  \ \ \__ \     \/_/\ \/ \ \  __\   \ \  __<   \ \ \-./\ \  \ \ \  \ \ \-.  \  \ \ \_\ \  \ \___  \  
 \ \_\ \_\  \ \_____\  \ \_\ \_\  \ \_____\  \ \_\  \ \_\\"\_\  \ \_____\       \ \_\  \ \_____\  \ \_\ \_\  \ \_\ \ \_\  \ \_\  \ \_\\"\_\  \ \_____\  \/\_____\ 
  \/_/\/_/   \/_____/   \/_/\/_/   \/_____/   \/_/   \/_/ \/_/   \/_____/        \/_/   \/_____/   \/_/ /_/   \/_/  \/_/   \/_/   \/_/ \/_/   \/_____/   \/_____/ 
                                                                                                                                                                  
*/

document.addEventListener("contextmenu", function rightClick(event) {
	event.preventDefault();
	console.log("rightclick");
	/*
	clipboard = document.execCommand('copy');
	all_text = all_text.slice(0,-26) + clipboard + cursor;
	document.getElementById("text").innerHTML = all_text;
	*/
});

document.addEventListener("keyup", function keyUp(event) {
	x = event.key;

	if (x == "Control" || x == "Alt" || x == "Meta") {
		control_key_down = false;
	}
});

document.addEventListener("keydown", function keyDown(event) {
	x = event.key;

	if (x == "Control" || x == "Alt" || x == "Meta") {
		event.preventDefault();
		control_key_down = true;
	}

	/**********************************************************************************************************************************************************************/
	/*                                                                          Windows Terminal                                                                          */
	/**********************************************************************************************************************************************************************/
	else if (terminal == "Windows" && control_key_down == false && person_talking == false) {
		check_scroll = true;

		/*********************************************************************************/
		/*                                     Basic                                     */
		/*********************************************************************************/
		if (x.length == 1) {
			all_text = all_text.slice(0,-26) + x + cursor;
			input_all += x;
			document.getElementById("text").innerHTML = all_text;
		} else if (x == "Backspace") {
			input_last = all_text[all_text.length-27];
			if (input_all.includes(input_last)) {
				input_all = input_all.slice(0,-1);
				all_text = all_text.slice(0,-27) + cursor;
				document.getElementById("text").innerHTML = all_text;
			}
		} else if (x == "ArrowUp") {
			check_scroll = false;
			elmnt.scrollTop = elmnt.scrollTop - 17;
		} else if (x == "ArrowDown") {
			check_scroll = false;
			elmnt.scrollTop = elmnt.scrollTop + 17;
		} else if (x == "ArrowLeft") {
			check_scroll = false;
			elmnt.scrollLeft = elmnt.scrollLeft - 17;
		} else if (x == "ArrowRight") {
			check_scroll = false;
			elmnt.scrollLeft = elmnt.scrollLeft + 17;
		}

		/*********************************************************************************/
		/*                                      Tab                                      */
		/*********************************************************************************/
		else if (x == "Tab") {
			event.preventDefault();
			input_1 = input_all.split(" ")[0];
			input_2 = input_all.split(" ")[1];
			input_3 = input_all.split(" ")[2];
			input_4 = input_all.split(" ")[3];

			if (input_1.toLowerCase() == "cd" && input_2 != null && input_3 == null) {
				possible_locations = eval(current_location).folders.split("<br>");
				wanted_location = "";
				for (i=0; i < possible_locations.length; i++) {
					if (possible_locations[i].toLowerCase().startsWith(input_2.toLowerCase())) {
						wanted_location = possible_locations[i];
					}
				}
				if (wanted_location != "") {
					all_text = all_text.slice(0,-26);
					all_text = all_text.slice(0,"-"+input_2.length) + wanted_location + cursor;
					document.getElementById("text").innerHTML = all_text;
					input_all = input_all.slice(0,"-"+input_2.length);
					input_all = input_all + wanted_location;
				}
			} else if (input_1.toLowerCase() == "del" && input_2 != null && input_3 == null) {
				possible_items += "<br>Home<br>TrainStation1<br>MainStreet<br>Store<br>Path<br>Well<br>Barn<br>TrainStation2<br>AbandonedStreet<br>OldShop<br>OldHouse<br>OldFarm<br>TrainStation3<br>AncientPath<br>DarkCastle<br>TrainStation4<br>Highway<br>MarketPlace<br>Bank<br>Armory<br>TempleOfWisdom<br>Forest<br>"+eval(current_location).items;
				possible_items = possible_items.split("<br>");
				wanted_item = "";
				for (i=0; i < possible_items.length; i++) {
					if (possible_items[i].toLowerCase().startsWith(input_2.toLowerCase())) {
						wanted_item = possible_items[i];
					}
				}
				if (wanted_item != "") {
					all_text = all_text.slice(0,-26);
					all_text = all_text.slice(0,"-"+input_2.length) + wanted_item + cursor;
					document.getElementById("text").innerHTML = all_text;
					input_all = input_all.slice(0,"-"+input_2.length);
					input_all = input_all + wanted_item;
				}
			} else if (input_1.toLowerCase() == "erase" && input_2 != null && input_3 == null) {
				possible_items += "<br>Home<br>TrainStation1<br>MainStreet<br>Store<br>Path<br>Well<br>Barn<br>TrainStation2<br>AbandonedStreet<br>OldShop<br>OldHouse<br>OldFarm<br>TrainStation3<br>AncientPath<br>DarkCastle<br>TrainStation4<br>Highway<br>MarketPlace<br>Bank<br>Armory<br>TempleOfWisdom<br>Forest<br>"+eval(current_location).items;
				possible_items = possible_items.split("<br>");
				wanted_item = "";
				for (i=0; i < possible_items.length; i++) {
					if (possible_items[i].toLowerCase().startsWith(input_2.toLowerCase())) {
						wanted_item = possible_items[i];
					}
				}
				if (wanted_item != "") {
					all_text = all_text.slice(0,-26);
					all_text = all_text.slice(0,"-"+input_2.length) + wanted_item + cursor;
					document.getElementById("text").innerHTML = all_text;
					input_all = input_all.slice(0,"-"+input_2.length);
					input_all = input_all + wanted_item;
				}
			} else if (input_1.toLowerCase() == "more" && input_2 == "<" && input_3 != null && input_4 == null) {
				possible_items = "Map"+eval(current_location).items;
				possible_items = possible_items.split("<br>");
				wanted_item = "";
				for (i=0; i < possible_items.length; i++) {
					if (possible_items[i].toLowerCase().startsWith(input_3.toLowerCase())) {
						wanted_item = possible_items[i];
					}
				}
				if (wanted_item != "") {
					all_text = all_text.slice(0,-26);
					all_text = all_text.slice(0,"-"+input_3.length) + wanted_item + cursor;
					document.getElementById("text").innerHTML = all_text;
					input_all = input_all.slice(0,"-"+input_3.length);
					input_all = input_all + wanted_item;
				}
			} else if (input_1.toLowerCase() == "copy" && input_2 != null && input_3 == null) {
				possible_items = eval(current_location).items.split("<br>");
				wanted_item = "";
				for (i=0; i < possible_items.length; i++) {
					if (possible_items[i].toLowerCase().startsWith(input_2.toLowerCase())) {
						wanted_item = possible_items[i];
					}
				}
				if (wanted_item != "") {
					all_text = all_text.slice(0,-26);
					all_text = all_text.slice(0,"-"+input_2.length) + wanted_item + cursor;
					document.getElementById("text").innerHTML = all_text;
					input_all = input_all.slice(0,"-"+input_2.length);
					input_all = input_all + wanted_item;
				}
			} else if (input_1.toLowerCase() == "copy" && input_2 != null && input_3 != null && input_4 == null) {
				possible_items = "<br>Home<br>TrainStation1<br>MainStreet<br>Store<br>Path<br>Well<br>Barn<br>TrainStation2<br>AbandonedStreet<br>OldShop<br>OldHouse<br>OldFarm<br>TrainStation3<br>AncientPath<br>DarkCastle<br>TrainStation4<br>Highway<br>MarketPlace<br>Bank<br>Armory<br>TempleOfWisdom<br>Forest<br>".split("<br>");
				wanted_item = "";
				for (i=0; i < possible_items.length; i++) {
					if (possible_items[i].toLowerCase().startsWith(input_3.toLowerCase())) {
						wanted_item = possible_items[i];
					}
				}
				if (wanted_item != "") {
					all_text = all_text.slice(0,-26);
					all_text = all_text.slice(0,"-"+input_3.length) + wanted_item + cursor;
					document.getElementById("text").innerHTML = all_text;
					input_all = input_all.slice(0,"-"+input_3.length);
					input_all = input_all + wanted_item;
				}
			} else if (input_1.toLowerCase() == "move" && input_2 != null && input_3 == null) {
				possible_items = eval(current_location).items.split("<br>");
				wanted_item = "";
				for (i=0; i < possible_items.length; i++) {
					if (possible_items[i].toLowerCase().startsWith(input_2.toLowerCase())) {
						wanted_item = possible_items[i];
					}
				}
				if (wanted_item != "") {
					all_text = all_text.slice(0,-26);
					all_text = all_text.slice(0,"-"+input_2.length) + wanted_item + cursor;
					document.getElementById("text").innerHTML = all_text;
					input_all = input_all.slice(0,"-"+input_2.length);
					input_all = input_all + wanted_item;
				}
			} else if (input_1.toLowerCase() == "move" && input_2 != null && input_3 != null && input_4 == null) {
				possible_items = "<br>Home<br>TrainStation1<br>MainStreet<br>Store<br>Path<br>Well<br>Barn<br>TrainStation2<br>AbandonedStreet<br>OldShop<br>OldHouse<br>OldFarm<br>TrainStation3<br>AncientPath<br>DarkCastle<br>TrainStation4<br>Highway<br>MarketPlace<br>Bank<br>Armory<br>TempleOfWisdom<br>Forest<br>".split("<br>");
				wanted_item = "";
				for (i=0; i < possible_items.length; i++) {
					if (possible_items[i].toLowerCase().startsWith(input_3.toLowerCase())) {
						wanted_item = possible_items[i];
					}
				}
				if (wanted_item != "") {
					all_text = all_text.slice(0,-26);
					all_text = all_text.slice(0,"-"+input_3.length) + wanted_item + cursor;
					document.getElementById("text").innerHTML = all_text;
					input_all = input_all.slice(0,"-"+input_3.length);
					input_all = input_all + wanted_item;
				}
			}
		}

		/*********************************************************************************/
		/*                                     Enter                                     */
		/*********************************************************************************/
		else if (x == "Enter") {
			all_text = all_text.slice(0,-26) + "<br><br>";
			document.getElementById("text").innerHTML = all_text;
			
			input_1 = input_all.split(" ")[0];
			input_2 = input_all.split(" ")[1];
			input_3 = input_all.split(" ")[2];
			input_4 = input_all.split(" ")[3];

			/*********************************************************************************/
			/*                                      Map                                      */
			/*********************************************************************************/
			if (input_1.toLowerCase() == "more" && input_2 == "<" && input_3 == "Map" && input_4 == null) {
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
				document.getElementById("text").innerHTML = all_text;
			}

			/*********************************************************************************/
			/*                                     Basic                                     */
			/*********************************************************************************/
			else if (input_all.toLowerCase() == "help") {
				all_text += "Type HELP to show this help message<br>"
						   +"Type ABOUT to learn about this project<br>"
						   +"Type MORE < Map to see your current location<br>"
						   +"Type command-name /? to see a more detailed help list for the command<br>"
						   +"<br>"
						   +"dir                        look around<br>"
						   +"cd [location]              go to a new location<br>"
						   +"more < [item]              interact with a person or item<br>"
						   +"mkdir/md [location]        create a new location<br>"
						   +"del/erase [location/item]  delete an item, location, or person<br>"
						   +"copy [item] [destination]  copy an item to a location<br>"
						   +"move [item] [destination]  move an item to a location<br>"
						   +"cls                        clears the screen<br>"
						   +"<br>"
						   +"windows                    remains as Windows Terminal<br>"
						   +"linux                      changes to Linux Terminal<br>"
						   +"<br>"
						   +"fontsize [fontsize]        changes the font size<br>"
						   +"text [color]               changes the text color<br>"
						   +"background [color]         changes the background color<br>"
						   +"color [background][text]   changes the text and background color<br>"
						   +"reset                      reverts colors back to default<br>"
						   +"<br>> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			} else if (input_all.toLowerCase() == "about") {
				all_text += "<span class='blue'> __  __   </span> <span class='green'> ______   </span> <span class='aqua'> ______   </span> </span> <span class='red'> __       </span> <span class='purple'> __   </span> <span class='yellow'> __   __   </span> <span class='white'> ______   </span>    <span class='gray'> ______ </span> <span class='lightblue'> ______   </span> <span class='lightgreen'> ______   </span> <span class='lightaqua'> __    __   </span> <span class='lightred'> __   </span> <span class='lightpurple'> __   __   </span> <span class='lightyellow'> __  __   </span> <span class='brightwhite'> ______   </span> <br>"
						   +"<span class='blue'>/\\ \\/ /   </span> <span class='green'>/\\  ___\\  </span> <span class='aqua'>/\\  __ \\  </span> </span> <span class='red'>/\\ \\      </span> <span class='purple'>/\\ \\  </span> <span class='yellow'>/\\ \"-.\\ \\  </span> <span class='white'>/\\  ___\\  </span>    <span class='gray'>/\\__  _\\</span> <span class='lightblue'>/\\  ___\\  </span> <span class='lightgreen'>/\\  == \\  </span> <span class='lightaqua'>/\\ \"-./  \\  </span> <span class='lightred'>/\\ \\  </span> <span class='lightpurple'>/\\ \"-.\\ \\  </span> <span class='lightyellow'>/\\ \\/\\ \\  </span> <span class='brightwhite'>/\\  ___\\  </span> <br>"
						   +"<span class='blue'>\\ \\  _\"-. </span> <span class='green'>\\ \\  __\\  </span> <span class='aqua'>\\ \\  __ \\ </span> </span> <span class='red'>\\ \\ \\____ </span> <span class='purple'>\\ \\ \\ </span> <span class='yellow'>\\ \\ \\-.  \\ </span> <span class='white'>\\ \\ \\__ \\ </span>    <span class='gray'>\\/_/\\ \\/</span> <span class='lightblue'>\\ \\  __\\  </span> <span class='lightgreen'>\\ \\  __<  </span> <span class='lightaqua'>\\ \\ \\-./\\ \\ </span> <span class='lightred'>\\ \\ \\ </span> <span class='lightpurple'>\\ \\ \\-.  \\ </span> <span class='lightyellow'>\\ \\ \\_\\ \\ </span> <span class='brightwhite'>\\ \\___  \\ </span> <br>"
						   +"<span class='blue'> \\ \\_\\ \\_\\</span> <span class='green'> \\ \\_____\\</span> <span class='aqua'> \\ \\_\\ \\_\\</span> </span> <span class='red'> \\ \\_____\\</span> <span class='purple'> \\ \\_\\</span> <span class='yellow'> \\ \\_\\\\\"\\_\\</span> <span class='white'> \\ \\_____\\</span>    <span class='gray'>   \\ \\_\\</span> <span class='lightblue'> \\ \\_____\\</span> <span class='lightgreen'> \\ \\_\\ \\_\\</span> <span class='lightaqua'> \\ \\_\\ \\ \\_\\</span> <span class='lightred'> \\ \\_\\</span> <span class='lightpurple'> \\ \\_\\\\\"\\_\\</span> <span class='lightyellow'> \\ \\_____\\</span> <span class='brightwhite'> \\/\\_____\\</span> <br>"
						   +"<span class='blue'>  \\/_/\\/_/</span> <span class='green'>  \\/_____/</span> <span class='aqua'>  \\/_/\\/_/</span> </span> <span class='red'>  \\/_____/</span> <span class='purple'>  \\/_/</span> <span class='yellow'>  \\/_/ \\/_/</span> <span class='white'>  \\/_____/</span>    <span class='gray'>    \\/_/</span> <span class='lightblue'>  \\/_____/</span> <span class='lightgreen'>  \\/_/ /_/</span> <span class='lightaqua'>  \\/_/  \\/_/</span> <span class='lightred'>  \\/_/</span> <span class='lightpurple'>  \\/_/ \\/_/</span> <span class='lightyellow'>  \\/_____/</span> <span class='brightwhite'>  \\/_____/</span> <br>"
						   +"<br>"
						   +"This project was made for my 8th grade Capstone project<br>"
						   +"<br>"
						   +"It was inspired by a game called Terminus MIT<br>"
						   +"So if you like this, be sure to check it out at:<br>"
						   +"<a href='http://web.mit.edu/mprat/Public/web/Terminus/Web/main.html' target='_blank'>http://web.mit.edu/mprat/Public/web/Terminus/Web/main.html</a><br>"
						   +"<br>"
						   +"Now I encourage you to pull up a command prompt and test<br>"
						   +"out these commands for yourself<br>"
						   +"<br>"
						   +"If you have any questions or suggestions, you can contact me at:<br>"
						   +"robby@teals.org<br>"
						   +"<br>> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			} else if (input_all.toLowerCase() == "cls") {
				all_text = "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			
			/*********************************************************************************/
			/*                                 Command Help                                  */
			/*********************************************************************************/
			else if (input_2 == "/?") {
				if (input_3 != null) {
					all_text += "'"+input_3+"' was not expected at this time";
				} else if (input_1.toLowerCase() == "help") {
					all_text += "The 'help' command is used to show options for the user<br>"
							   +"<br>"
							   +"Syntax: help<br>"
							   +"Example: help";
				} else if (input_1.toLowerCase() == "cls") {
					all_text += "The 'cls' command is used to clear the screen<br>"
							   +"<br>"
							   +"Syntax: cls<br>"
							   +"Example: cls";
				} else if (input_1.toLowerCase() == "dir") {
					all_text += "The 'dir' command is used to list the locations and items in a room<br>"
							   +"<br>"
							   +"Syntax: dir"
							   +"Example: dir";
				} else if (input_1.toLowerCase() == "cd") {
					all_text += "The 'cd' command is used to travel to a nearby location<br>"
							   +"You can check if the location is a valid choice by using the 'dir' command<br>"
							   +"<br>"
							   +"Syntax: cd [location]<br>"
							   +"Example: cd MainStreet";
				} else if (input_1.toLowerCase() == "more") {
					all_text += "The 'more' command is used to interact with an item in the room<br>"
							   +"You can check if the item is a valid choice by using the 'dir' command<br>"
							   +"<br>"
							   +"Syntax: more < [item]<br>"
							   +"Eample: more < Mailman";
				} else if (input_1.toLowerCase() == "copy") {
					all_text += "The 'copy' command is used to copy an item to a location<br>"
							   +"You can check if the item is a valid choice by using the 'dir' command<br>"
							   +"<br>"
							   +"Syntax: copy [item to copy] [destination]<br>"
							   +"Example: copy WelcomeLetter Armory";
				} else if (input_1.toLowerCase() == "del" || input_1 == "erase") {
					all_text += "The 'del' and 'erase' commands are used to remove an item or person<br>"
							   +"You can check if the item is a valid choice by using the 'dir' command<br>"
							   +"Note: You cannot undo this, so be careful what you remove<br>"
							   +"<br>"
							   +"Syntax: del [item/person to remove]<br>"
							   +"Syntax: erase [item/person to remove]<br>"
							   +"Example: del WelcomeLetter";
				} else if (input_1.toLowerCase() == "move") {
					all_text += "The 'move' command is used to move an item or person to a location<br>"
							   +"You can check if the item is a valid choice by using the 'dir' command<br>"
							   +"<br>"
							   +"Syntax: move [item to move] [destination]<br>"
							   +"Example: move WelcomeLetter MarketPlace";
				} else if (input_1.toLowerCase() == "mkdir" || input_1.toLowerCase() == "md") {
					all_text += "The 'mkdir' and 'md' commands are used to create a location<br>"
							   +"<br>"
							   +"Syntax: mkdir [new location]<br>"
							   +"Syntax: md [newlocation]<br>"
							   +"Example: mkdir Palace<br>"
							   +"Example: md Palace";
				} else if (input_1.toLowerCase() == "fontsize") {
					all_text += "The 'fontsize' command is used to change the fontsize<br>"
							   +"If you leave out the fontsize, it will revert back to the default, 14px<br>"
							   +"<br>"
							   +"Syntax: fontsize [fontsize]<br>";
							   +"Example: fontsize 20";
				} else if (input_1.toLowerCase() == "text") {
					all_text += "The 'text' command is used to change the text color<br>"
							   +"If you leave out the color, it will revert back to the default, rgb(204,204,204)<br>"
							   +"You can use any format including, rgb, rgba, hex, and stating the color<br>"
							   +"<br>"
							   +"Syntax: text [color]"
							   +"Example: text green<br>"
							   +"Example: text rgb(205,23,4)<br>";
				} else if (input_1.toLowerCase() == "background") {
					all_text += "The 'background' command is used to change the background color<br>"
							   +"If you leave out the color, it will revert back to the default, black<br>"
							   +"<br>"
							   +"Syntax: background [color]"
							   +"Example: background green<br>"
							   +"Example: background rgb(205,23,4)<br>";
				} else if (input_1.toLowerCase() == "color") {
					all_text += "The 'color' command is used to change the text and background color at the same time<br>"
							   +"The command is used with TWO digits, the first for the background, the second for the text<br>"
							   +"If you leave out the two digits, the colors will revert back to default<br>"
							   +"<br>"
							   +"Each digit can be any of the following values:<br>"
							   +"<br>"
							   +"  0 = Black       8 = Gray<br>"
							   +"  1 = Blue        9 = Light Blue<br>"
							   +"  2 = Green       a = Light Green<br>"
							   +"  3 = Aqua        b = Light Aqua<br>"
							   +"  4 = Red         c = Light Red<br>"
							   +"  5 = Purple      d = Light Purple<br>"
							   +"  6 = Yellow      e = Light Yellow<br>"
							   +"  7 = White       f = Bright White<br>"
							   +"<br>"
							   +"Syntax: color [background][text]<br>"
							   +"Example: color 0a";
				} else if (input_1.toLowerCase() == "reset") {
					all_text += "The 'reset' command is used to reset the color changes<br>"
							   +"<br>"
							   +"Syntax: reset<br>"
							   +"Example: reset";
				} else if (input_1.toLowerCase() == "windows") {
					all_text += "The 'windows' command is change the terminal to the windows terminal<br>"
							   +"In this mode, you can only use the windows terminal commands"
							   +"<br>"
							   +"Syntax: windows<br>"
							   +"Example: windows";
				} else if (input_1.toLowerCase() == "linux") {
					all_text += "The 'linux' command is change the terminal to the linux terminal<br>"
							   +"In this mode, you can only use the linux terminal commands"
							   +"<br>"
							   +"Syntax: linux<br>"
							   +"Example: linux";
				} else {
					all_text += "'"+input_1+"' does not have a help page";
				}
				all_text += "<br><br>> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			
			/*********************************************************************************/
			/*                                   Settings                                    */
			/*********************************************************************************/
			else if (input_all.toLowerCase() == "fontsize") {
				root.style.setProperty("--text-fontsize", "14px");
				all_text += "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			else if (input_1.toLowerCase() == "fontsize" && input_2 != null && input_3 == null) {
				root.style.setProperty("--text-fontsize", input_2+"px");
				all_text += "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			else if (input_all.toLowerCase() == "text") {
				root.style.setProperty("--text-color", "rgb(204,204,204)");
				all_text += "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			else if (input_1.toLowerCase() == "text" && input_2 != null && input_3 == null) {
				root.style.setProperty("--text-color", input_2);
				all_text += "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			else if (input_all.toLowerCase() == "background") {
				root.style.setProperty("--background", "rgb(0,0,0)");
				all_text += "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			else if (input_1.toLowerCase() == "background" && input_2 != null && input_3 == null) {
				root.style.setProperty("--background", input_2);
				all_text += "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			else if (input_all.toLowerCase() == "color") {
				root.style.setProperty("--text-color", "rgb(204,204,204)");
				root.style.setProperty("--background", "rgb(0,0,0)");
				all_text += "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			else if (input_1.toLowerCase() == "color" && input_2.length == 2 && input_3 == null) {
				check_background = false;
				check_text = false;

				if (input_2.slice(0,1).toLowerCase() == "0") {background_change = "rgb(0,0,0)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "1") {background_change = "rgb(0,55,218)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "2") {background_change = "rgb(19,161,14)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "3") {background_change = "rgb(58,150,221)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "4") {background_change = "rgb(197,15,31)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "5") {background_change = "rgb(136,23,152)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "6") {background_change = "rgb(193,156,0)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "7") {background_change = "rgb(204,204,204)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "8") {background_change = "rgb(118,118,118)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "9") {background_change = "rgb(59,120,255)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "a") {background_change = "rgb(22,198,12)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "b") {background_change = "rgb(97,214,214)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "c") {background_change = "rgb(231,72,86)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "d") {background_change = "rgb(180,0,158)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "e") {background_change = "rgb(249,241,165)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "f") {background_change = "rgb(242,242,242)"; check_background = true;}

				if (input_2.slice(1,2).toLowerCase() == "0") {text_change = "rgb(0,0,0)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "1") {text_change = "rgb(0,55,218)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "2") {text_change = "rgb(19,161,14)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "3") {text_change = "rgb(58,150,221)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "4") {text_change = "rgb(197,15,31)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "5") {text_change = "rgb(136,23,152)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "6") {text_change = "rgb(193,156,0)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "7") {text_change = "rgb(204,204,204)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "8") {text_change = "rgb(118,118,118)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "9") {text_change = "rgb(59,120,255)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "a") {text_change = "rgb(22,198,12)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "b") {text_change = "rgb(97,214,214)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "c") {text_change = "rgb(231,72,86)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "d") {text_change = "rgb(180,0,158)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "e") {text_change = "rgb(249,241,165)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "f") {text_change = "rgb(242,242,242)"; check_text = true;}
				
				if (check_background == true && check_text == true) {
					root.style.setProperty("--text-color", text_change);
					root.style.setProperty("--background", background_change);
					all_text += "> "+cursor;
					document.getElementById("text").innerHTML = all_text;
				} else if (check_background == true && check_text == false) {
					all_text += "Your text color choice is invalid<br><br>> "+cursor;
					document.getElementById("text").innerHTML = all_text;
				} else if (check_background == false && check_text == true) {
					all_text += "Your background choice is invalid<br><br>> "+cursor;
					document.getElementById("text").innerHTML = all_text;
				} else {
					all_text += "Both of your choices are invalid<br><br>> "+cursor;
					document.getElementById("text").innerHTML = all_text;
				}
			}
			else if (input_all.toLowerCase() == "windows") {
				terminal = "Windows";
				document.getElementById("title").innerHTML = "Beta | "+terminal;
				all_text += "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			else if (input_all.toLowerCase() == "linux") {
				terminal = "Linux";
				document.getElementById("title").innerHTML = "Beta | "+terminal;
				all_text += "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			else if (input_all.toLowerCase() == "reset") {
				terminal = "Windows";
				document.getElementById("title").innerHTML = "Beta | "+terminal;
				root.style.setProperty("--text-fontsize", "14px");
				root.style.setProperty("--text-color", "rgb(204,204,204)");
				root.style.setProperty("--background", "rgb(0,0,0)");
				all_text += "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
				
			/*********************************************************************************/
			/*                                   Location                                    */
			/*********************************************************************************/
			else if (input_all.toLowerCase() == "dir") {
				all_text += "Locations:"
							+eval(current_location).folders
							+"<br>Items:"
							+eval(current_location).items
							+"<br>> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			} else if (input_1.toLowerCase() == "cd") {
				if (eval(current_location).folders.includes("<br>"+input_2+"<br>")) {
					previous_location = current_location;
					current_location = input_2;
					all_text += eval(current_location).response+"<br><br>> "+cursor;
					document.getElementById("text").innerHTML = all_text;
					// set map
					root.style.setProperty("--map-text-color-"+previous_location, "rgb(0,0,0)")
					root.style.setProperty("--map-background-"+previous_location, "rgba(0,0,0,0)");
					root.style.setProperty("--map-text-color-"+current_location, "var(--map-text-color-active");
					root.style.setProperty("--map-background-"+current_location, "var(--map-background-active)");
				} else {
					all_text += "'"+input_2+"' is not found in room '"+eval(current_location).name+"'<br><br>> "+cursor;
					document.getElementById("text").innerHTML = all_text;
				}
			}
			
			/*********************************************************************************/
			/*                             Interact with Objects                             */
			/*********************************************************************************/
			else if (input_1.toLowerCase() == "copy") {
				if (eval(current_location).items.includes("<br>"+input_2+"<br>")) {
					if ("<br>Home<br>TrainStation1<br>MainStreet<br>Store<br>Path<br>Well<br>Barn<br>TrainStation2<br>AbandonedStreet<br>OldShop<br>OldHouse<br>OldFarm<br>TrainStation3<br>AncientPath<br>DarkCastle<br>TrainStation4<br>Highway<br>MarketPlace<br>Bank<br>Armory<br>TempleOfWisdom<br>Forest<br>".includes("<br>"+input_3+"<br>")) {
						if (input_4 != null) {
							all_text += "You can't copy an item to multiple locations<br><br>> "+cursor;
							document.getElementById("text").innerHTML = all_text;
						} else {
							eval(input_3).items += input_2+"<br>";
							all_text += "'"+input_2+"' has been added to room '"+input_3+"'<br><br>> "+cursor;
							document.getElementById("text").innerHTML = all_text;
						}
					} else {
						all_text = all_text + "'"+input_3+"' is not a valid place to copy this item to<br><br>> "+cursor;
						document.getElementById("text").innerHTML = all_text;
					}
				} else {
					all_text = all_text + "'"+input_2+"' is not found in room '"+eval(current_location).name+"'<br><br>> "+cursor;
					document.getElementById("text").innerHTML = all_text;
				}
			} else if (input_1.toLowerCase() == "move") {
				if (eval(current_location).items.includes("<br>"+input_2+"<br>")) {
					if ("<br>Home<br>TrainStation1<br>MainStreet<br>Store<br>Path<br>Well<br>Barn<br>TrainStation2<br>AbandonedStreet<br>OldShop<br>OldHouse<br>OldFarm<br>TrainStation3<br>AncientPath<br>DarkCastle<br>TrainStation4<br>Highway<br>MarketPlace<br>Bank<br>Armory<br>TempleOfWisdom<br>Forest<br>".includes("<br>"+input_3+"<br>")) {
						if (input_3 == current_location) {
							all_text += "You can't move an item to it's current location<br><br>> "+cursor;
							document.getElementById("text").innerHTML = all_text;
						} else {
							if (input_4 != null) {
								all_text += "You can't move an item to multiple locations<br><br>> "+cursor;
								document.getElementById("text").innerHTML = all_text;
							} else {
								eval(current_location).items = eval(current_location).items.slice(0,"-4");
								eval(current_location).items = eval(current_location).items.slice(0,"-"+input_2.length);

								eval(input_3).items += input_2+"<br>";
								all_text += "'"+input_2+"' has been moved to room '"+input_3+"'<br><br>> "+cursor;
								document.getElementById("text").innerHTML = all_text;
							}
						}
					} else {
						all_text += "'"+input_3+"' is not a valid place to move this item<br><br>> "+cursor;
						document.getElementById("text").innerHTML = all_text;
					}
				} else {
					all_text += "'"+input_2+"' is not found in room '"+current_location+"'<br><br> "+cursor;
					document.getElementById("text").innerHTML = all_text;
				}
			} else if (input_1.toLowerCase() == "del" || input_1.toLowerCase() == "erase") {
				if (input_3 != null) {
					all_text += "You can't delete multiple items<br><br>> "+cursor;
					document.getElementById("text").innerHTML = all_text;
				} else {
					if ("<br>Home<br>TrainStation1<br>MainStreet<br>Store<br>Path<br>Well<br>Barn<br>TrainStation2<br>AbandonedStreet<br>OldShop<br>OldHouse<br>OldFarm<br>TrainStation3<br>AncientPath<br>DarkCastle<br>TrainStation4<br>Highway<br>MarketPlace<br>Bank<br>Armory<br>TempleOfWisdom<br>Forest<br>".includes("<br>"+input_2+"<br>")) {
						all_text += "You aren't powerful enough to delete a location<br><br>> "+cursor;
						document.getElementById("text").innerHTML = all_text;
					} else {
						if (eval(current_location).items.includes("<br>"+input_2+"<br>")) {
							eval(current_location).items = eval(current_location).items.slice(0,"-4");
							eval(current_location).items = eval(current_location).items.slice(0,"-"+input_2.length);
	
							all_text += "'"+input_2+"' has been removed<br><br>> "+cursor;
							document.getElementById("text").innerHTML = all_text;
						} else {
							all_text += "'"+input_2+"' is not found in room '"+current_location+"'<br><br>> "+cursor;
							document.getElementById("text").innerHTML = all_text;
						}
					}
				}
			} else if (input_1.toLowerCase() == "mkdir" || input_1.toLowerCase() == "md") {
				all_text += "You aren't powerful enough to invoke that command<br><br>> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			
			/*********************************************************************************/
			/*                                Talk Animation                                 */
			/*********************************************************************************/
			else if (input_1.toLowerCase() == "more") {
				if (input_2 == "<") {
					if (eval(current_location).items.includes(input_3)) {
						current_item = input_3;
						if (eval(current_item).type == "person") {
							character_response = eval(current_item).info;
							i = 0;
							person_talking = true;
							person_talking_length = 0;
							
							function talk_animation () {
								setTimeout(function () {
									all_text = all_text + character_response.charAt(i);
									document.getElementById("text").innerHTML = all_text;
									elmnt.scrollLeft = 0;
									if (elmnt.scrollTop < elmnt.scrollHeight) {
										elmnt.scrollTop = 1000000;
									}
									person_talking_length++;
									i++;
									
									if (i < character_response.length && person_talking == true) {
										talk_animation();
									} else if (person_talking == true) {
										all_text = all_text + "<br><br>> "+cursor;
										document.getElementById("text").innerHTML = all_text;
										person_talking = false;
										person_talking_length = 0;
										
										elmnt.scrollLeft = 0;
										if (elmnt.scrollTop < elmnt.scrollHeight) {
											elmnt.scrollTop = 1000000;
										}
									}
								}, 35)
							}
							
							talk_animation();
						} else {
							all_text += eval(current_item).info + "<br><br>> "+cursor;
							document.getElementById("text").innerHTML = all_text;
						}
					} else {
						all_text += "'"+input_3+"' is not found in room '"+current_location+"'<br><br>> "+cursor;
						document.getElementById("text").innerHTML = all_text;
					}
				} else {
					all_text += "Make sure to check you syntax for this command<br><br>> "+cursor;
					document.getElementById("text").innerHTML = all_text;
				}
			}
			
			/*********************************************************************************/
			/*                                     Else                                      */
			/*********************************************************************************/
			else if (input_1 == "") {
				all_text = all_text.slice(0,-4)+"> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			} else {
				all_text += "'"+input_1+"' is not recognized as any command or spell<br><br>> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			
			input_all = "";
		}

		if (check_scroll == true) {
			elmnt.scrollLeft = 0;
			if (elmnt.scrollTop < elmnt.scrollHeight) {
				elmnt.scrollTop = 1000000;
			}
		}
	}
	
	/**********************************************************************************************************************************************************************/
	/*                                                                Windows Terminal With Talk Animation                                                                */
	/**********************************************************************************************************************************************************************/
	else if (terminal == "Windows" && control_key_down == false && person_talking == true && x == "Enter") {
		person_talking = false;
		
		all_text = all_text.slice(0,"-"+person_talking_length) + character_response + "<br><br>> "+cursor;
		document.getElementById("text").innerHTML = all_text;
		person_talking_length += 36;
		
		all_text = all_text.slice(0,-1);
		document.getElementById("text").innerHTML = all_text;
		
		person_talking_length = 0;
		elmnt.scrollLeft = 0;
		if (elmnt.scrollTop < elmnt.scrollHeight) {
			elmnt.scrollTop = 1000000;
		}
		
	}

	/**********************************************************************************************************************************************************************/
	/*                                                                           Linux Terminal                                                                           */
	/**********************************************************************************************************************************************************************/
	else if (terminal == "Linux" && control_key_down == false && person_talking == false) {
		check_scroll = true;

		/*********************************************************************************/
		/*                                     Basic                                     */
		/*********************************************************************************/
		if (x.length == 1) {
			all_text = all_text.slice(0,-26) + x + cursor;
			input_all += x;
			document.getElementById("text").innerHTML = all_text;
		} else if (x == "Backspace") {
			input_last = all_text[all_text.length-27];
			if (input_all.includes(input_last)) {
				input_all = input_all.slice(0,-1);
				all_text = all_text.slice(0,-27) + cursor;
				document.getElementById("text").innerHTML = all_text;
			}
		} else if (x == "ArrowUp") {
			check_scroll = false;
			elmnt.scrollTop = elmnt.scrollTop - 17;
		} else if (x == "ArrowDown") {
			check_scroll = false;
			elmnt.scrollTop = elmnt.scrollTop + 17;
		} else if (x == "ArrowLeft") {
			check_scroll = false;
			elmnt.scrollLeft = elmnt.scrollLeft - 17;
		} else if (x == "ArrowRight") {
			check_scroll = false;
			elmnt.scrollLeft = elmnt.scrollLeft + 17;
		}

		/*********************************************************************************/
		/*                                      Tab                                      */
		/*********************************************************************************/
		else if (x == "Tab") {
			event.preventDefault();
			input_1 = input_all.split(" ")[0];
			input_2 = input_all.split(" ")[1];
			input_3 = input_all.split(" ")[2];
			input_4 = input_all.split(" ")[3];

			if (input_1.toLowerCase() == "cd" && input_2 != null && input_3 == null) {
				possible_locations = eval(current_location).folders.split("<br>");
				wanted_location = "";
				for (i=0; i < possible_locations.length; i++) {
					if (possible_locations[i].toLowerCase().startsWith(input_2.toLowerCase())) {
						wanted_location = possible_locations[i];
					}
				}
				if (wanted_location != "") {
					all_text = all_text.slice(0,-26);
					all_text = all_text.slice(0,"-"+input_2.length) + wanted_location + cursor;
					document.getElementById("text").innerHTML = all_text;
					input_all = input_all.slice(0,"-"+input_2.length);
					input_all = input_all + wanted_location;
				}
			} else if (input_1.toLowerCase() == "rm" && input_2 != null && input_3 == null) {
				possible_items += "<br>Home<br>TrainStation1<br>MainStreet<br>Store<br>Path<br>Well<br>Barn<br>TrainStation2<br>AbandonedStreet<br>OldShop<br>OldHouse<br>OldFarm<br>TrainStation3<br>AncientPath<br>DarkCastle<br>TrainStation4<br>Highway<br>MarketPlace<br>Bank<br>Armory<br>TempleOfWisdom<br>Forest<br>"+eval(current_location).items;
				possible_items = possible_items.split("<br>");
				wanted_item = "";
				for (i=0; i < possible_items.length; i++) {
					if (possible_items[i].toLowerCase().startsWith(input_2.toLowerCase())) {
						wanted_item = possible_items[i];
					}
				}
				if (wanted_item != "") {
					all_text = all_text.slice(0,-26);
					all_text = all_text.slice(0,"-"+input_2.length) + wanted_item + cursor;
					document.getElementById("text").innerHTML = all_text;
					input_all = input_all.slice(0,"-"+input_2.length);
					input_all = input_all + wanted_item;
				}
			} else if (input_1.toLowerCase() == "less" && input_2 != null && input_3 == null) {
				possible_items = "Map"+eval(current_location).items;
				possible_items = possible_items.split("<br>");
				wanted_item = "";
				for (i=0; i < possible_items.length; i++) {
					if (possible_items[i].toLowerCase().startsWith(input_2.toLowerCase())) {
						wanted_item = possible_items[i];
					}
				}
				if (wanted_item != "") {
					all_text = all_text.slice(0,-26);
					all_text = all_text.slice(0,"-"+input_2.length) + wanted_item + cursor;
					document.getElementById("text").innerHTML = all_text;
					input_all = input_all.slice(0,"-"+input_2.length);
					input_all = input_all + wanted_item;
				}
			} else if (input_1.toLowerCase() == "cat" && input_2 != null && input_3 == null) {
				possible_items = "Map"+eval(current_location).items;
				possible_items = possible_items.split("<br>");
				wanted_item = "";
				for (i=0; i < possible_items.length; i++) {
					if (possible_items[i].toLowerCase().startsWith(input_2.toLowerCase())) {
						wanted_item = possible_items[i];
					}
				}
				if (wanted_item != "") {
					all_text = all_text.slice(0,-26);
					all_text = all_text.slice(0,"-"+input_2.length) + wanted_item + cursor;
					document.getElementById("text").innerHTML = all_text;
					input_all = input_all.slice(0,"-"+input_2.length);
					input_all = input_all + wanted_item;
				}
			} else if (input_1.toLowerCase() == "cp" && input_2 != null && input_3 == null) {
				possible_items = eval(current_location).items.split("<br>");
				wanted_item = "";
				for (i=0; i < possible_items.length; i++) {
					if (possible_items[i].toLowerCase().startsWith(input_2.toLowerCase())) {
						wanted_item = possible_items[i];
					}
				}
				if (wanted_item != "") {
					all_text = all_text.slice(0,-26);
					all_text = all_text.slice(0,"-"+input_2.length) + wanted_item + cursor;
					document.getElementById("text").innerHTML = all_text;
					input_all = input_all.slice(0,"-"+input_2.length);
					input_all = input_all + wanted_item;
				}
			} else if (input_1.toLowerCase() == "cp" && input_2 != null && input_3 != null && input_4 == null) {
				possible_items = "<br>Home<br>TrainStation1<br>MainStreet<br>Store<br>Path<br>Well<br>Barn<br>TrainStation2<br>AbandonedStreet<br>OldShop<br>OldHouse<br>OldFarm<br>TrainStation3<br>AncientPath<br>DarkCastle<br>TrainStation4<br>Highway<br>MarketPlace<br>Bank<br>Armory<br>TempleOfWisdom<br>Forest<br>".split("<br>");
				wanted_item = "";
				for (i=0; i < possible_items.length; i++) {
					if (possible_items[i].toLowerCase().startsWith(input_3.toLowerCase())) {
						wanted_item = possible_items[i];
					}
				}
				if (wanted_item != "") {
					all_text = all_text.slice(0,-26);
					all_text = all_text.slice(0,"-"+input_3.length) + wanted_item + cursor;
					document.getElementById("text").innerHTML = all_text;
					input_all = input_all.slice(0,"-"+input_3.length);
					input_all = input_all + wanted_item;
				}
			} else if (input_1.toLowerCase() == "mv" && input_2 != null && input_3 == null) {
				possible_items = eval(current_location).items.split("<br>");
				wanted_item = "";
				for (i=0; i < possible_items.length; i++) {
					if (possible_items[i].toLowerCase().startsWith(input_2.toLowerCase())) {
						wanted_item = possible_items[i];
					}
				}
				if (wanted_item != "") {
					all_text = all_text.slice(0,-26);
					all_text = all_text.slice(0,"-"+input_2.length) + wanted_item + cursor;
					document.getElementById("text").innerHTML = all_text;
					input_all = input_all.slice(0,"-"+input_2.length);
					input_all = input_all + wanted_item;
				}
			} else if (input_1.toLowerCase() == "mv" && input_2 != null && input_3 != null && input_4 == null) {
				possible_items = "<br>Home<br>TrainStation1<br>MainStreet<br>Store<br>Path<br>Well<br>Barn<br>TrainStation2<br>AbandonedStreet<br>OldShop<br>OldHouse<br>OldFarm<br>TrainStation3<br>AncientPath<br>DarkCastle<br>TrainStation4<br>Highway<br>MarketPlace<br>Bank<br>Armory<br>TempleOfWisdom<br>Forest<br>".split("<br>");
				wanted_item = "";
				for (i=0; i < possible_items.length; i++) {
					if (possible_items[i].toLowerCase().startsWith(input_3.toLowerCase())) {
						wanted_item = possible_items[i];
					}
				}
				if (wanted_item != "") {
					all_text = all_text.slice(0,-26);
					all_text = all_text.slice(0,"-"+input_3.length) + wanted_item + cursor;
					document.getElementById("text").innerHTML = all_text;
					input_all = input_all.slice(0,"-"+input_3.length);
					input_all = input_all + wanted_item;
				}
			}
		}

		/*********************************************************************************/
		/*                                     Enter                                     */
		/*********************************************************************************/
		else if (x == "Enter") {
			all_text = all_text.slice(0,-26) + "<br><br>";
			document.getElementById("text").innerHTML = all_text;
			
			input_1 = input_all.split(" ")[0];
			input_2 = input_all.split(" ")[1];
			input_3 = input_all.split(" ")[2];
			input_4 = input_all.split(" ")[3];

			/*********************************************************************************/
			/*                                      Map                                      */
			/*********************************************************************************/
			if (input_1.toLowerCase() == "less" && input_2 == "Map" && input_3 == null || input_1.toLowerCase() == "cat" && input_2 == "Map" && input_3 == null) {
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
				document.getElementById("text").innerHTML = all_text;
			}

			/*********************************************************************************/
			/*                                     Basic                                     */
			/*********************************************************************************/
			else if (input_all.toLowerCase() == "help") {
				all_text += "Type HELP to show this help message<br>"
						   +"Type ABOUT to learn about this project<br>"
						   +"Type LESS Map to see your current location<br>"
						   +"Type man command-name to see a more detailed help list for the command<br>"
						   +"<br>"
						   +"ls                         look around<br>"
						   +"cd [location]              go to a new location<br>"
						   +"less [item]                interact with a person or item<br>"
						   +"mkdir/md [location]        create a new location<br>"
						   +"rm [location/item]         delete an item, location, or person<br>"
						   +"cp [item] [destination]    copy an item to a location<br>"
						   +"mv [item] [destination]    move an item to a location<br>"
						   +"clear                      clears the screen<br>"
						   +"<br>"
						   +"windows                    changes to Windows Terminal<br>"
						   +"linux                      remains as Linux Terminal<br>"
						   +"<br>"
						   +"fontsize [fontsize]        changes the font size<br>"
						   +"text [color]               changes the text color<br>"
						   +"background [color]         changes the background color<br>"
						   +"color [background][text]   changes the text and background color<br>"
						   +"reset                      reverts colors back to default<br>"
						   +"<br>> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			} else if (input_all.toLowerCase() == "about") {
				all_text += "<span class='blue'> __  __   </span> <span class='green'> ______   </span> <span class='aqua'> ______   </span> </span> <span class='red'> __       </span> <span class='purple'> __   </span> <span class='yellow'> __   __   </span> <span class='white'> ______   </span>    <span class='gray'> ______ </span> <span class='lightblue'> ______   </span> <span class='lightgreen'> ______   </span> <span class='lightaqua'> __    __   </span> <span class='lightred'> __   </span> <span class='lightpurple'> __   __   </span> <span class='lightyellow'> __  __   </span> <span class='brightwhite'> ______   </span> <br>"
						   +"<span class='blue'>/\\ \\/ /   </span> <span class='green'>/\\  ___\\  </span> <span class='aqua'>/\\  __ \\  </span> </span> <span class='red'>/\\ \\      </span> <span class='purple'>/\\ \\  </span> <span class='yellow'>/\\ \"-.\\ \\  </span> <span class='white'>/\\  ___\\  </span>    <span class='gray'>/\\__  _\\</span> <span class='lightblue'>/\\  ___\\  </span> <span class='lightgreen'>/\\  == \\  </span> <span class='lightaqua'>/\\ \"-./  \\  </span> <span class='lightred'>/\\ \\  </span> <span class='lightpurple'>/\\ \"-.\\ \\  </span> <span class='lightyellow'>/\\ \\/\\ \\  </span> <span class='brightwhite'>/\\  ___\\  </span> <br>"
						   +"<span class='blue'>\\ \\  _\"-. </span> <span class='green'>\\ \\  __\\  </span> <span class='aqua'>\\ \\  __ \\ </span> </span> <span class='red'>\\ \\ \\____ </span> <span class='purple'>\\ \\ \\ </span> <span class='yellow'>\\ \\ \\-.  \\ </span> <span class='white'>\\ \\ \\__ \\ </span>    <span class='gray'>\\/_/\\ \\/</span> <span class='lightblue'>\\ \\  __\\  </span> <span class='lightgreen'>\\ \\  __<  </span> <span class='lightaqua'>\\ \\ \\-./\\ \\ </span> <span class='lightred'>\\ \\ \\ </span> <span class='lightpurple'>\\ \\ \\-.  \\ </span> <span class='lightyellow'>\\ \\ \\_\\ \\ </span> <span class='brightwhite'>\\ \\___  \\ </span> <br>"
						   +"<span class='blue'> \\ \\_\\ \\_\\</span> <span class='green'> \\ \\_____\\</span> <span class='aqua'> \\ \\_\\ \\_\\</span> </span> <span class='red'> \\ \\_____\\</span> <span class='purple'> \\ \\_\\</span> <span class='yellow'> \\ \\_\\\\\"\\_\\</span> <span class='white'> \\ \\_____\\</span>    <span class='gray'>   \\ \\_\\</span> <span class='lightblue'> \\ \\_____\\</span> <span class='lightgreen'> \\ \\_\\ \\_\\</span> <span class='lightaqua'> \\ \\_\\ \\ \\_\\</span> <span class='lightred'> \\ \\_\\</span> <span class='lightpurple'> \\ \\_\\\\\"\\_\\</span> <span class='lightyellow'> \\ \\_____\\</span> <span class='brightwhite'> \\/\\_____\\</span> <br>"
						   +"<span class='blue'>  \\/_/\\/_/</span> <span class='green'>  \\/_____/</span> <span class='aqua'>  \\/_/\\/_/</span> </span> <span class='red'>  \\/_____/</span> <span class='purple'>  \\/_/</span> <span class='yellow'>  \\/_/ \\/_/</span> <span class='white'>  \\/_____/</span>    <span class='gray'>    \\/_/</span> <span class='lightblue'>  \\/_____/</span> <span class='lightgreen'>  \\/_/ /_/</span> <span class='lightaqua'>  \\/_/  \\/_/</span> <span class='lightred'>  \\/_/</span> <span class='lightpurple'>  \\/_/ \\/_/</span> <span class='lightyellow'>  \\/_____/</span> <span class='brightwhite'>  \\/_____/</span> <br>"
						   +"<br>"
						   +"This project was made for my 8th grade Capstone project<br>"
						   +"<br>"
						   +"It was inspired by a game called Terminus MIT<br>"
						   +"So if you like this, be sure to check it out at:<br>"
						   +"<a href='http://web.mit.edu/mprat/Public/web/Terminus/Web/main.html' target='_blank'>http://web.mit.edu/mprat/Public/web/Terminus/Web/main.html</a><br>"
						   +"<br>"
						   +"Now I encourage you to pull up a command prompt and test<br>"
						   +"out these commands for yourself<br>"
						   +"<br>"
						   +"If you have any questions or suggestions, you can contact me at:<br>"
						   +"robby@teals.org<br>"
						   +"<br>> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			} else if (input_all.toLowerCase() == "clear") {
				all_text = "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			
			/*********************************************************************************/
			/*                                 Command Help                                  */
			/*********************************************************************************/
			else if (input_1.toLowerCase() == "man") {
				if (input_3 != null) {
					all_text += "'"+input_3+"' was not expected at this time";
				} else if (input_2.toLowerCase() == "help") {
					all_text += "The 'help' command is used to show options for the user<br>"
							   +"<br>"
							   +"Syntax: help<br>"
							   +"Example: help";
				} else if (input_2.toLowerCase() == "clear") {
					all_text += "The 'clear' command is used to clear the screen<br>"
							   +"<br>"
							   +"Syntax: clear<br>"
							   +"Example: clear";
				} else if (input_2.toLowerCase() == "ls") {
					all_text += "The 'ls' command is used to list the locations and items in a room<br>"
							   +"<br>"
							   +"Syntax: ls"
							   +"Example: ls";
				} else if (input_2.toLowerCase() == "cd") {
					all_text += "The 'cd' command is used to travel to a nearby location<br>"
							   +"You can check if the location is a valid choice by using the 'ls' command<br>"
							   +"<br>"
							   +"Syntax: cd [location]<br>"
							   +"Example: cd MainStreet";
				} else if (input_2.toLowerCase() == "more") {
					all_text += "The 'less' command is used to interact with an item in the room<br>"
							   +"You can check if the item is a valid choice by using the 'ls' command<br>"
							   +"<br>"
							   +"Syntax: less [item]<br>"
							   +"Eample: less Mailman";
				} else if (input_2.toLowerCase() == "cp") {
					all_text += "The 'cp' command is used to copy an item to a location<br>"
							   +"You can check if the item is a valid choice by using the 'ls' command<br>"
							   +"<br>"
							   +"Syntax: cp [item to copy] [destination]<br>"
							   +"Example: cp WelcomeLetter Armory";
				} else if (input_2.toLowerCase() == "rm") {
					all_text += "The 'rm' command is used to remove an item or person<br>"
							   +"You can check if the item is a valid choice by using the 'ls' command<br>"
							   +"Note: You cannot undo this, so be careful what you remove<br>"
							   +"<br>"
							   +"Syntax: rm [item/person to remove]<br>"
							   +"Example: rm WelcomeLetter";
				} else if (input_2.toLowerCase() == "mv") {
					all_text += "The 'mv' command is used to move an item or person to a location<br>"
							   +"You can check if the item is a valid choice by using the 'ls' command<br>"
							   +"<br>"
							   +"Syntax: mv [item to move] [destination]<br>"
							   +"Example: mv WelcomeLetter MarketPlace";
				} else if (input_2.toLowerCase() == "mkdir" || input_1.toLowerCase() == "md") {
					all_text += "The 'mkdir' and 'md' commands are used to create a location<br>"
							   +"<br>"
							   +"Syntax: mkdir [new location]<br>"
							   +"Syntax: md [new location]<br>"
							   +"Example: mkdir Palace<br>"
							   +"Example: md Palace";
				} else if (input_2.toLowerCase() == "fontsize") {
					all_text += "The 'fontsize' command is used to change the fontsize<br>"
							   +"If you leave out the fontsize, it will revert back to the default, 14px<br>"
							   +"<br>"
							   +"Syntax: fontsize [fontsize]<br>";
							   +"Example: fontsize 20";
				} else if (input_2.toLowerCase() == "text") {
					all_text += "The 'text' command is used to change the text color<br>"
							   +"If you leave out the color, it will revert back to the default, rgb(204,204,204)<br>"
							   +"You can use any format including, rgb, rgba, hex, and stating the color<br>"
							   +"<br>"
							   +"Syntax: text [color]"
							   +"Example: text green<br>"
							   +"Example: text rgb(205,23,4)<br>";
				} else if (input_2.toLowerCase() == "background") {
					all_text += "The 'background' command is used to change the background color<br>"
							   +"If you leave out the color, it will revert back to the default, black<br>"
							   +"<br>"
							   +"Syntax: background [color]"
							   +"Example: background green<br>"
							   +"Example: background rgb(205,23,4)<br>";
				} else if (input_2.toLowerCase() == "color") {
					all_text += "The 'color' command is used to change the text and background color at the same time<br>"
							   +"The command is used with TWO digits, the first for the background, the second for the text<br>"
							   +"If you leave out the two digits, the colors will revert back to default<br>"
							   +"<br>"
							   +"Each digit can be any of the following values:<br>"
							   +"<br>"
							   +"  0 = Black       8 = Gray<br>"
							   +"  1 = Blue        9 = Light Blue<br>"
							   +"  2 = Green       a = Light Green<br>"
							   +"  3 = Aqua        b = Light Aqua<br>"
							   +"  4 = Red         c = Light Red<br>"
							   +"  5 = Purple      d = Light Purple<br>"
							   +"  6 = Yellow      e = Light Yellow<br>"
							   +"  7 = White       f = Bright White<br>"
							   +"<br>"
							   +"Syntax: color [background][text]<br>"
							   +"Example: color 0a";
				} else if (input_2.toLowerCase() == "reset") {
					all_text += "The 'reset' command is used to reset the color changes<br>"
							   +"<br>"
							   +"Syntax: reset<br>"
							   +"Example: reset";
				} else if (input_2.toLowerCase() == "windows") {
					all_text += "The 'windows' command is change the terminal to the windows terminal<br>"
							   +"In this mode, you can only use the windows terminal commands"
							   +"<br>"
							   +"Syntax: windows<br>"
							   +"Example: windows";
				} else if (input_2.toLowerCase() == "linux") {
					all_text += "The 'linux' command is change the terminal to the linux terminal<br>"
							   +"In this mode, you can only use the linux terminal commands"
							   +"<br>"
							   +"Syntax: linux<br>"
							   +"Example: linux";
				} else {
					all_text += "'"+input_2+"' does not have a help page";
				}
				all_text += "<br><br>> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			
			/*********************************************************************************/
			/*                                   Settings                                    */
			/*********************************************************************************/
			else if (input_all.toLowerCase() == "fontsize") {
				root.style.setProperty("--text-fontsize", "14px");
				all_text += "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			else if (input_1.toLowerCase() == "fontsize" && input_2 != null && input_3 == null) {
				root.style.setProperty("--text-fontsize", input_2+"px");
				all_text += "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			else if (input_all.toLowerCase() == "text") {
				root.style.setProperty("--text-color", "rgb(204,204,204)");
				all_text += "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			else if (input_1.toLowerCase() == "text" && input_2 != null && input_3 == null) {
				root.style.setProperty("--text-color", input_2);
				all_text += "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			else if (input_all.toLowerCase() == "background") {
				root.style.setProperty("--background", "rgb(0,0,0)");
				all_text += "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			else if (input_1.toLowerCase() == "background" && input_2 != null && input_3 == null) {
				root.style.setProperty("--background", input_2);
				all_text += "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			else if (input_all.toLowerCase() == "color") {
				root.style.setProperty("--text-color", "rgb(204,204,204)");
				root.style.setProperty("--background", "rgb(0,0,0)");
				all_text += "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			else if (input_1.toLowerCase() == "color" && input_2.length == 2 && input_3 == null) {
				check_background = false;
				check_text = false;

				if (input_2.slice(0,1).toLowerCase() == "0") {background_change = "rgb(0,0,0)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "1") {background_change = "rgb(0,55,218)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "2") {background_change = "rgb(19,161,14)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "3") {background_change = "rgb(58,150,221)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "4") {background_change = "rgb(197,15,31)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "5") {background_change = "rgb(136,23,152)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "6") {background_change = "rgb(193,156,0)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "7") {background_change = "rgb(204,204,204)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "8") {background_change = "rgb(118,118,118)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "9") {background_change = "rgb(59,120,255)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "a") {background_change = "rgb(22,198,12)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "b") {background_change = "rgb(97,214,214)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "c") {background_change = "rgb(231,72,86)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "d") {background_change = "rgb(180,0,158)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "e") {background_change = "rgb(249,241,165)"; check_background = true;}
				else if (input_2.slice(0,1).toLowerCase() == "f") {background_change = "rgb(242,242,242)"; check_background = true;}

				if (input_2.slice(1,2).toLowerCase() == "0") {text_change = "rgb(0,0,0)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "1") {text_change = "rgb(0,55,218)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "2") {text_change = "rgb(19,161,14)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "3") {text_change = "rgb(58,150,221)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "4") {text_change = "rgb(197,15,31)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "5") {text_change = "rgb(136,23,152)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "6") {text_change = "rgb(193,156,0)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "7") {text_change = "rgb(204,204,204)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "8") {text_change = "rgb(118,118,118)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "9") {text_change = "rgb(59,120,255)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "a") {text_change = "rgb(22,198,12)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "b") {text_change = "rgb(97,214,214)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "c") {text_change = "rgb(231,72,86)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "d") {text_change = "rgb(180,0,158)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "e") {text_change = "rgb(249,241,165)"; check_text = true;}
				else if (input_2.slice(1,2).toLowerCase() == "f") {text_change = "rgb(242,242,242)"; check_text = true;}
				
				if (check_background == true && check_text == true) {
					root.style.setProperty("--text-color", text_change);
					root.style.setProperty("--background", background_change);
					all_text += "> "+cursor;
					document.getElementById("text").innerHTML = all_text;
				} else if (check_background == true && check_text == false) {
					all_text += "Your text color choice is invalid<br><br>> "+cursor;
					document.getElementById("text").innerHTML = all_text;
				} else if (check_background == false && check_text == true) {
					all_text += "Your background choice is invalid<br><br>> "+cursor;
					document.getElementById("text").innerHTML = all_text;
				} else {
					all_text += "Both of your choices are invalid<br><br>> "+cursor;
					document.getElementById("text").innerHTML = all_text;
				}
			}
			else if (input_all.toLowerCase() == "windows") {
				terminal = "Windows";
				document.getElementById("title").innerHTML = "Beta | "+terminal;
				all_text += "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			else if (input_all.toLowerCase() == "linux") {
				terminal = "Linux";
				document.getElementById("title").innerHTML = "Beta | "+terminal;
				all_text += "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			else if (input_all.toLowerCase() == "reset") {
				terminal = "Windows";
				document.getElementById("title").innerHTML = "Beta | "+terminal;
				root.style.setProperty("--text-fontsize", "14px");
				root.style.setProperty("--text-color", "rgb(204,204,204)");
				root.style.setProperty("--background", "rgb(0,0,0)");
				all_text += "> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
				
			/*********************************************************************************/
			/*                                   Location                                    */
			/*********************************************************************************/
			else if (input_all.toLowerCase() == "ls") {
				all_text += "Locations:"
							+eval(current_location).folders
							+"<br>Items:"
							+eval(current_location).items
							+"<br>> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			} else if (input_1.toLowerCase() == "cd") {
				if (eval(current_location).folders.includes("<br>"+input_2+"<br>")) {
					previous_location = current_location;
					current_location = input_2;
					all_text += eval(current_location).response+"<br><br>> "+cursor;
					document.getElementById("text").innerHTML = all_text;
					// set map
					root.style.setProperty("--map-text-color-"+previous_location, "rgb(0,0,0)")
					root.style.setProperty("--map-background-"+previous_location, "rgba(0,0,0,0)");
					root.style.setProperty("--map-text-color-"+current_location, "var(--map-text-color-active");
					root.style.setProperty("--map-background-"+current_location, "var(--map-background-active)");
				} else {
					all_text += "'"+input_2+"' is not found in room '"+eval(current_location).name+"'<br><br>> "+cursor;
					document.getElementById("text").innerHTML = all_text;
				}
			}
			
			/*********************************************************************************/
			/*                             Interact with Objects                             */
			/*********************************************************************************/
			else if (input_1.toLowerCase() == "cp") {
				if (eval(current_location).items.includes("<br>"+input_2+"<br>")) {
					if ("<br>Home<br>TrainStation1<br>MainStreet<br>Store<br>Path<br>Well<br>Barn<br>TrainStation2<br>AbandonedStreet<br>OldShop<br>OldHouse<br>OldFarm<br>TrainStation3<br>AncientPath<br>DarkCastle<br>TrainStation4<br>Highway<br>MarketPlace<br>Bank<br>Armory<br>TempleOfWisdom<br>Forest<br>".includes("<br>"+input_3+"<br>")) {
						if (input_4 != null) {
							all_text += "You can't copy an item to multiple locations<br><br>> "+cursor;
							document.getElementById("text").innerHTML = all_text;
						} else {
							eval(input_3).items += input_2+"<br>";
							all_text += "'"+input_2+"' has been added to room '"+input_3+"'<br><br>> "+cursor;
							document.getElementById("text").innerHTML = all_text;
						}
					} else {
						all_text = all_text + "'"+input_3+"' is not a valid place to copy this item to<br><br>> "+cursor;
						document.getElementById("text").innerHTML = all_text;
					}
				} else {
					all_text = all_text + "'"+input_2+"' is not found in room '"+eval(current_location).name+"'<br><br>> "+cursor;
					document.getElementById("text").innerHTML = all_text;
				}
			} else if (input_1.toLowerCase() == "mv") {
				if (eval(current_location).items.includes("<br>"+input_2+"<br>")) {
					if ("<br>Home<br>TrainStation1<br>MainStreet<br>Store<br>Path<br>Well<br>Barn<br>TrainStation2<br>AbandonedStreet<br>OldShop<br>OldHouse<br>OldFarm<br>TrainStation3<br>AncientPath<br>DarkCastle<br>TrainStation4<br>Highway<br>MarketPlace<br>Bank<br>Armory<br>TempleOfWisdom<br>Forest<br>".includes("<br>"+input_3+"<br>")) {
						if (input_3 == current_location) {
							all_text += "You can't move an item to it's current location<br><br>> "+cursor;
							document.getElementById("text").innerHTML = all_text;
						} else {
							if (input_4 != null) {
								all_text += "You can't move an item to multiple locations<br><br>> "+cursor;
								document.getElementById("text").innerHTML = all_text;
							} else {
								eval(current_location).items = eval(current_location).items.slice(0,"-4");
								eval(current_location).items = eval(current_location).items.slice(0,"-"+input_2.length);

								eval(input_3).items += input_2+"<br>";
								all_text += "'"+input_2+"' has been moved to room '"+input_3+"'<br><br>> "+cursor;
								document.getElementById("text").innerHTML = all_text;
							}
						}
					} else {
						all_text += "'"+input_3+"' is not a valid place to move this item<br><br>> "+cursor;
						document.getElementById("text").innerHTML = all_text;
					}
				} else {
					all_text += "'"+input_2+"' is not found in room '"+current_location+"'<br><br> "+cursor;
					document.getElementById("text").innerHTML = all_text;
				}
			} else if (input_1.toLowerCase() == "rm") {
				if (input_3 != null) {
					all_text += "You can't delete multiple items<br><br>> "+cursor;
					document.getElementById("text").innerHTML = all_text;
				} else {
					if ("<br>Home<br>TrainStation1<br>MainStreet<br>Store<br>Path<br>Well<br>Barn<br>TrainStation2<br>AbandonedStreet<br>OldShop<br>OldHouse<br>OldFarm<br>TrainStation3<br>AncientPath<br>DarkCastle<br>TrainStation4<br>Highway<br>MarketPlace<br>Bank<br>Armory<br>TempleOfWisdom<br>Forest<br>".includes("<br>"+input_2+"<br>")) {
						all_text += "You aren't powerful enough to delete a location<br><br>> "+cursor;
						document.getElementById("text").innerHTML = all_text;
					} else {
						if (eval(current_location).items.includes("<br>"+input_2+"<br>")) {
							eval(current_location).items = eval(current_location).items.slice(0,"-4");
							eval(current_location).items = eval(current_location).items.slice(0,"-"+input_2.length);
	
							all_text += "'"+input_2+"' has been removed<br><br>> "+cursor;
							document.getElementById("text").innerHTML = all_text;
						} else {
							all_text += "'"+input_2+"' is not found in room '"+current_location+"'<br><br>> "+cursor;
							document.getElementById("text").innerHTML = all_text;
						}
					}
				}
			} else if (input_1.toLowerCase() == "mkdir" || input_1.toLowerCase() == "md") {
				all_text += "You aren't powerful enough to invoke that command<br><br>> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			
			/*********************************************************************************/
			/*                                Talk Animation                                 */
			/*********************************************************************************/
			else if (input_1.toLowerCase() == "less") {
				if (eval(current_location).items.includes(input_2)) {
					current_item = input_2;
					if (eval(current_item).type == "person") {
						character_response = eval(current_item).info;
						i = 0;
						person_talking = true;
						person_talking_length = 0;
						
						function talk_animation () {
							setTimeout(function () {
								all_text = all_text + character_response.charAt(i);
								document.getElementById("text").innerHTML = all_text;
								elmnt.scrollLeft = 0;
								if (elmnt.scrollTop < elmnt.scrollHeight) {
									elmnt.scrollTop = 1000000;
								}
								person_talking_length++;
								i++;
								
								if (i < character_response.length && person_talking == true) {
									talk_animation();
								} else if (person_talking == true) {
									all_text = all_text + "<br><br>> "+cursor;
									document.getElementById("text").innerHTML = all_text;
									person_talking = false;
									person_talking_length = 0;
									
									elmnt.scrollLeft = 0;
									if (elmnt.scrollTop < elmnt.scrollHeight) {
										elmnt.scrollTop = 1000000;
									}
								}
							}, 35)
						}
						
						talk_animation();
					} else {
						all_text += eval(current_item).info + "<br><br>> "+cursor;
						document.getElementById("text").innerHTML = all_text;
					}
				} else {
					all_text += "'"+input_2+"' is not found in room '"+current_location+"'<br><br>> "+cursor;
					document.getElementById("text").innerHTML = all_text;
				}
			}
			
			/*********************************************************************************/
			/*                                     Else                                      */
			/*********************************************************************************/
			else if (input_1 == "") {
				all_text = all_text.slice(0,-4)+"> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			} else {
				all_text += "'"+input_1+"' is not recognized as any command or spell<br><br>> "+cursor;
				document.getElementById("text").innerHTML = all_text;
			}
			
			input_all = "";
		}

		if (check_scroll == true) {
			elmnt.scrollLeft = 0;
			if (elmnt.scrollTop < elmnt.scrollHeight) {
				elmnt.scrollTop = 1000000;
			}
		}
	}

	/**********************************************************************************************************************************************************************/
	/*                                                                 Linux Terminal With Talk Animation                                                                 */
	/**********************************************************************************************************************************************************************/
	else if (terminal == "Linux"  && control_key_down == false && person_talking == true && x == "Enter") {
		person_talking = false;
		
		all_text = all_text.slice(0,"-"+person_talking_length) + character_response + "<br><br>> "+cursor;
		document.getElementById("text").innerHTML = all_text;
		person_talking_length += 36;
		
		all_text = all_text.slice(0,-1);
		document.getElementById("text").innerHTML = all_text;
		
		person_talking_length = 0;
		elmnt.scrollLeft = 0;
		if (elmnt.scrollTop < elmnt.scrollHeight) {
			elmnt.scrollTop = 1000000;
		}
		
	}
});