const params = window.location.search;
const id = new URLSearchParams(params).get("id");


let champDetail = document.getElementById("champDetail")
let api_link_champion = "champions.json"
let championDescribe
fetch(api_link_champion)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    let champions = data.champions;
    let listItem = ''
    championDescribe = champions.find(item => item.id == id)
    const champDesc = `<div class="z-10 text-white absolute top-[350px] left-[200px]">
          <div class="text-[32px] text-[#c8aa6e] font-[700] italic font-[LOL]">
            <h1>${championDescribe.name1}</h1>
        </div>
        <div class="text-white italic font-[900] text-[100px] font-[LOL]">
            <H1>${championDescribe.name2}</H1>
        </div>
        <P class="text-white font-[400] text-[18px] break-words w-[720px]">${championDescribe.describe}</P>
      </div>
        <div>
          <div><img class=" w-full  absolute" src="${championDescribe.bg}" alt=""></div>
          
          <div class="background_gradient"></div>
          
          
        </div>
        <div class="bg-[#0a1428] w-full h-[2100px]"></div>
        <div>
          <div class="text-white font-[800] font-[LOL] text-[80px] italic absolute top-[1400px] left-[450px]">
            <h1>KỸ NĂNG</h1>
          </div>
          <div class="flex gap-[50px] absolute top-[1580px] left-[300px] ">
            <div>
              <img onclick="handleChange('passive')" class="w-[80px] h-[80px] btn1 cursor-pointer" src="${championDescribe.passive}" alt="">
              <p class="text-white text-[14px] font-[600] break-words w-[90px] ml-[-5px] mt-[30px] text-center">${championDescribe.passive_name}</p>
            </div>
    
            <div>
              <img onclick="handleChange('skillQ')" class="w-[80px] h-[80px] btn1 cursor-pointer" src="${championDescribe.abi1}" alt="">
              <p class="text-white text-[14px] font-[600] break-words w-[90px] ml-[-5px] mt-[30px] text-center">${championDescribe.abi1_name}</p>
            </div>
    
            <div>
              <img onclick="handleChange('skillW')" class="w-[80px] h-[80px] btn1 cursor-pointer" src="${championDescribe.abi2}" alt="">
              <p class="text-white text-[14px] font-[600] break-words w-[90px] ml-[-5px] mt-[30px] text-center">${championDescribe.abi2_name}</p>
            </div>
    
            <div>
              <img onclick="handleChange('skillE')" class="w-[80px] h-[80px] btn1 cursor-pointer" src="${championDescribe.abi3}" alt="">
              <p class="text-white text-[14px] font-[600] break-words w-[90px] ml-[-5px] mt-[30px] text-center">${championDescribe.abi3_name}</p>
            </div>
    
            <div>
              <img onclick="handleChange('skillR')" class="w-[80px] h-[80px] btn1 cursor-pointer" src="${championDescribe.abi4}" alt="">
              <p class="text-white text-[14px] font-[600] break-words w-[90px] ml-[-5px] mt-[30px] text-center">${championDescribe.abi4_name}</p>
            </div>
          </div>
          </div>
          <div class="absolute w-[744px] h-[533px] right-[150px] top-[1300px] border-solid border-2 border-[#c8aa6e]">
            <video id="AatroxSkillQ" class="w-[694px] h-[473px] absolute top-[30px] left-[23px] items-center" autoplay loop muted src="${championDescribe.passive_vid}"></video>
          </div>
          </div>`

    champDetail.innerHTML = champDesc
  })


// const a = database.find(item => item.id === id)

// const e = ``

// setTimeout(() => {
//     let video1 = document.getElementById("AatroxSkillQ");
// console.log(video1)
// },2000)


const handleChange = (key) => {
  let video1 = document.getElementById("AatroxSkillQ");
  console.log(video1)
  console.log(key)
  switch (key) {
    case "passive":
      video1.setAttribute("src", championDescribe.passive_vid)
      break;
    case "skillQ":
      video1.setAttribute("src", championDescribe.abi1_vid)
      break;
    case "skillW":
      video1.setAttribute("src", championDescribe.abi2_vid)
      break;
    case "skillE":
      video1.setAttribute("src", championDescribe.abi3_vid)
      break;
    case "skillR":
      video1.setAttribute("src", championDescribe.abi4_vid)
      break;
  }


}