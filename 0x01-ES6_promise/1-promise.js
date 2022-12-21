export default function getFullResponseFromAPI(success){
   let mypromise = new Promise(
	function(myResolve, myReject){
		if(success)
		{
		  myResolve({status: 200, body: 'success'});
		}
		else{
		  myReject(new Error('The fake API is not working currently'));
		}
	});
   return mypromise;
}	
