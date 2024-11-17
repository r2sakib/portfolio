const ProjectsData = [
  {
    name: "Bank Management System",
    logo: "https://github.com/r2sakib/bank_management_system/blob/main/resources/logo.png?raw=true",
    description:
      "A simple bank management system that has three types of users: Manager, Cashier, and Customer. The system is developed using Java.",
    link: "https://github.com/r2sakib/bank_management_system",
  },
];

const ProjectsDataHTML = ProjectsData.map(
  (item) => `
           <div class="projects-card">
            <div>
              <img loading="lazy" src="${item.logo}" alt="${item.name}">
              <h3>${item.name}</h3>
            </div>
            <div>
              <p>${item.description}</p>
              <a href="${item.link}" title="${item.name}" target="_blank">View</a>
            </div>
          </div>
      `
).join("");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("projects-card-container").innerHTML =
    ProjectsDataHTML;
});
