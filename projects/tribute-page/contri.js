const contributors = [
  [`<img src="https://avatars.githubusercontent.com/u/82640897?v=4" /><br/><sub><b>Srinivas-Rao-au17</b></sub>`, `https://github.com/Srinivas-Rao-au17`],
  [`<img src="https://avatars.githubusercontent.com/u/49641841?v=4" /><br/><sub><b>subham-kumar-au17</b></sub>`, `https://github.com/subham-kumar-au17`],
  [`<img src="https://avatars.githubusercontent.com/u/76985787?v=4" /><br/><sub><b>shivam-singh-au17</b></sub>`, `https://github.com/shivam-singh-au17`],
  [`<img src="https://avatars.githubusercontent.com/u/82035853?v=4" /><br/><sub><b>Sekar-Sumuthra-au17</b></sub>`, `https://github.com/Sekar-Sumuthra-au17`],
  [`<img src="https://avatars.githubusercontent.com/u/74249287?v=4" /><br/><sub><b>vaishnavi-gupta-au16</b></sub>`, `https://github.com/vaishnavi-gupta-au16`],
  [`<img src="https://avatars.githubusercontent.com/u/58421318?v=4" /><br/><sub><b>Venkat-sundeep-au17</b></sub>`, `https://github.com/Venkat-sundeep-au17`],
  [`<img src="https://avatars.githubusercontent.com/u/82393087?v=4" /><br/><sub><b>vijay-koppadi-au17</b></sub>`, `https://github.com/vijay-koppadi-au17`],
  [`<img src="https://avatars.githubusercontent.com/u/79193180?v=4" /><br/><sub><b>yashasvi-sinha</b></sub>`, `https://github.com/yashasvi-sinha`],
]

window.addEventListener('DOMContentLoaded', (event) => {
  
  
  const section = document.getElementById('contributors')

  const contributorsHTML = contributors.map(item => {
    console.log("🚀 ~ file: contri.js ~ line 18 ~ window.addEventListener ~ item", item)
    
  
    return `
    <div class="contributor">
            <a href="${item[1]}" target="_blank" rel="noopener noreferrer">
              <div>
                ${item[0]}
              </div>
            </a>
    </div>
    `
  })


  section.innerHTML = contributorsHTML.join('')


});