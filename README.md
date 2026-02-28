1.Ans: getElementById = এটা দিয়ে নিদিষ্ট একটা Id  কে ধরতে পারি ,
       getElementsByClassName = এটা দিয়ে class ধরতে পারি,
       querySelector = এটা অনেক গুলো elements থেকে প্রথম  element  কে দিবে,
       querySelectorAll = এটা দিয়ে একই ধরনের একাধিক  element একসাথে ধরতে পারি |

2.Ans: const p = document.createElement("p")
       p.innerText = 'Hello js'
       document.body.appendChild(p)

3.Ans: event Bubbling >  এটাতে কোনো child element  এ  event add করলে  ওই  event  পর পর তার parent => grandparent => body => document পর্যন্ত উপরে উঠতে থাকে  |     

4.Ans: event Delegation এর কাজ  হলো  অনেক গুলো child কে  আলাদা ভাবে event না দিয়ে তাদের parent কে একটা event listener add  করা হয়
       কারণ :
         ১-কম event listener লাগে 
         ২- memory কম লাগে 
         ৩-Dynamic ভাবে কাজ করে

5.Ans: 1.preventDefault() হলো এটা element এর default behavior বন্ধ করে|
       2.stopPropagation() হলো এটা event bubbling বন্ধ করে|
