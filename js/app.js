
/*
const { MongoClient } = require("mongodb");

 

// Replace the following with your Atlas connection string

const uri =  

  "mongodb+srv://declannherrington:AVuK27P5G2TihD6L@declannherrington.gdmkteb.mongodb.net/?retryWrites=true&w=majority&appName=DeclannDreams";

const client = new MongoClient(uri);

                      

 async function run() {

    try {

        // Connect to the Atlas cluster

         await client.connect();

         // Get the database and collection on which to run the operation

         const db = client.db("DeclannDreams");

         const col = db.collection("GatheringPlaces");


         const document = await col.find().toArray(function (err, docs) {

});

         // Print results

         console.log("Document found:\n" + JSON.stringify(document));

        } catch (err) {

         console.log(err.stack);

     }

 

     finally {

        await client.close();

    }

}

run().catch(console.dir);


*/
    const restaurants = [

           {

             name: "Fleetwood Diner",

			 allergens: [ "Eggs", "Wheat", "Dairy" ],																													

             Dishes: [ "Chili Cheese Fries", "Scrambled Eggs", "Omelets", "Biscuits and gravy", "Hamburgers", "Wagyu Steak"],
			 
			 Dietary: [],

             image: "https://thefleetwooddiner.com/wp-content/uploads/2011/09/fleetwoodlogotopleft.jpg"

           },

			{

             name: "Corey's Lounge",

			 allergens: [ "Dairy", "Shellfish", "Soy", "fish" ],																													

             Dishes: [ "Jalepeno Poppers", "Chicken Ceasar Salad", "Clam Chowder", "Center Cut Top Sirloin", "Baby Back Ribs", "Fried Lake Perch"],
			 
			 Dietary: ["Kosher"],

             image: "https://img1.wsimg.com/isteam/ip/6687b234-bc14-4ce1-99a3-e53c1eae062b/blob-0001.png/:/rs=w:500,h:149,cg:true,m/cr=w:500,h:149/qt=q:100/ll"

           },
		   
		    {

             name: "Envie",

			 allergens: [ "Soy", "Sesame", "Tree Nuts" ],																													

             Dishes: [ "Gluten Free Olive Burger", "Tofu Stirfry", "Almond Milk Latte", "Seasonal Fruit Smoothie", "Mushrooms in Sesame Oil"],
			 
			 Dietary: ["Halal", "Kosher"],

             image: "https://envie517.com/wp-content/uploads/2017/03/18922124_1905407053058537_2614110403499260959_n.jpg?w=960&h=400&crop=1"

           },
		   
		   {

             name: "Subway",

			 allergens: [ "Soy", "Sesame", "Peanuts", "Wheat", "Eggs" ],																													

             Dishes: [ "Footlong sub", "6 inch sub", "cookies", "flatbread", "power bowl", "soft drinks"],
			 
			 Dietary: ["Halal"],
			 

             image: "https://www.subway.com/en-us/-/media/Project/Remote-Order/Images/Logo/subway-logo.png?sc_lang=en-US"

           },
		   
		   {

             name: "Los Tres Amigos",

			 allergens: [ "Dairy" ],																													

             Dishes: [ "Burritos Amigos", "Fajita Bowl", "ChiChi's Fried Icecream", "cactus burrito", "Chili Rellenos", "Special Tapatio"],
			 
			 Dietary: ["Halal"],

             image: "https://lostresamigosonline.com/images/los-tres-amigos-mexican-restaurant-food-catering_01.jpg"

           },

         ]

var resDisplay = document.getElementById("search container")

function searcha (arr, terms){
  const filteredRestaurants = arr.filter(obj => obj.allergens.every(
    allergen => !terms.includes(allergen)
  ));
  return filteredRestaurants;
}

function searchd (arr, terms){
  const filteredRestaurants = arr.filter(obj => obj.Dietary.every(
    diet => terms.includes(diet)
  ));
  return filteredRestaurants;
}
function searchb (arr, terms){
  const filteredRestaurants = arr.filter(obj => obj.Dishes.every(
    dish => terms.includes(dish)
  ));
  return filteredRestaurants;
}



function getCheckboxes(){
	
	resDisplay.innerHTML = " ";
	
	let allergens = [];
	
	
	let checkboxa = document.getElementsByName("acheckbox");
	for (let i = 0; i < checkboxa.length; i++) {
		if ( checkboxa[i].checked == true )
	allergens.push(checkboxa[i].id); }
	
	let allergenRestaurants = searcha(restaurants, allergens);
	console.log(allergenRestaurants);
	
	let dietary = [];
	let dietSelected = false;
	
	let checkboxd = document.getElementsByName("dcheckbox")
	for (let e = 0; e < checkboxd.length; e++) {
		if ( checkboxd[e].checked == true ){
			dietSelected = true;
			dietary.push(checkboxd[e].id);
		}
	}
	
	console.log(dietary);
	
	
	if (dietSelected == true){
		var dietaryRestaurants = searchd(allergenRestaurants, dietary);
	
	}
	else {
		var dietaryRestaraunts = allergenRestaurants;
	}
	
	
	console.log(dietSelected)
	console.log(dietaryRestaraunts);


/*
	var searchbox = [];
	
	searchbox.push(document.getElementById("searchbox").value);
	
	if (searchbox[0] != null || searchbox[0] != ""){
				let filteredRestaurants = searchb(dietaryRestaurants, searchbox);
	}

	else { */
		
		let filteredRestaurants = dietaryRestaurants;
         
	
	
	
	
	
	
	
	resDisplay.innerHTML = "";
		
	for(var k in filteredRestaurants){
	var res = restaurants[k];

     var result = "              <div class=\"col mb-5\">\
                        <div class=\"card h-100\">\
						\
                            <img class=\"card-img-top\" src="+res.image+" alt=\"...\" />\
							\
                            <div class=\"card-body p-4\">\
                                <div class=\"text-center\">\
                                    <!-- Product name-->\
                                    <h5 class=\"fw-bolder\">"+res.name+"</h5\
                                    \
                                </div>\
                            </div>\
                            <!-- Product actions-->\
                            <div class=\"card-footer p-4 pt-0 border-top-0 bg-transparent\">\
                                <div class=\"text-center\"><a class=\"btn btn-outline-dark mt-auto\" href=\"#\">View Dishes</a></div>\
                            </div>\
                        </div>\
                    </div>\
					";
		endresult = endresult + result;
		resDisplay.innerHTML += result;
};
	


	
}

function getAllergens(){
	let allergens = [];
	
	let checkbox = document.getElementsByName("acheckbox");
	for (let g = 0; g < checkbox.length; g++) {
		if ( checkbox[g].checked == true )
		allergens.push(checkbox[g].id);
	
	return allergens;
	}
	
	
	
	
}
function getDietary(){
	

	
	return dietary;
	}
	
	
	



const allergencheck = ["Shellfish", "Dairy"];

const res2 = searcha(restaurants, allergencheck);
console.log(res);



console.log(resDisplay);

var endresult = "";

for(var r in restaurants){
	var res = restaurants[r];
	console.log(res);

     var result = "              <div class=\"col mb-5\">\
                        <div class=\"card h-100\">\
						\
                            <img class=\"card-img-top\" src="+res.image+" alt=\"...\" />\
\
                            <div class=\"card-body p-4\">\
                                <div class=\"text-center\">\
                                    <!-- Product name-->\
                                    <h5 class=\"fw-bolder\">"+res.name+"</h5\
                                    \
                                </div>\
                            </div>\
                            <!-- Product actions-->\
                            <div class=\"card-footer p-4 pt-0 border-top-0 bg-transparent\">\
                                <div class=\"text-center\"><a class=\"btn btn-outline-dark mt-auto\" href=\"#\">View Dishes</a></div>\
                            </div>\
                        </div>\
                    </div>\
					";
		endresult = endresult + result;
		resDisplay.innerHTML += result;
};


	







