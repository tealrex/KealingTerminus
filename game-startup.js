/*
 __  __     ______     ______     __         __     __   __     ______        ______   ______     ______     __    __     __     __   __     __  __     ______    
/\ \/ /    /\  ___\   /\  __ \   /\ \       /\ \   /\ "-.\ \   /\  ___\      /\__  _\ /\  ___\   /\  == \   /\ "-./  \   /\ \   /\ "-.\ \   /\ \/\ \   /\  ___\   
\ \  _"-.  \ \  __\   \ \  __ \  \ \ \____  \ \ \  \ \ \-.  \  \ \ \__ \     \/_/\ \/ \ \  __\   \ \  __<   \ \ \-./\ \  \ \ \  \ \ \-.  \  \ \ \_\ \  \ \___  \  
 \ \_\ \_\  \ \_____\  \ \_\ \_\  \ \_____\  \ \_\  \ \_\\"\_\  \ \_____\       \ \_\  \ \_____\  \ \_\ \_\  \ \_\ \ \_\  \ \_\  \ \_\\"\_\  \ \_____\  \/\_____\ 
  \/_/\/_/   \/_____/   \/_/\/_/   \/_____/   \/_/   \/_/ \/_/   \/_____/        \/_/   \/_____/   \/_/ /_/   \/_/  \/_/   \/_/   \/_/ \/_/   \/_____/   \/_____/ 
                                                                                                                                                                  
*/

/**********************************************************************************************************************************************************************/
/*                                                                          Global Variables                                                                          */
/**********************************************************************************************************************************************************************/
var terminal = "Windows";
var cursor = "<span id='cursor'>|</span>";
var x;
var clipboard;

var control_key_down = false;
var check_scroll;

var wanted_location;
var possible_locations;
var wanted_item;
var possible_items;

var all_text;
var input_all;
var input_last;
var input_last_word;
var input_1;
var input_2;
var input_3;
var input_4;

var text_change;
var background_change;
var check_text;
var check_background;

var i = 0;
var person_talking = false;
var person_talking_length = 0;

var previous_location;
var current_location;
var current_item;
var character_response;

var elmnt = document.getElementById("text");
var body = document.body;
var html = document.documentElement;
let root = document.documentElement;

/**********************************************************************************************************************************************************************/
/*                                                                           Starting Setup                                                                           */
/**********************************************************************************************************************************************************************/
document.getElementById("title").innerHTML = "Beta | "+terminal;

all_text =   "Welcome to Kealing Terminus!<br>"
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
			+"Good luck!<br>"
			+"<br>> "+cursor;
document.getElementById("text").innerHTML = all_text;

input_all = "";
input_1 = "";
input_2 = "";
input_3 = "";

current_location = "Home";
previous_location = "Home";
root.style.setProperty("--map-text-color-"+current_location, "var(--map-text-color-active)");
root.style.setProperty("--map-background-"+current_location, "var(--map-background-active)");