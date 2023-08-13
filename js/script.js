(() => {

    fetch("http://localhost:8080/shopping", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {

        // let name = document.querySelector("#productName");
        // name.innerHTML = data[0].productName;
        // let color = document.querySelector("#productColor");
        // color.innerHTML = data[0].productColor;
        // let price = document.querySelector("#productPrice");
        // price.innerHTML = data[0].productPrice;
        // let image = document.querySelector("#productImage");
        // image.src = "data:image/jpg;base64, " + data[0].productImage;
        
        // 1. db에 데이터를 다 넣기 (이미지 변환까지 해서)
        // 2. 코드 주석처리하고, 먼저 data가 제대로 배열로 넘어오는지 console.log 확인
        // 3. foreach, for문을 써서 전체적으로 반복해서 보여주기 데이터
        // 4. 장바구니 테이블 생성
        // 5. 장바구니에 담는 fetch (PUT, POST)는 버튼을 클릭하면 동작하도록 추가
        
        const itemContainers = document.querySelectorAll(".item");
        const parentContainer = itemContainer.parentElement;

        data.forEach((item) => {
          const items = itemContainers.cloneNode(true);
          console.log(items);
          
          const productName = items.querySelector(".productName");
          productName.innerHTML = item.productName;
          
          const productColor = items.querySelector(".productColor");
          productColor.innerHTML = item.productColor;
          
          const productPrice = items.querySelector(".productPrice");
          productPrice.innerHTML = item.productPrice;
          
          const productImage = items.querySelector("#productImage");
          productImage.src = "data:image/jpg;base64, " + item.productImage;

          parentContainer.appendChild(items);
        });
      });

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
})();
