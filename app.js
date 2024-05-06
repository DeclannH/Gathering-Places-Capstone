

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


         const restaurants = await col.find().toArray(function (err, docs) {

});


        } catch (err) {

         console.log(err.stack);

     }

 

     finally {

        await client.close();

    }

}

run().catch(console.dir);


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
	
	//get check boxes for allergens and search them
	let checkboxa = document.getElementsByName("acheckbox");
	for (let i = 0; i < checkboxa.length; i++) {
		if ( checkboxa[i].checked == true )
	allergens.push(checkboxa[i].id); }
	
	//run allergen search
	let allergenRestaurants = searcha(restaurants, allergens);
	console.log(allergenRestaurants);
	
	//set variables for religious diet restrictions
	let dietary = [];
	let dietSelected = false;
	
	//check boxes for religious diet restrictions
	let checkboxd = document.getElementsByName("dcheckbox")
	for (let e = 0; e < checkboxd.length; e++) {
		if ( checkboxd[e].checked == true ){
			dietSelected = true;
			dietary.push(checkboxd[e].id);
		}
	}
	
	if (dietSelected == true){
		var dietaryRestaurants = searchd(allergenRestaurants, dietary);
	
	}
	else {
		var dietaryRestaurants = allergenRestaurants;
	}
	


	//this section bypasses an issue where nothing selected for dietary requirements returns nothing in the search Area
	if (dietSelected == false){
		dietaryRestaurants = allergenRestaurants;
	}

	//retrieve value from searchbox, turn it into an array to function with the searches, and search
	
	var searchbox = [];
	

	let sboxcheck = false;
	let svalue = document.getElementById("searchbox").value.trim();
	console.log(svalue.length);
	
	//check for search value and search
	if (svalue.length != 0 ){
		console.log("empty")
        searchbox.push(svalue);
		let filteredRestaurants = searchb(dietaryRestaurants, searchbox);
		console.log(searchbox[0])
	
	
	} else {
		var filteredRestaurants = dietaryRestaurants;
	

    }

	
	//reset innerhtml of display, then display results
	resDisplay.innerHTML = "";
	
	if (svalue.length === 0)
		filteredRestaurants = dietaryRestaurants;
		
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
                                <div class=\"text-center\"><a class=\"btn btn-outline-dark mt-auto\" id=\"button\" name=\""+res.name+"\" onclick=\"dish\(this.name\)\">View Dishes</a></div>\
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

function dish(name){
	for(j in restaurants){
		if(restaurants[j].name == name)
			var card = restaurants[j];
	}
	
	alert(card.Dishes);
	
	
}
function getDietary(){
	

	
	return dietary;
	}
	
	
	




var endresult = "";

for(var r in restaurants){
	var res = restaurants[r];

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
                              <div class=\"text-center\"><a class=\"btn btn-outline-dark mt-auto\" id=\"button\" name=\""+res.name+"\" onclick=\"dish\(this.name\)\">View Dishes</a></div>\
                            </div>\
                        </div>\
                    </div>\
					";
		endresult = endresult + result;
		resDisplay.innerHTML += result;
};


	







