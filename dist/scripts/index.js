"use strict";
const personalInfo = {
    name: "李佳芸",
    title: "輔仁大學醫學資訊系學生",
    about: "你好，我是佳芸，來自台灣，目前就讀於大學，主修醫學資訊。",
    contact: ["(+886) 908080109", "412570364@m365.fju.edu.tw", "新北市新莊區中正路510號, 242062, 台灣"],
    skills: [],
    certifications: []
};
const education = [
    {
        degree: "醫學資訊學士學位",
        institution: "輔仁大學",
        location: "新北市",
        duration: "2023 - 現在",
        details: [
            "相關課程：Java物件導向程式設計、網頁設計。",
            "畢業專題：'待定'"
        ]
    },
];
document.getElementById("name").textContent = personalInfo.name;
document.getElementById("title").textContent = personalInfo.title;
document.getElementById("about").textContent = personalInfo.about;
const contactList = document.getElementById("contact-list");
personalInfo.contact.forEach(contact => {
    const li = document.createElement("li");
    li.textContent = contact;
    contactList.appendChild(li);
});
const skillsList = document.getElementById("skills-list");
personalInfo.skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});
const certificationsList = document.getElementById("certifications-list");
personalInfo.certifications.forEach(certification => {
    const li = document.createElement("li");
    li.textContent = certification;
    certificationsList.appendChild(li);
});
const experienceList = document.getElementById("experience-list");
const educationList = document.getElementById("education-list");
education.forEach(edu => {
    const div = document.createElement("div");
    div.classList.add("education-entry");
    const h3 = document.createElement("h3");
    h3.textContent = edu.degree;
    div.appendChild(h3);
    const p = document.createElement("p");
    p.innerHTML = `<strong>${edu.institution}</strong>, ${edu.location}, ${edu.duration}`;
    div.appendChild(p);
    const ul = document.createElement("ul");
    edu.details.forEach(detail => {
        const li = document.createElement("li");
        li.textContent = detail;
        ul.appendChild(li);
    });
    div.appendChild(ul);
    educationList.appendChild(div);
});
//# sourceMappingURL=index.js.map