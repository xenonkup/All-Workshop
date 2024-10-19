(function ($) {
  // เริ่มฟังก์ชัน IIFE โดยใช้ jQuery เป็น $
  var myBlog = [
    // สร้าง Array เก็บ object
    {
      title: "Beautiful Kitchen",
      text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
      image: "images/kitchen.jpg",
      link: "#",
    },
    {
      title: "Beautiful Kitchen",
      text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
      image: "images/kitchen.jpg",
      link: "#",
    },
    {
      title: "Beautiful Kitchen",
      text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
      image: "images/kitchen.jpg",
      link: "#",
    },
    {
      title: "Beautiful Kitchen",
      text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
      image: "images/kitchen.jpg",
      link: "#",
    },
    {
      title: "Beautiful Kitchen",
      text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
      image: "images/kitchen.jpg",
      link: "#",
    },
    {
      title: "Beautiful Kitchen",
      text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
      image: "images/kitchen.jpg",
      link: "#",
    },
  ];

  var blog = document.getElementById("myListBlog"); // ประการตัวแปร Blog เข้าถึง ID myListBlog
  var innerHTML = ""; // ประกาศ Var เรียกใช้ property innerHTML แสดงที่หน้าจอ เท่ากับค่าว่าง

  // วนลูปผ่าน myBlog เพื่อสร้างรายการ HTML
  for (let i = 0; i < myBlog.length; i++) {
    let data = myBlog[i]; // ประกาศตัวแปร Data ดึงข้อมูล myBlog[i] ในแต่ละรอบของลูป
    innerHTML += `
      <li class="list-item"> 
        <div class="thumb"> 
          <a href="${data.image}" class="lightbox"> 
            <img class="info_img" src="${data.image}" alt="" /> 
          </a>
        </div>
        <h3 class="head_color before">${data.title}</h3> 
        <p>${data.text}</p> 
        <div class="colored_button_div"> 
          <a href="${data.link}" class="colored_button">View Home</a> 
        </div>
      </li>
    `;
  }

  // ตั้งค่า innerHTML ขององค์ประกอบ blog
  blog.innerHTML = innerHTML;

  // เริ่มใช้งาน magnificPopup สำหรับการเปิดภาพใน lightbox
  $("#myListBlog").magnificPopup({
    delegate: "a", // กำหนดลิงก์ที่จะเปิดใน lightbox
    type: "image", // กำหนดประเภทเป็นภาพ
    // other options
  });

  // });
})(jQuery); // ปิดฟังก์ชัน IIFE
