var text="Mohammad Zaed",speed=50,container="",words=["Mohammad Zaed"];let i=0,timer;function typingEffect(){let word=words[i].split("");var loopTyping=function(){if(word.length>0){document.getElementById('name').innerHTML+=word.shift();}else{return false;};timer=setTimeout(loopTyping,100);};loopTyping();};typingEffect();var dropdown=document.getElementsByClassName("container-buttons-nav")[0],nav=document.getElementsByClassName("nav-t")[0];var home=document.getElementById("home"),about=document.getElementById("about"),contact=document.getElementById("contact"),mywork=document.getElementById("mywork"),section=document.getElementsByTagName("section");var homeLink=document.getElementById("homeLink"),aboutLink=document.getElementById("aboutLink"),contactLink=document.getElementById("contactLink"),myworkLink=document.getElementById("myworkLink");var arr=[homeLink,aboutLink,contactLink,myworkLink];function to_rotate(select,id_element){for(i=0;i<section.length;i++){if(section[i].classList.contains("active")){section[i].classList.toggle("active");}} for(l=0;l<arr.length;l++){if(arr[l].classList.contains("color-blue")){arr[l].classList.remove("color-blue");}} select.classList.toggle("active");id_element.classList.toggle('color-blue');}