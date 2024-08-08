const data = [
    {
          image_link: "http://books.google.com/books/content?id=H9emM_LGFDEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
          author: 'Mark Summerfield',
          isbn: "0321680561",
          title: "title: Programming in Python 3"
      },
      {
        image_link: "http://books.google.com/books/content?id=mh0bU6NXrBgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        author: 'Wesley Chun',
        isbn: "0130260363",
        title: "title: Core Python Programming"
    },
    {
        image_link: "http://books.google.com/books/content?id=FQlBEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        author: 'Robert S. Sutor',
        isbn: "1801071624",
        title: "title: Dancing with Python"
    },
    {
        image_link: "http://books.google.com/books/content?id=ftA0yk1Z92wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        author: 'Mark Lutz,David Ascher',
        isbn: "0596551932",
        title: "title: 0596551932"
    },
    {
        image_link: "http://books.google.com/books/content?id=6HgFEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        title: 'Taming PYTHON By Programming',
        isbn: "9386173344",
        author: "title: Jeeva Jose"
    },
    {
        image_link: "http://books.google.com/books/content?id=TO_dEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        author: 'VIETSTEM',
        isbn: "6043369117",
        title: "title: Lập trình với Python"
    }
    ]
  
  const list = data.map((item, index) => {
    return `
           <div class="m">
            <img src=${item.image_link} alt="">
            <p>title: ${item.title}</p>
            <p>author: ${item.author}</p>
            <span>isbn: ${item.isbn}</span>
          </div>
          `;
  });
  
  const htmls = list.join();
  
  document.querySelector(".content-sugg").innerHTML = htmls;

//   alert('bi')

