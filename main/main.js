const data = [
    {
        image_link: "http://books.google.com/books/content?id=H9emM_LGFDEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        author: 'Mark Summerfield',
        isbn: "0321680561",
        title: "title: Programming in Python 3",
        id:"H9emM_LGFDEC"
      },
      {
        image_link: "http://books.google.com/books/content?id=mh0bU6NXrBgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        author: 'Wesley Chun',
        isbn: "0130260363",
        title: "title: Core Python Programming",
        id:"mh0bU6NXrBgC"
    },
    {
        image_link: "http://books.google.com/books/content?id=FQlBEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        author: 'Robert S. Sutor',
        isbn: "1801071624",
        title: "title: Dancing with Python",
        id:"FQlBEAAAQBAJ"
    },
    {
        image_link: "http://books.google.com/books/content?id=ftA0yk1Z92wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        author: 'Mark Lutz,David Ascher',
        isbn: "0596551932",
        title: "title: python for beginner",
        id:"mh0bU6NXrBgC"
    },
    {
        image_link: "http://books.google.com/books/content?id=6HgFEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        title: 'Taming PYTHON By Programming',
        isbn: "9386173344",
        author: "Jeeva Jose",
        id:"hYRNEAAAQBAJ"
    },
    {
        image_link: "http://books.google.com/books/content?id=TO_dEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        author: 'VIETSTEM',
        isbn: "6043369117",
        title: "title: Lập trình với Python",
        id:"TO_dEAAAQBAJ"
    },
    ]
  
  const list = data.map((item, index) => {
    return `
           <div class="m" onclick="navigate(item.id)">
            <a href="/myproject-nguyen-tien-dat/ch/ch.html?id=${item.id}"><img src=${item.image_link} alt=""></a>
            <p>${item.title}</p>
            <span>author: ${item.author}</span>
            <span>isbn: ${item.isbn}</span>
          </div>
          `;
  });
  
  const htmls = list.join();
  
  document.querySelector(".content-sugg").innerHTML = htmls;

//   alert('bi')



function check() {
    console.log(document.querySelector("#btnGoogle"))
    if (localStorage.getItem("islogin") == 0){
        
        document.querySelector("#btnGoogle").style.display = "inline-block"
        
      } else{
        // window.location.reload()
        document.querySelector("#btnGoogle").style.display = "none"
      }
}


check()
