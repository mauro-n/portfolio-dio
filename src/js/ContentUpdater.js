import Api from "./Api.js";

class ContentUpdater {
    static data = {};
    static name = document.querySelector(".profile-title");
    static photo = document.querySelector(".profile-img");
    static job = document.querySelector(".profile-subtitle");
    static address = document.querySelector(".address > span");
    static city = document.querySelector("#address-city");
    static tel = document.querySelector("#address-tel");
    static email = document.querySelector("#address-email");
    static languages = document.querySelector("#languages");
    static tools = document.querySelector("#toolsContainer");
    static portfolio = document.querySelector("#portfolioContainer");

    static async setData() {
        this.data = await Api.fetch();
    }

    static updatePhoto() {
        console.log(this.data.picture)
        this.photo.src = this.data.picture;
    }

    static updateName() {
        this.name.innerText = this.data.name;
    }

    static updateJob() {
        this.job.innerText = this.data.job;
    }

    static updateAddress() {
        this.city.innerText = this.data.address;
        this.tel.innerText = this.data.tel;
        this.tel.href=`tel:${this.data.tel}`
        this.email.innerText = this.data.email;
    }

    static updateLanguages() {        
        const languages = this.data.details.languages.map(element => {
            return `<li>${element.title + " " + element.level}</li>`            
        }).join("");
        this.languages.innerHTML = languages;
    }

    static updateTools() {
        const tools = this.data.details.tools.map(el => {
            return `<img class="item-content-icon" src="${el.icon}" title="${el.title}" alt="${el.title}" >`
        }).join("");
        this.tools.innerHTML = tools;
    }

    static updatePortfolio() {
        const portfolio = this.data.details.projects.map(el => {
            return `
            <div class="item-portfolio">
                <div>${el.title}</div>
                <a href="${el.url}" target="_blank">${el.url}/</a>
            </div>
            `
        }).join("");

        this.portfolio.innerHTML = portfolio;
    }

    static async update() {        
        await this.setData();
        this.updateName();
        this.updatePhoto();
        this.updateJob();
        this.updateAddress();
        this.updateTools()
        this.updateLanguages();
        this.updatePortfolio();
    }
}

export default ContentUpdater;