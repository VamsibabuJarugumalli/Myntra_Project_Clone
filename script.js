let bagItems;
onLoad();

function onLoad() {
  let bagItemStr = localStorage.getItem('bagItems');
  bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
  DisplayItems();
  bagItemValues();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  bagItemValues();
}

function bagItemValues() {
  let values = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    values.style.visibility = 'visible';
    values.innerText = bagItems.length;
  } else {
    values.style.visibility = 'hidden';
  }
}

function DisplayItems() {
  let itemsContainersElements = document.querySelector('.items-cont');
  if (!itemsContainersElements) return;

  let innerHtml = '';
  items.forEach((item) => {
    innerHtml += `
      <div class="item-cont">
        <img class="item-img" src="${item.image}" alt="item image">
        <div class="rating">${item.rating.stars}⭐ | ${item.rating.count}</div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn" onclick="addToBag(${item.id});">Add to Bag</button>
      </div>`;
  });

  itemsContainersElements.innerHTML = innerHtml;
}
