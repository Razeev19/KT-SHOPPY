let imgb=["./banner/banner1.png","./banner/banner2.png","./banner/banner3.png","./banner/bann.png","./banner/banner5.jpg"]
let imgbanner=document.getElementById("img")
let dot=document.getElementsByClassName("fa-circle")
let i=0
let fun1=()=>{
    dot[i].className="fa-regular fa-circle"
    i++
    if(i>4)
    {
        i=0
    }
    imgbanner.src=imgb[i]
    dot[i].className="fa-solid fa-circle"
}
let back=()=>{
    dot[i].className="fa-regular fa-circle"
    i--
    if(i==-1)
    {
        i=imgb.length-1
    }
    imgbanner.src=imgb[i]
    dot[i].className="fa-solid fa-circle"

}
let front=()=>{
    fun1()
}
let chg=(x)=>{
    dot[i].className="fa-regular fa-circle"
    i=x
    imgbanner.src=imgb[i]
    dot[i].className="fa-solid fa-circle"
    
}
setInterval(fun1,6000)

disp=()=>{
  if(document.getElementsByClassName("user")[0].style.display=="none"){
  document.getElementsByClassName("user")[0].style.display="flex"
  }
  else
  {
  document.getElementsByClassName("user")[0].style.display="none"

  }

}


let data1 = [
    {
      id: 1,
      title: "cricket bat with kasmiri wood",
      price: 1090.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "./cricket/c1.png",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Hard ball with different color ",
      price: 220.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "./cricket/c2.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "cricket wicket with lighting attachment",
      price: 550.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "./cricket/c3.jpg",
      rating: { rate: 4.7, count: 500 },
    },
    {
      id: 4,
      title: "hard cricket helmet safty plus procted",
      price: 150.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "./cricket/c4.jpg",
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 5,
      title:
        "Super soft leather palm for snug fit cricket glove",
      price: 695,
      description:
        "Super soft leather palm for snug fit cricket glove",
      category: "jewelery",
      image:
        "./cricket/c5.jpg",
      rating: { rate: 4.6, count: 400 },
    }
]

let product1=document.getElementsByClassName("product1")
for(let i=0;i<data1.length;i++)
{
    let item=data1[i]
    let y=` <div class="product1item">
                <img src="${item.image}" alt="">
                <p>${item.title}</p>
                <div class="price"><span>Rs.${item.price}</span></div>
                <div class="probtn"><button>ADD CART</button></div>
            </div>`
    product1[0].innerHTML+=y
}

let data2=[{
    id: 6,
    title: "Solid pressurised football ",
    price: 1680.00,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image:
      "./football/f1.jpg",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 999.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image:
      "./football/f2.jpg",
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated  Double",
    price: 310.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image:
      "./football/f3.jpg",
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External ",
    price: 649.99,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "./football/f4.jpg",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: "cr7 branded shoes",
    price: 1090.99,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "./football/f5.jpg",
    rating: { rate: 2.9, count: 470 },
  }]

  let product2=document.getElementsByClassName("product2")
  for(let i=0;i<data2.length;i++)
  {
      let item=data2[i]
      let y=` <div class="product2item">
                  <img src="${item.image}" alt="">
                  <p>${item.title}</p>
                  <div class="price"><span>Rs.${item.price}</span></div>
                  <div class="probtn"><button>ADD CART</button></div>
              </div>`
      product2[0].innerHTML+=y
  }


  let data3=[{
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image:
      "./tshirt/s1.jpg",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image:
      "./tshirt/s2.jpg",
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image:
      "./tshirt/s3.jpg",
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: " Elements Portable External Hard  ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "./tshirt/s4.jpg",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: " PLUS  Internal SSDy - SATA III ",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "./tshirt/s5.jpg",
    rating: { rate: 2.9, count: 470 },
  }]

  let product3=document.getElementsByClassName("product3")
  for(let i=0;i<data3.length;i++)
  {
      let item=data3[i]
      let y=` <div class="product3item">
                  <img src="${item.image}" alt="">
                  <p>${item.title}</p>
                  <div class="price"><span>Rs.${item.price}</span></div>
                  <div class="probtn"><button>ADD CART</button></div>
              </div>`
      product3[0].innerHTML+=y
  }

  let data4=[{
    id: 6,
    title: "shoes Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image:
      "./shoes/j1.jpg",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: "White shoes Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image:
      "./shoes/j2.jpg",
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: "Stainless Steel Double shoes",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image:
      "./shoes/j3.jpg",
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: " Portable External Hard shoes ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "./shoes/j44.jpg",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: " Internal SSD shoes",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "./shoes/j55.jpg",
    rating: { rate: 2.9, count: 470 },
  }]

  let product4=document.getElementsByClassName("product4")
  for(let i=0;i<data4.length;i++)
  {
      let item=data4[i]
      let y=` <div class="product4item">
                  <img src="${item.image}" alt="">
                  <p>${item.title}</p>
                  <div class="price"><span>Rs.${item.price}</span></div>
                  <div class="probtn"><button>ADD CART</button></div>
              </div>`
      product4[0].innerHTML+=y
  }


  let data5=[{
    id: 6,
    title: "shoes Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image:
      "./tennis/t1.jpg",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: "White shoes Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image:
      "./tennis/t2.jpg",
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: "Stainless Steel Double shoes",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image:
      "./tennis/t3.jpg",
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: " Portable External Hard shoes ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "./tennis/t4.jpg",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: " Internal SSD shoes",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "./tennis/t6.jpg",
    rating: { rate: 2.9, count: 470 },
  }]

  let product5=document.getElementsByClassName("product5")
  for(let i=0;i<data5.length;i++)
  {
      let item=data5[i]
      let y=` <div class="product5item">
                  <img src="${item.image}" alt="">
                  <p>${item.title}</p>
                  <div class="price"><span>Rs.${item.price}</span></div>
                  <div class="probtn"><button>ADD CART</button></div>
              </div>`
      product5[0].innerHTML+=y
  }



  let data6=[{
    id: 6,
    title: "shoes Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image:
      "./bedminton/b1.jpg",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: "White shoes Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image:
      "./bedminton/b2.jpg",
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: "Stainless Steel Double shoes",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image:
      "./bedminton/b3.jpg",
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: " Portable External Hard shoes ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "./bedminton/b4.jpg",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: " Internal SSD shoes",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "./bedminton/b5.jpg",
    rating: { rate: 2.9, count: 470 },
  }]

  let product6=document.getElementsByClassName("product6")
  for(let i=0;i<data6.length;i++)
  {
      let item=data6[i]
      let y=` <div class="product6item">
                  <img src="${item.image}" alt="">
                  <p>${item.title}</p>
                  <div class="price"><span>Rs.${item.price}</span></div>
                  <div class="probtn"><button>ADD CART</button></div>
              </div>`
      product6[0].innerHTML+=y
  }

