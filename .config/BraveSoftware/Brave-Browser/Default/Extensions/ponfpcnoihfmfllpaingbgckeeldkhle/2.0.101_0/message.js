/*
##
##	Enhancer for YouTube™ | Chrome Extension
##	========================================
##
##	Author: Maxime RF <https://www.mrfdev.com>
##
##	This file is protected by copyright laws and international copyright
##	treaties, as well as other intellectual property laws and treaties.
##
##	All rights not expressly granted to you are retained by the author.
##	Read the license.txt file for more details.
##
##	If it's not enough clear for you Baris Derin, you have no rights to use my work,
##	neither as-is nor modified! Improve your coding logic instead of using others work!
##
##	© MRFDEV.com - All Rights Reserved
##
*/
(function(a){a.querySelector('input[name="cancel_return"]').value=a.location.href;a.querySelectorAll("button[data-url]").forEach(function(a){a.addEventListener("click",function(){chrome.tabs.create({url:this.dataset.url,active:!0})})})})(document);