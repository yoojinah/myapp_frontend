// main화면 NEW ITEM 레이아웃 상품(item) 리스트 보여주기
(() => {
  // 1. db에 데이터를 다 넣기 (이미지 변환까지 해서) -> ok
  // 2. 코드 주석처리하고, 먼저 data가 제대로 배열로 넘어오는지 console.log 확인 -> ok

  // 3. foreach, for문을 써서 전체적으로 반복해서 보여주기 데이터 -> ok
  fetch("http://localhost:8080/main", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const itemContainer = document.querySelector(".product_list aside");

      data.forEach((itemData) => {
        console.log(typeof itemData.productPrice);
        const items = document.createElement("div");
        items.classList = "item";
        // 가격에 , 붙이기
        const localPrice = itemData.productPrice.toLocaleString();
        console.log(localPrice);
        // product 구조 생성
        items.innerHTML = `
          <div>
            <a href="">
                <img src="data:image/jpg;base64,${itemData.productImage}" alt="상품이미지" />
            </a>
          </div>
          <div class="pr_info">
            <div>
              <h4 class="productName">${itemData.productName}</h4>
              <button><i class="xi-basket"></i></button>
            </div>
            <span class="productColor">${itemData.productColor}</span>
            <small class="productPrice">${localPrice}</small>
          </div>
        `;

        const addCartBtn = items.querySelector("button");
        addCartBtn.addEventListener("click", (e) => {
          e.preventDefault();
          const cartContainer = document.forms[0];
          console.log(cartContainer);
          const cartItem = document.createElement("div");
          cartItem.classList = "cart_item";
          cartItem.style.borderBottom = "1px solid #ededed";

          // quantity
          let quantity = 1; // 초기 수량 값

          const numberPrice = itemData.productPrice;

          cartItem.innerHTML = `
            <input type="checkbox" />
            <div>
              <img src="data:image/jpg;base64,${itemData.productImage}" alt="" />
            </div>
            <div>
              <h4>${itemData.productName}</h4>
              <span>${itemData.productColor}</span>
            </div>
            <div>
              <strong>${quantity}</strong>
              <div>
                <button class="increaseBtn">▲</button>
                <button class="decreaseBtn">▼</button>
              </div>
            </div>
            <small>${itemData.productPrice}</small> <!-- Display original price -->
            <div>
              <button class="removeBtn" data-no="${itemData.no}">Delete</button>
            </div>
          `;

          const increaseBtn = cartItem.querySelector(".increaseBtn");
          const decreaseBtn = cartItem.querySelector(".decreaseBtn");
          const price = cartItem.querySelector("small");
          const removeBtns = cartItem.querySelectorAll(".removeBtn");

          // 수량추가 버튼 이벤트
          increaseBtn.addEventListener("click", (e) => {
            e.preventDefault();
            quantity++;
            cartItem.querySelector("strong").textContent = `${quantity}`;
            const totalPrice = numberPrice * quantity;
            price.textContent = totalPrice.toLocaleString();
          });
          // 수량삭제 버튼 이벤트
          decreaseBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (quantity > 1) {
              quantity--;
              cartItem.querySelector("strong").textContent = `${quantity}`;
              const totalPrice = numberPrice * quantity;
              price.textContent = totalPrice.toLocaleString();
            }
          });
          // 장바구니 상품 삭제
          removeBtns.forEach((removeItem) => {
            removeItem.addEventListener("click", async (e) => {
              e.preventDefault();
              const no = removeItem.getAttribute("data-no");

              console.log(no);
              const cartItem = removeItem.closest(".cart_item");
              console.log(cartItem);

              const response = await fetch(`http://localhost:8080/main/${no}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              });

              console.log(response);
            });
          });

          cartContainer.appendChild(cartItem);
        });
        // 새로운 product를 itemContainer에 추가
        itemContainer.appendChild(items);
      });
    });
})();
// 4. 장바구니 테이블 생성
// 5. 장바구니에 담는 fetch (PUT, POST)는 버튼을 클릭하면 동작하도록 추가

// addToCart.forEach((button) => {
//   button.addEventListener("click", async (e) => {
//     e.preventDefault();

//     window.alert("장바구니에 담겼습니다.");

//     // 장바구니에 저장되는 코드 추가 (FETCH)
//     // 장바구니 저장, 장바구니에 있는 아이템 삭제, 검색하는 API

//     const item = button.closest(".item");
//     console.log(item);

//     const cartList = document.forms[0];

//     const cartProductList = document.createElement("div");
//     cartProductList.classList.add("cart_item");
//     cartProductList.innerHTML = `
//       <div>
//         <input type="checkbox" name="" id="" />

//         <div>
//           <img src="" alt="" />
//         </div>
//         <div>
//           <h4></h4>
//           <span></span>
//         </div>
//         <p>quentity :</p>
//         <small></small>
//         <div>
//           <button id="removeBtn">Delete</button>
//         </div>
//       </div>
//     `;

//     cartList.appendChild(cartProductList);

//     const cartItemCheckbox = cartProductList.querySelector(
//       "input[type='checkbox']"
//     );
//     cartItemCheckbox.checked = true;

//     const selectAllCheckbox = document.querySelector(
//       "article form input[type='checkbox']"
//     );
//     const cartItemCheckboxes = document.querySelectorAll(
//       ".cart_item input[type='checkbox']"
//     );

//     selectAllCheckbox.addEventListener("change", (e) => {
//       e.preventDefault();
//       const isChecked = selectAllCheckbox.checked;

//       cartItemCheckboxes.forEach((checkbox) => {
//         checkbox.checked = isChecked;
//       });
//       cartItemCheckbox.checked = true;
//     });
//   });
// });
