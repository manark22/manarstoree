let text = "At Manar Store, we believe you deserve the best products for your unique skin ..Manar store that seeks out the best skincare and makeup products..To help you achieve your needs, goals, and preferences.. ";
let index = 0;
function typeWriter() {
    if (index < text.length) {
      document.getElementById("intro").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  window.onload = typeWriter;