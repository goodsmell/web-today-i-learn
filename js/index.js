// js/index.js 완성 예시
const tilForm = document.querySelector('#til-form');
const tilList = document.querySelector('#til-list');

tilForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const date = document.querySelector('#til-date').value;
  const title = document.querySelector('#til-title').value;
  const content = document.querySelector('#til-content').value;

  // 새 항목 생성
  const newItem = document.createElement('article');
  newItem.className = 'til-item';
  newItem.innerHTML = `
    <time>${date}</time>
    <h3>${title}</h3>
    <p>${content}</p>
  `;

  // 목록 상단에 추가
  tilList.prepend(newItem);

  // 폼 초기화
  tilForm.reset();
});
