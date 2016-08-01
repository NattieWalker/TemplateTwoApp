function filter_pictures() {
    var $i = 0;

    //Get the text we use to filter
    var $filter = document.getElementById('filter').value;

	//Get Image caption
	

    //Get all images
    var $imgsCollection = document.getElementsByClassName('filtered');

    //For every image check if url has filter in it and hide/show as needed.
     for ($i = 0; $i < $imgsCollection.length; $i++) {
        if ($imgsCollection[$i].getAttribute('src').indexOf($filter) > -1) {
            $imgsCollection[$i].style.display = 'block';
        } else {
            $imgsCollection[$i].style.display = 'none';
		
        }
     }
}



//function to search sidebar text

/*
function filter_jobs() {
	var $j = 0;

	//get the text we use to filter
	var $filter = document.getElementById('file-tree'.value);

	//get all text
	var $textList = document.getElementsByClassName('main-folder');

	//for every item in list check if the text is in it or not and hide/show as needed
	for($j = 0, $j < textList.length; $j++){
		if($textList[#j].getAttribute('alt').indexOf($filter) > -1) {
			$textList[$j].style.display = 'block';
		}
		else {
			$textList[$j].style.display = 'none';
		}
	}

}

*/