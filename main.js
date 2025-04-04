const list = document.querySelector(".list");
let listProjects = [
  "./media-1/index.html",
  "./media-2/index.html",
  "./media-3/index.html",
  "./media-4/index.html",
  "./media-5/index.html",
  "./media-6/index.html",
  "./media-7/index.html",
  "./media-8/index.html",
  "./media-9/index.html",
];

list.innerHTML = listProjects.map((e, i) => {
  return`<li class="list-item">
        <a href="./media-${i+1}/index.html">
          <span>project ${i+1}</span>
          <img src="./img/project-${i+1}.png" alt="project-${i+1}" />
        </a>
      </li>`;
}).join('');
