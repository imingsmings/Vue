class MyInfo extends HTMLElement {
  constructor() {
    super();

    this.title = this.textContent;
    this.myName = this.getAttribute('name');
    this.age = this.getAttribute('age');
    this.occupation = this.getAttribute('occupation');

    this.init();
  }

  init() {
    var shadowDOM = this.attachShadow({ mode: 'open' });
    shadowDOM.appendChild(this.createDOM());
  }

  createDOM() {
    var oContainer = this.createContainer();
    oContainer.appendChild(this.creatTitle());
    oContainer.appendChild(this.createName());
    oContainer.appendChild(this.createAge());
    oContainer.appendChild(this.createOccupation());
    return oContainer;
  }

  createContainer() {
    var oContainer = document.createElement('div');
    oContainer.className = 'my-info-container';
    return oContainer;
  }

  creatTitle() {
    var oTitle = document.createElement('h1');
    oTitle.className = 'my-info-title';
    oTitle.textContent = this.title;
    return oTitle;
  }

  createName() {
    var oName = document.createElement('p');
    oName.className = 'my-info-name';
    oName.textContent = `Name: ${this.myName}`;
    return oName;
  }

  createAge() {
    var oAge = document.createElement('p');
    oAge.className = 'my-info-age';
    oAge.textContent = `Age: ${this.age}`;
    return oAge;
  }

  createOccupation() {
    var oOccupation = document.createElement('p');
    oOccupation.className = 'my-info-occupation';
    oOccupation.textContent = `Occupation: ${this.occupation}`;
    return oOccupation;
  }
}

class MyArticle extends HTMLElement {
  constructor() {
    super();
    this.init();
  }

  init() {
    var _tpl = document.getElementById('my-article').content;
    var shadowDOM = this.attachShadow({ mode: 'open' });
    shadowDOM.appendChild(_tpl);
  }
}

export { MyInfo, MyArticle };
