const apps = [
  {
    id: 'app1',
    title: 'Land Calculator',
    image: 'assets/land_calculator/ic_icon_round.png',
    keywords: 'Keywords',
    desc: 'Description',
    apk: 'https://drive.google.com/uc?export=download&id=1YeH6UhDsqJq3FsPB9ZPJ1DBC43JaCJuu',
    screenshots: [
      'assets/land_calculator/screenshot1.jpg',
      'assets/land_calculator/screenshot2.jpg'
    ]
  },
  {
    id: 'app2',
    title: 'Tic Tac Toe',
    image: 'assets/tictactoe/ic_icon_round.png',
    keywords: 'Keywords',
    desc: 'Description',
    apk: 'https://drive.google.com/uc?export=download&id=1Ya6mGCfRNy5LYPMU3RVUF0YvJnNGG_nG',
    screenshots: [
      'assets/tictactoe/screenshot1.jpg'
    ]
  },
  {
    id: 'app3',
    title: 'SKR Projects',
    image: 'assets/skr_projects/ic_icon_round.png',
    keywords: 'Keywords',
    desc: 'Description',
    apk: 'https://drive.google.com/uc?export=download&id=1Yavo8_FCVyIbco4bV2LKbPV158ZXb06r',
    screenshots: [
      'assets/skr_projects/screenshot1.jpg',
      'assets/skr_projects/screenshot2.jpg',
      'assets/skr_projects/screenshot3.jpg',
      'assets/skr_projects/screenshot4.jpg',
      'assets/skr_projects/screenshot6.jpg'
    ]
  },
  {
    id: 'app4',
    title: 'Age Calculator',
    image: 'assets/age_calculator/ic_icon_round.png',
    keywords: 'Keywords',
    desc: 'Description',
    apk: 'https://drive.google.com/uc?export=download&id=1YZIm5FuRcw8TXgP7WeL_9MyD231eqr-5',
    screenshots: [
      'assets/age_calculator/screenshot1.jpg'
    ]
  },
  {
    id: 'app5',
    title: 'Torch',
    image: 'assets/torch/ic_icon_round.png',
    keywords: 'Keywords',
    desc: 'Description',
    apk: 'https://drive.google.com/uc?export=download&id=1YZUMyO3rSTjTHL3bej97DuaKFUlh4ufc',
    screenshots: [
      'assets/torch/screenshot1.jpg'
    ]
  },
  {
    id: 'app6',
    title: 'BMI Calculator',
    image: 'assets/bmi_calculator/ic_icon_round.png',
    keywords: 'Keywords',
    desc: 'Description',
    apk: 'https://drive.google.com/uc?export=download&id=1Yknnmt_k5QXRZBydyYeA3hUQjgM5OZjr',
    screenshots: [
      'assets/bmi_calculator/screenshot1.jpg'
    ]
  }
];


  const appContainer = document.getElementById("appContainer");

  apps.forEach(app => {
    const card = document.createElement("div");
    card.className = "app-card";
    card.setAttribute("onclick", `openPopup('${app.id}')`);

    card.innerHTML = `
      <img src="${app.image}" alt="App Icon">
      <h3>${app.title}</h3>
      <p>${app.keywords}</p>
    `;

    appContainer.appendChild(card);
  });
 
  function openPopup(appId) {
    const app = apps[appId];
    document.getElementById('popup-icon').src = app.image;
    document.getElementById('popup-title').textContent = app.title;
    document.getElementById('popup-desc').textContent = app.desc;
    document.getElementById('download-link').href = app.apk;
  ``
    const ssContainer = document.getElementById('popup-screenshots');
    ssContainer.innerHTML = '';
    app.screenshots.forEach(src => {
      const img = document.createElement('img');
      img.src = app.screenshots;
      ssContainer.appendChild(img);
    });
  
    document.getElementById('popup').style.display = 'flex';
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }