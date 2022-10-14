var parent =  document.querySelector(".parent")
var allproducts = document.querySelectorAll(".list li")
 var content = document.querySelector("#content")
 var btn = document.querySelector("#addToCart")
 var out = document.querySelector("#output")
 var buy = document.querySelector("#buy")
  var info = document.querySelector(".forme")
  var res = document.querySelector("#result")
 //////////////////////////////////////////
   parent.style.transform="scale(0)"
   parent.style.transition="1s"
   parent.style.width="1326px"
   parent.style.height="627px"
   parent.style.backgroundColor="green"
   content.style.transform="scale(0)"
   content.style.transition="1s"
   out.style.transform="scale(0)"
   out.style.transition="0.4s"
   ///////////////////////////////////////////
   res.style.visibility="hidden"
   var totalprice = 0;
   allproducts.forEach(function (item){
      item.onclick = function(){
         totalprice += parseInt(item.getAttribute ("price"))
         content.style.position="absolute"
         content.style.backgroundColor="green"
         content.style.color="white"
         content.style.display="inline-block"
         content.style.borderRadius="30px 30px"
         content.style.marginLeft="373px"
         content.style.marginTop="-358px"
         content.style.fontSize="28px"
         content.style.transitionDelay="0.5s"
         content.style.transform="scale(1)"
         content.innerHTML += item.textContent + "  ";
       if (content.innerHTML != "") {
         btn.style.display = "inline-block"
         btn.style.position="absolute"
         btn.style.marginLeft="318px"
         btn.style.marginTop="-281px"
         btn.style.borderRadius="30px 30px"
         btn.style.width="200px"
         btn.style.height="60px"
         btn.style.fontSize="15px"
         btn.style.transitionDelay="1s"
         btn.style.color="green"
       }}})
         btn.onclick=function(){
         buy.style.display = "inline-block"
         buy.style.position="absolute"
         buy.style.marginLeft="923px"
         buy.style.marginTop="-171px"
         buy.style.borderRadius="30px 30px"
         buy.style.width="200px"
         buy.style.height="60px"
         buy.style.fontSize="15px"
         buy.style.transitionDelay="1s"
         buy.style.color="green"
        out.style.display="inline"
        out.style.position="absolute"
        out.style.borderRadius="30px 30px"
        out.style.marginTop="-232px"
        out.style.marginLeft="986px"
        out.style.fontSize="27px"
        out.style.transitionDelay="0.3s"
        out.style.transform="scale(1)"
        out.innerHTML = totalprice
        if(out.innerHTML < 20000){
          out.innerHTML="XXX"
          res.style.visibility="visible"
          res.innerHTML="not currently available"}
        if(out.innerHTML < 70000){
         out.style.backgroundColor="green"
         out.style.color="white"}
       else{
         out.style.backgroundColor="white"
         out.style.color="green"}}
         buy.onclick=function(){
        if(out.innerHTML == "XXX"){
          res.style.visibility="visible"
         res.innerHTML="You can't buy it now"}
        if(out.innerHTML > 20000){
          res.style.visibility="hidden"
         info.style.transitionDelay="0.4s"
         info.style.transition="1s"
         info.style.transform="scale(1)"}}
    function test(){
      parent.style.transitionDelay="0.5s"
      parent.style.transform="scale(1)"}
