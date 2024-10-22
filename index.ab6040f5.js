document.querySelectorAll("form input").forEach(function(e){var t=document.createElement("label");t.classList.add("field-label");var r=e.name.charAt(0).toUpperCase()+e.name.slice(1);t.textContent=r,t.setAttribute("for",e.id),e.setAttribute("placeholder",r),e.parentElement.insertBefore(t,e)});
//# sourceMappingURL=index.ab6040f5.js.map
